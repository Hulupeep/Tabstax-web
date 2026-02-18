# TabStax React v0 Mockups Index

## Mockup Files Location
/home/xanacan/Dropbox/code/linkbomb/spec/mocks/

## Context & Purpose
This index catalogs all mockup files for the TabStax browser extension, providing agents with a comprehensive reference for implementing the complete user journey from installation to Pro subscription.

## File Structure Analysis

### Expected Mockup Categories

#### Core Interface Mockups
- **main-interface.html** - Primary extension popup with tab management
- **popup-default.html** - Default state with sample Stax
- **stax-selector.html** - Dropdown and tab selection interface

#### Authentication Flow Mockups  
- **auth-screen.html** - Sign in/sign up toggle form
- **signin-form.html** - Email/password authentication
- **signup-form.html** - New user registration

#### Monetization Flow Mockups
- **paywall-screen.html** - Pro upgrade with €3.99/month pricing
- **maybe-later-screen.html** - Retention attempt with $20 annual offer
- **pricing-comparison.html** - Feature comparison table

#### Payment Integration Mockups
- **stripe-redirect.html** - Payment processing states
- **success-screen.html** - Payment confirmation with confetti
- **cancel-screen.html** - Payment cancellation recovery

#### User State Variations
- **free-user-view.html** - Limited features, sync button visible
- **pro-user-view.html** - Full features, no sync button
- **trial-user-view.html** - Pro features with trial countdown

## User Journey Mapping
Based on the implementation requirements, mockups should demonstrate:

### 1. First Install Experience
\`\`\`
Extension Install → Main Interface → Sample Stax → Sync Button (Pulsing)
\`\`\`
- Shows example tabs from different categories
- Sync button prominently displayed with animation
- Clear value proposition for cloud sync

### 2. Authentication Flow
\`\`\`
Sync Click → Auth Screen → Sign In/Up Toggle → Form Validation
\`\`\`
- Seamless transition from main interface
- Toggle between existing/new user flows
- Email/password validation with loading states

### 3. Monetization Funnel
\`\`\`
Auth Success → Paywall → Maybe Later → Annual Offer → Payment
\`\`\`
- Feature showcase with visual benefits
- Pricing strategy (trial → monthly → annual)
- Progressive value proposition enhancement

### 4. Payment Completion
\`\`\`
Stripe Checkout → Success/Cancel → Feature Activation → Main Interface
\`\`\`
- External payment processing
- Celebration and onboarding
- Return to enhanced interface

### 5. User State Management
\`\`\`
Free → Trial → Pro (with appropriate UI changes)
\`\`\`
- Dynamic interface based on subscription status
- Feature gating and upgrade prompts
- Clear value demonstration

## Implementation Priority for Agents

### Phase 1: Core Functionality
1. **main-interface.html** - Primary popup with tab management
   - Stax dropdown selector
   - Tab list with checkboxes
   - Smart Open button (All vs Selected logic)
   - Make/Update Stax functionality

### Phase 2: User Onboarding  
2. **auth-screen.html** - Authentication interface
   - Sign in/sign up toggle
   - Form validation and error states
   - Supabase integration points

### Phase 3: Monetization
3. **paywall-screen.html** - Pro upgrade interface
   - Feature showcase with icons
   - Pricing display (€4.99 → €3.99)
   - Trial offer presentation

4. **maybe-later-screen.html** - Retention interface
   - Free plan limitations
   - Annual offer ($20 deal)
   - Persuasion messaging

### Phase 4: Payment Flow
5. **success-screen.html** - Payment confirmation
   - Celebration elements (confetti)
   - Feature activation display
   - Onboarding guidance

6. **cancel-screen.html** - Recovery interface
   - Reassurance messaging
   - Value proposition reminder
   - Re-engagement options

## Technical Requirements from Mockups

### React Component Structure
\`\`\`typescript
// Expected component hierarchy
├── popup.tsx (main container)
├── auth-screen.tsx (authentication)
├── paywall-screen.tsx (monetization)
├── maybe-later-screen.tsx (retention)
├── success-screen.tsx (confirmation)
└── cancel-screen.tsx (recovery)
\`\`\`

### Browser Extension Integration
- Manifest v3 compatibility
- Chrome/Firefox cross-browser support
- Tab management permissions
- Storage API integration

### Payment System Integration
- Supabase edge function calls
- Stripe checkout session creation
- Success/cancel URL handling
- User state persistence

### Smart UI Behaviors
- Dynamic button text (Open All/Selected)
- Conditional sync button visibility
- Real-time selection counting
- Loading state management

### User State Management
\`\`\`typescript
interface User {
  id: string
  email: string
  plan_type: "free" | "trial" | "pro" | null
}
\`\`\`

## Mockup Analysis Guidelines for Agents

### Visual Design Extraction
- Color palette and brand consistency
- Typography scale and hierarchy
- Spacing and layout patterns
- Interactive element styling

### Interaction Pattern Documentation
- Button behaviors and states
- Form validation approaches
- Navigation flow logic
- Error handling presentation

### Content Strategy Analysis
- Messaging tone and voice
- Value proposition presentation
- Call-to-action effectiveness
- User guidance clarity

### Technical Implementation Notes
- Component prop interfaces
- State management patterns
- API integration points
- Cross-browser compatibility

## Expected Deliverables from Mockup Analysis

### 1. Component Specifications
- Detailed prop interfaces
- State management requirements
- Event handler definitions
- Styling approach (Tailwind classes)

### 2. User Flow Documentation
- Screen transition logic
- Conditional rendering rules
- Error state handling
- Success path optimization

### 3. Integration Requirements
- Supabase function calls
- Browser extension APIs
- Stripe payment integration
- Local storage management

### 4. Testing Scenarios
- User journey validation
- Error condition handling
- Cross-browser compatibility
- Payment flow verification

## Quality Assurance Checklist

### Visual Consistency
- [ ] Brand colors and typography maintained
- [ ] Consistent spacing and layout
- [ ] Proper icon usage and sizing
- [ ] Responsive design principles

### Functional Requirements
- [ ] All user flows implemented
- [ ] Smart button behaviors working
- [ ] Payment integration functional
- [ ] Error handling comprehensive

### User Experience
- [ ] Intuitive navigation patterns
- [ ] Clear value proposition
- [ ] Smooth state transitions
- [ ] Helpful error messages

### Technical Implementation
- [ ] TypeScript interfaces defined
- [ ] Component props documented
- [ ] API integration tested
- [ ] Cross-browser compatibility verified

---

**Note for Agents**: Analyze mockups in the specified priority order, extracting both visual design patterns and functional requirements. Focus on creating a seamless user experience that guides users from installation through successful Pro subscription conversion.
