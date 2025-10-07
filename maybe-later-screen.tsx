"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, AlertTriangle, X, Shield, Cloud, DollarSign } from "lucide-react"

interface MaybeLaterScreenProps {
  onBack: () => void
  onStartTrial: () => void
  onClose: () => void
}

export function MaybeLaterScreen({ onBack, onStartTrial, onClose }: MaybeLaterScreenProps) {
  const limitations = [
    {
      icon: <X className="w-5 h-5 text-red-500" />,
      title: "No Cross-Browser Sync",
      description: "Your Stax are trapped in this browser only",
      impact: "Lose access when switching devices or browsers",
    },
    {
      icon: <X className="w-5 h-5 text-red-500" />,
      title: "No Encryption",
      description: "Your sensitive work links are stored in plain text",
      impact: "Security risk for confidential projects",
    },
    {
      icon: <X className="w-5 h-5 text-red-500" />,
      title: "No Backup Protection",
      description: "Browser crashes or updates can wipe your Stax",
      impact: "Hours of work organizing tabs could vanish",
    },
    {
      icon: <X className="w-5 h-5 text-red-500" />,
      title: "No Team Collaboration",
      description: "Can't share Stax with colleagues or clients",
      impact: "Miss out on productivity gains with your team",
    },
  ]

  return (
    <Card className="w-[400px] h-[600px] flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <CardTitle className="text-lg text-red-600 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Wait! This might be a mistake...
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold mb-2">Without Pro, you're missing out on:</h2>
          <p className="text-sm text-gray-600">Here's what happens when you stay on the free plan</p>
        </div>

        {/* Limitations */}
        <div className="space-y-4 flex-1">
          {limitations.map((limitation, index) => (
            <div key={index} className="border border-red-100 bg-red-50 p-3 rounded-lg">
              <div className="flex items-start gap-3">
                {limitation.icon}
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-red-800">{limitation.title}</h4>
                  <p className="text-xs text-red-600 mb-1">{limitation.description}</p>
                  <p className="text-xs text-gray-600 italic">→ {limitation.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Last Chance Offer */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DollarSign className="w-5 h-5" />
            <span className="font-semibold">Last Chance - One Year Deal</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl font-bold">$20</span>
            <span className="text-lg opacity-90">for the whole year</span>
          </div>
          <div className="text-sm opacity-90 mb-2">
            That's just <span className="font-semibold">$1.67/month</span> • 20 George Washingtons
          </div>
          <div className="flex items-center justify-center gap-4 text-xs opacity-75">
            <span>✓ No recurring billing</span>
            <span>✓ Ends 100% after one year</span>
            <span>✓ Fair deal</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="space-y-3">
          <Button
            onClick={onStartTrial}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg py-3"
          >
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <Cloud className="w-5 h-5" />
              Sure. Let's do this.
            </div>
          </Button>

          <Button variant="outline" onClick={onClose} className="w-full text-gray-600">
            I'll stick with limited features
          </Button>
        </div>

        <div className="text-xs text-gray-500 text-center">Join 10,000+ professionals who upgraded to Pro</div>
      </CardContent>
    </Card>
  )
}
