"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, XCircle, RefreshCw, DollarSign, Shield, Clock } from "lucide-react"

interface CancelScreenProps {
  onBack: () => void
  onTryAgain: () => void
  onReturnToMain: () => void
}

export function CancelScreen({ onBack, onTryAgain, onReturnToMain }: CancelScreenProps) {
  return (
    <Card className="w-[400px] h-[600px] flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <CardTitle className="text-lg text-orange-600 flex items-center gap-2">
            <XCircle className="w-5 h-5" />
            Payment Cancelled
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-xl font-semibold mb-2">No worries!</h2>
          <p className="text-gray-600 text-sm">Your payment was cancelled. No charges were made to your account.</p>
        </div>

        {/* Reminder of what they're missing */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3 text-center">Quick reminder of what you'd get:</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Encrypted cloud sync across all devices</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <RefreshCw className="w-4 h-4 text-blue-600" />
              <span>Never lose your Stax again</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="w-4 h-4 text-purple-600" />
              <span>Just $20 for the entire year</span>
            </div>
          </div>
        </div>

        {/* Common reasons and reassurance */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-blue-800">Having second thoughts?</h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p>
              • <strong>Security:</strong> We use Stripe for payments - bank-level security
            </p>
            <p>
              • <strong>No recurring charges:</strong> Pay once, use for a full year
            </p>
            <p>
              • <strong>Fair pricing:</strong> Less than $2/month for premium features
            </p>
          </div>
        </div>

        {/* Limited time reminder */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Limited Time Offer</span>
          </div>
          <p className="text-sm opacity-90">This $20 annual deal won't last forever. Secure your Pro features today.</p>
        </div>

        {/* Action buttons */}
        <div className="mt-auto space-y-3">
          <Button
            onClick={onTryAgain}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
          >
            Try Payment Again
          </Button>

          <Button variant="outline" onClick={onReturnToMain} className="w-full">
            Return to TabStax
          </Button>
        </div>

        <div className="text-xs text-gray-500 text-center">Need help? Contact support at help@tabstax.com</div>
      </CardContent>
    </Card>
  )
}
