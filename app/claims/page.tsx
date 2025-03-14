import CouponClaimForm from "@/components/coupon-claim-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Claim Your Coupon - ExclusiveCoupons",
  description: "Claim your exclusive coupon with our fair round-robin distribution system",
}

export default function ClaimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="mb-8 inline-flex items-center text-sm text-white/70 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Claim Your Exclusive Coupon
            </h1>
            <p className="text-xl text-gray-300">Our round-robin system ensures fair distribution for everyone</p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg">
            <div className="p-8">
              <CouponClaimForm />
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>Each user is limited to one coupon per hour to ensure fair distribution.</p>
            <p className="mt-2">© {new Date().getFullYear()} ExclusiveCoupons. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

