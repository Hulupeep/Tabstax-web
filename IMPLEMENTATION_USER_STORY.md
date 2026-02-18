# User Story: Implement Stripe Payment Integration for TabStax Extension

## Story Overview
**As a** TabStax user  
**I want to** upgrade to Pro by clicking a payment button  
**So that** I can access premium features like cloud sync and encryption  

## Acceptance Criteria

### 1. Payment Button Integration
- [ ] When user clicks "Start Free Trial" (monthly plan), invoke Supabase edge function with `plan: 'monthly'`
- [ ] When user clicks "Sure. Let's do this." (annual plan), invoke Supabase edge function with `plan: 'annual'`
- [ ] Show loading state while payment is processing
- [ ] Handle errors gracefully with user-friendly messages
- [ ] Open Stripe Checkout in new browser tab

### 2. Supabase Edge Function Requirements
- [ ] Create `/functions/process-payment/index.ts` edge function
- [ ] Accept `user_id` and `plan` parameters in request body
- [ ] Validate user authentication via JWT token
- [ ] Create/retrieve Stripe customer
- [ ] Generate Stripe Checkout session with correct pricing
- [ ] Return checkout URL for frontend to open

### 3. Error Handling
- [ ] Network connectivity issues
- [ ] Invalid user authentication
- [ ] Stripe API failures
- [ ] Missing environment variables
- [ ] Invalid plan parameters

## Technical Implementation

### Frontend Changes (popup.tsx)

