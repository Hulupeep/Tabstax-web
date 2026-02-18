"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Cloud, Shield, Users, Calendar, Star, ArrowRight } from "lucide-react"

interface SuccessScreenProps {
  onContinue: () => void
}

export function SuccessScreen({ onContinue }: SuccessScreenProps) {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    // Hide confetti effect after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const unlockedFeatures = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      title: "Cloud Sync",
      description: "Your Stax are now synced across all your devices",
      status: "Active",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Enterprise Encryption",
      description: "All your links are now secured with AES-256 encryption",
      status: "Active",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Team Sharing",
      description: "Share Stax with colleagues and collaborate seamlessly",
      status: "Active",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      title: "Priority Support",
      description: "Get help faster with our dedicated Pro support team",
      status: "Active",
    },
  ]

  const nextSteps = [
    "Create your first encrypted Stax",
    "Set up team sharing with colleagues",
    "Sync your existing Stax to the cloud",
    "Explore advanced organization tools",
  ]

  return (
    <Card className="w-[400px] h-[600px] flex flex-col relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="confetti-container">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  backgroundColor: ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"][Math.floor(Math.random() * 4)],
                }}
              />
            ))}
          </div>
        </div>
      )}

      <CardHeader className="pb-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <div className="absolute -top-1 -right-1">
              <Calendar className="w-6 h-6 text-blue-500 animate-pulse" />
            </div>
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-green-600 mb-2">Brilliant! You're in.</CardTitle>
        <p className="text-gray-600">Welcome to TabStax Pro - Look what you've unlocked:</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-6">
        {/* Annual Plan Info */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Pro Annual Plan Activated</span>
          </div>
          <p className="text-sm opacity-90">
            Full access for one year • No recurring charges • Expires{" "}
            {new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}
          </p>
        </div>

        {/* Unlocked Features */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Features Unlocked
          </h3>
          <div className="space-y-3">
            {unlockedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                {feature.icon}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{feature.title}</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{feature.status}</span>
                  </div>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="font-semibold mb-3">What to do next:</h3>
          <div className="space-y-2">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </div>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Button
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg py-3"
          >
            <div className="flex items-center justify-center gap-2">
              Start Using Pro Features
              <ArrowRight className="w-5 h-5" />
            </div>
          </Button>
        </div>

        <div className="text-xs text-gray-500 text-center">Questions? Contact our Pro support team anytime</div>
      </CardContent>
    </Card>
  )
}
