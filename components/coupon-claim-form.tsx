"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Clock } from "lucide-react"
import { claimCoupon } from "@/lib/actions"

type ClaimStatus = "idle" | "loading" | "success" | "error" | "timeout"

export default function CouponClaimForm() {
  const [status, setStatus] = useState<ClaimStatus>("idle")
  const [coupon, setCoupon] = useState<string | null>(null)
  const [message, setMessage] = useState<string>("")
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null)

  const handleClaimCoupon = async () => {
    try {
      setStatus("loading")

      const result = await claimCoupon()

      if (result.success) {
        setStatus("success")
        setCoupon(result.coupon)
        setMessage(result.message)
      } else if (result.timeRemaining) {
        setStatus("timeout")
        setTimeRemaining(result.timeRemaining)
        setMessage(result.message)
      } else {
        setStatus("error")
        setMessage(result.message || "An error occurred while claiming your coupon.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("An unexpected error occurred. Please try again later.")
    }
  }

  const formatTimeRemaining = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <Card className="border-0 bg-white/5 text-white shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Claim Your Coupon</CardTitle>
        <CardDescription className="text-gray-300">
          Our system distributes coupons in a round-robin fashion for fairness
        </CardDescription>
      </CardHeader>

      <CardContent>
        {status === "success" && (
          <div className="mb-6 rounded-lg bg-green-900/30 p-4">
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
              <p className="font-medium text-green-400">Coupon Claimed Successfully!</p>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <div className="rounded-md border border-dashed border-green-500 bg-green-900/20 px-6 py-4 text-center">
                <p className="text-sm text-gray-300">Your Coupon Code:</p>
                <p className="mt-1 text-xl font-bold tracking-wider text-white">{coupon}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">{message}</p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 rounded-lg bg-red-900/30 p-4">
            <div className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-red-400" />
              <p className="font-medium text-red-400">Error</p>
            </div>
            <p className="mt-2 text-sm text-gray-300">{message}</p>
          </div>
        )}

        {status === "timeout" && (
          <div className="mb-6 rounded-lg bg-amber-900/30 p-4">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-amber-400" />
              <p className="font-medium text-amber-400">Please Wait</p>
            </div>
            <p className="mt-2 text-sm text-gray-300">{message}</p>
            {timeRemaining && (
              <p className="mt-2 text-center font-mono text-lg text-white">{formatTimeRemaining(timeRemaining)}</p>
            )}
          </div>
        )}

        <div className="space-y-4">
          <p className="text-gray-300">
            Click the button below to claim your exclusive coupon. Our system ensures fair distribution by limiting one
            coupon per user within a time period.
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleClaimCoupon}
          disabled={status === "loading" || status === "timeout"}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
        >
          {status === "loading" ? "Processing..." : "Claim Your Coupon"}
        </Button>
      </CardFooter>
    </Card>
  )
}