\`\`\`typescript
// Update PaywallScreen component
const handleStartTrial = async () => {
  setLoading(true)
  
  try {
    const { data, error } = await supabase.functions.invoke(
      'process-payment',
      {
        body: JSON.stringify({
          user_id: user.id,
          plan: 'monthly'
        })
      }
    );

    if (error) {
      console.error('Checkout error:', error);
      alert('Could not start payment: ' + error.message);
      return;
    }

    // Open Stripe Checkout in new tab
    if (typeof browser !== 'undefined') {
      browser.tabs.create({ url: data.url });
    } else if (typeof chrome !== 'undefined') {
      chrome.tabs.create({ url: data.url });
    } else {
      window.open(data.url, '_blank');
    }
    
  } catch (err) {
    console.error('Payment error:', err);
    alert('Payment system temporarily unavailable. Please try again.');
  } finally {
    setLoading(false);
  }
}

// Update MaybeLaterScreen component  
const handleAnnualPurchase = async () => {
  setLoading(true)
  
  try {
    const { data, error } = await supabase.functions.invoke(
      'process-payment',
      {
        body: JSON.stringify({
          user_id: user.id,
          plan: 'annual'
        })
      }
    );

    if (error) {
      console.error('Checkout error:', error);
      alert('Could not start payment: ' + error.message);
      return;
    }

    // Open Stripe Checkout in new tab
    if (typeof browser !== 'undefined') {
      browser.tabs.create({ url: data.url });
    } else if (typeof chrome !== 'undefined') {
      chrome.tabs.create({ url: data.url });
    } else {
      window.open(data.url, '_blank');
    }
    
  } catch (err) {
    console.error('Payment error:', err);
    alert('Payment system temporarily unavailable. Please try again.');
  } finally {
    setLoading(false);
  }
}
\`\`\`

### Backend Implementation (Supabase Edge Function)

\`\`\`typescript
// /functions/process-payment/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Verify user authentication
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser()

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Parse request body
    const { user_id, plan } = await req.json()

    // Validate input
    if (!user_id || !plan) {
      return new Response(
        JSON.stringify({ error: 'Missing user_id or plan parameter' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    if (!['monthly', 'annual'].includes(plan)) {
      return new Response(
        JSON.stringify({ error: 'Invalid plan. Must be "monthly" or "annual"' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Get or create Stripe customer
    let customer
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user_id)
      .single()

    if (profile?.stripe_customer_id) {
      customer = await stripe.customers.retrieve(profile.stripe_customer_id)
    } else {
      customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_user_id: user_id,
        },
      })

      // Save customer ID to profile
      await supabaseClient
        .from('profiles')
        .update({ stripe_customer_id: customer.id })
        .eq('id', user_id)
    }

    // Define pricing based on plan
    const priceIds = {
      monthly: Deno.env.get('STRIPE_MONTHLY_PRICE_ID'), // e.g., price_monthly_trial
      annual: Deno.env.get('STRIPE_ANNUAL_PRICE_ID'),   // e.g., price_annual_20usd
    }

    const priceId = priceIds[plan as keyof typeof priceIds]
    if (!priceId) {
      return new Response(
        JSON.stringify({ error: \`Price ID not configured for \${plan} plan\` }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: plan === 'monthly' ? 'subscription' : 'payment',
      success_url: \`\${Deno.env.get('SUCCESS_URL') || 'chrome-extension://__EXTENSION_ID__/success.html'}?session_id={CHECKOUT_SESSION_ID}\`,
      cancel_url: Deno.env.get('CANCEL_URL') || 'chrome-extension://__EXTENSION_ID__/cancel.html',
      metadata: {
        user_id: user_id,
        plan: plan,
      },
      // For monthly plan, add trial period
      ...(plan === 'monthly' && {
        subscription_data: {
          trial_period_days: 7,
        },
      }),
    })

    return new Response(
      JSON.stringify({ 
        url: session.url,
        session_id: session.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error creating checkout session:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
\`\`\`

### Environment Variables Setup

\`\`\`bash
# Add to Supabase project settings
STRIPE_SECRET_KEY=sk_live_... # or sk_test_... for testing
STRIPE_MONTHLY_PRICE_ID=price_1234567890 # Monthly subscription with trial
STRIPE_ANNUAL_PRICE_ID=price_0987654321  # One-time annual payment
SUCCESS_URL=chrome-extension://__EXTENSION_ID__/success.html?session_id={CHECKOUT_SESSION_ID}
CANCEL_URL=chrome-extension://__EXTENSION_ID__/cancel.html
\`\`\`

### Database Schema Requirements

\`\`\`sql
-- Ensure profiles table has required columns
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS stripe_customer_id text,
ADD COLUMN IF NOT EXISTS plan_type text DEFAULT 'free',
ADD COLUMN IF NOT EXISTS trial_end timestamptz,
ADD COLUMN IF NOT EXISTS stripe_subscription_id text;

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_profiles_stripe_customer_id 
ON public.profiles(stripe_customer_id);
\`\`\`

## Testing Checklist

### Unit Tests
- [ ] Edge function handles valid monthly plan request
- [ ] Edge function handles valid annual plan request  
- [ ] Edge function rejects unauthenticated requests
- [ ] Edge function validates required parameters
- [ ] Edge function handles Stripe API errors gracefully

### Integration Tests
- [ ] Frontend successfully calls edge function
- [ ] Stripe Checkout session created with correct parameters
- [ ] Browser tab opens with Stripe Checkout URL
- [ ] Success/cancel URLs redirect correctly
- [ ] Customer record created/retrieved properly

### User Acceptance Tests
- [ ] User can click "Start Free Trial" and reach Stripe Checkout
- [ ] User can click "Sure. Let's do this." and reach Stripe Checkout
- [ ] Loading states display during payment processing
- [ ] Error messages show when payment fails
- [ ] Success page displays after completed payment
- [ ] Cancel page displays when payment cancelled

## Error Scenarios to Handle

### Frontend Errors
\`\`\`typescript
// Network connectivity issues
if (error.message.includes('fetch')) {
  alert('Please check your internet connection and try again.');
}

// Authentication errors  
if (error.status === 401) {
  alert('Please sign in again to continue.');
  // Redirect to auth screen
}

// Server errors
if (error.status >= 500) {
  alert('Payment system temporarily unavailable. Please try again in a few minutes.');
}
\`\`\`

### Backend Errors
- Invalid Stripe API keys
- Missing price IDs in environment
- Database connection failures
- Stripe customer creation failures
- Checkout session creation failures

## Success Metrics
- [ ] Payment conversion rate > 5%
- [ ] Checkout abandonment rate < 70%
- [ ] Error rate < 1%
- [ ] Average payment processing time < 3 seconds
- [ ] User satisfaction with payment flow > 4/5

## Rollback Plan
If issues arise:
1. Disable payment buttons in frontend
2. Show "Payment temporarily unavailable" message
3. Revert edge function to previous version
4. Monitor error logs and user feedback
5. Fix issues in development environment
6. Re-deploy with additional testing

## Definition of Done
- [ ] Code reviewed and approved
- [ ] All tests passing
- [ ] Edge function deployed to production
- [ ] Environment variables configured
- [ ] Payment flow tested end-to-end
- [ ] Error handling verified
- [ ] Documentation updated
- [ ] Monitoring and alerts configured
