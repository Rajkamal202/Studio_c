"use server"

import { cookies } from "next/headers"
import { headers } from "next/headers"
import { v4 as uuidv4 } from "uuid"
import dbConnect from "@/lib/db/connect"
import { Coupon, Claim } from "@/lib/db/models"

// Define types
type ClaimResult = {
  success: boolean
  coupon?: string
  message?: string
  timeRemaining?: number
}

// Initialize database with sample coupons if empty
async function initializeDatabase() {
  await dbConnect()

  // Check if coupons exist
  const couponCount = await Coupon.countDocuments()

  if (couponCount === 0) {
    // Create sample coupons
    const sampleCoupons = [
      { code: "SAVE20", description: "20% off your purchase" },
      { code: "FREESHIP", description: "Free shipping on your order" },
      { code: "EXTRA10", description: "Extra 10% off sale items" },
      { code: "WELCOME15", description: "15% off for new customers" },
      { code: "BUNDLE25", description: "25% off when you buy 2+ items" },
    ]

    await Coupon.insertMany(sampleCoupons)
  }
}

// Get the next coupon in round-robin fashion
async function getNextCoupon() {
  await dbConnect()

  // Get all active coupons
  const coupons = await Coupon.find({ active: true }).sort({ code: 1 })

  if (coupons.length === 0) return null

  // Get the most recent claim
  const latestClaim = await Claim.findOne().sort({ timestamp: -1 })

  // If no claims yet, return the first coupon
  if (!latestClaim) return coupons[0]

  // Find the index of the last claimed coupon
  const lastCouponId = latestClaim.couponId.toString()
  const lastIndex = coupons.findIndex((c) => c._id.toString() === lastCouponId)

  // Return the next coupon in round-robin fashion
  const nextIndex = (lastIndex + 1) % coupons.length
  return coupons[nextIndex]
}

// Main action function
export async function claimCoupon(): Promise<ClaimResult> {
  try {
    await initializeDatabase()

    // Get user identifiers
    const headersList = headers()
    const ip = headersList.get("x-forwarded-for") || "unknown"

    // Set or get cookie for browser tracking
    const cookieStore = cookies()
    let cookieId = cookieStore.get("coupon_user_id")?.value

    if (!cookieId) {
      cookieId = uuidv4()
      cookieStore.set("coupon_user_id", cookieId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      })
    }

    // Check for abuse (claiming too frequently)
    const COOLDOWN_PERIOD = 60 * 60 // 1 hour in seconds
    const now = new Date()
    const oneHourAgo = new Date(now.getTime() - COOLDOWN_PERIOD * 1000)

    // Check if user has claimed recently (by IP or cookie)
    const recentClaim = await Claim.findOne({
      $or: [{ ip }, { cookieId }],
      timestamp: { $gte: oneHourAgo },
    })

    if (recentClaim) {
      const timeRemaining = Math.ceil((recentClaim.timestamp.getTime() + COOLDOWN_PERIOD * 1000 - now.getTime()) / 1000)

      return {
        success: false,
        message: "You've already claimed a coupon recently. Please wait before claiming another.",
        timeRemaining,
      }
    }

    // Get the next coupon in the round-robin sequence
    const nextCoupon = await getNextCoupon()
    if (!nextCoupon) {
      return {
        success: false,
        message: "No coupons available at this time. Please try again later.",
      }
    }

    // Record the claim
    await Claim.create({
      ip,
      cookieId,
      couponId: nextCoupon._id,
      timestamp: now,
    })

    // Return success with the coupon
    return {
      success: true,
      coupon: nextCoupon.code,
      message: `You've successfully claimed a coupon: ${nextCoupon.description}`,
    }
  } catch (error) {
    console.error("Error claiming coupon:", error)
    return {
      success: false,
      message: "An error occurred while processing your request. Please try again later.",
    }
  }
}

