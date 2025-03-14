import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works - ExclusiveCoupons",
  description: "Learn how our fair round-robin coupon distribution system works",
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-8 inline-flex items-center text-sm text-white/70 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">How Our System Works</h1>
            <p className="text-xl text-gray-300">Understanding our fair coupon distribution and abuse prevention</p>
          </div>

          <div className="space-y-12">
            <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">Round-Robin Distribution</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our system uses a round-robin algorithm to distribute coupons fairly among all users. Here's how it
                  works:
                </p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>We maintain a list of available coupons in a specific order.</li>
                  <li>When a user claims a coupon, they receive the next coupon in the sequence.</li>
                  <li>After the last coupon is claimed, the system starts again from the first coupon.</li>
                  <li>This ensures that all coupons get equal exposure and distribution.</li>
                </ol>
                <p className="mt-4">
                  Unlike first-come-first-served systems where the fastest users claim all the best coupons, our
                  round-robin approach ensures fairness for everyone, regardless of when they visit.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">Abuse Prevention Mechanisms</h2>
              <div className="space-y-4 text-gray-300">
                <p>To maintain fairness, we've implemented several abuse prevention mechanisms:</p>

                <div className="rounded-xl bg-white/5 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">IP Address Tracking</h3>
                  <p>
                    Our system records the IP address of each user who claims a coupon. This prevents users from
                    claiming multiple coupons by refreshing the page or using different browser sessions.
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">Cookie-Based Identification</h3>
                  <p>
                    We use browser cookies to create a unique identifier for each visitor. This provides an additional
                    layer of tracking to prevent abuse, even if the user attempts to change their IP address.
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">Time Restrictions</h3>
                  <p>
                    Users are limited to claiming one coupon per hour. The system tracks the timestamp of each claim and
                    enforces a cooldown period before the same user can claim another coupon.
                  </p>
                </div>

                <p className="mt-4">
                  These combined measures ensure that our coupon distribution remains fair and resistant to common
                  exploitation techniques.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">User Experience</h2>
              <div className="space-y-4 text-gray-300">
                <p>We've designed the system with user experience in mind:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>No registration required - claim coupons instantly without creating an account</li>
                  <li>Clear feedback - you'll know immediately if your claim was successful</li>
                  <li>
                    Transparent waiting periods - if you've recently claimed a coupon, we'll show you exactly when you
                    can claim another
                  </li>
                  <li>Simple interface - no complicated steps or confusing processes</li>
                </ul>
                <p className="mt-4">
                  Our goal is to make saving money with coupons as easy and fair as possible for everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-xl text-white">Ready to try it yourself?</p>
            <Link href="/claim">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              >
                Claim Your Coupon <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

