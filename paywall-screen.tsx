"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Cloud, Shield, Users, Check, Zap } from "lucide-react"

interface PaywallScreenProps {
  onBack: () => void
  onUpgrade: () => void
  onMaybeLater?: () => void
}

export function PaywallScreen({ onBack, onUpgrade, onMaybeLater }: PaywallScreenProps) {
  const [loading, setLoading] = useState(false)

  const handleStartTrial = async () => {
    setLoading(true)

    // Simulate Stripe checkout process
    setTimeout(() => {
      onUpgrade() // This will now show the success screen
      setLoading(false)
    }, 2000)
  }

  const features = [
    {
      icon: <Cloud className="w-5 h-5 text-blue-600" />,
      title: "Cloud Sync",
      description: "Access your Stax from any device, anywhere",
    },
    {
      icon: <Shield className="w-5 h-5 text-green-600" />,
      title: "Encrypted Storage",
      description: "Your data is secured with enterprise-grade encryption",
    },
    {
      icon: <Users className="w-5 h-5 text-purple-600" />,
      title: "Team Sharing",
      description: "Share Stax with your team and collaborate seamlessly",
    },
  ]

  const benefits = [
    "Unlimited Stax creation",
    "Cross-device synchronization",
    "Encrypted link sharing",
    "Team workspaces",
    "Priority support",
    "Advanced organization tools",
  ]

  return (
    <Card className="w-[400px] h-[600px] flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <CardTitle className="text-lg">Upgrade to Pro</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-6">
        {/* Trial Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">7-Day Free Trial</span>
          </div>
          <p className="text-sm opacity-90">
            Try all Pro features risk-free, then just <span className="line-through">€4.99</span>{" "}
            <span className="font-bold">€3.99/month</span>
          </p>
        </div>

        {/* Why Sync Section */}
        <div>
          <h3 className="font-semibold mb-3">Why sync your Stax?</h3>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                {feature.icon}
                <div>
                  <h4 className="font-medium text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits List */}
        <div>
          <h3 className="font-semibold mb-3">What you get:</h3>
          <div className="grid grid-cols-1 gap-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-lg text-gray-500 line-through">€4.99</span>
            <span className="text-2xl font-bold text-green-600">€3.99</span>
            <span className="text-gray-600">/month</span>
          </div>
          <p className="text-sm text-green-600 font-medium">Limited time offer - Save €12/year!</p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-auto space-y-3">
          <Button
            onClick={handleStartTrial}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            disabled={loading}
          >
            {loading ? "Setting up your trial..." : "Start Free Trial"}
          </Button>

          <Button variant="ghost" onClick={() => onMaybeLater?.()} className="w-full text-gray-600">
            Maybe Later
          </Button>
        </div>

        <div className="text-xs text-gray-500 text-center">Cancel anytime. No commitment required.</div>
      </CardContent>
    </Card>
  )
}
