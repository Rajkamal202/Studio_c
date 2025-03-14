import { NextResponse } from "next/server"
import dbConnect from "@/lib/db/connect"
import { Claim } from "@/lib/db/models"

export async function GET() {
  try {
    await dbConnect()

    // Get total claims
    const totalClaims = await Claim.countDocuments()

    // Get claims in the last 24 hours
    const oneDayAgo = new Date()
    oneDayAgo.setDate(oneDayAgo.getDate() - 1)
    const recentClaims = await Claim.countDocuments({
      timestamp: { $gte: oneDayAgo },
    })

    // Get unique users (by cookie ID)
    const uniqueUsers = await Claim.distinct("cookieId").then((ids) => ids.length)

    return NextResponse.json({
      success: true,
      data: {
        totalClaims,
        recentClaims,
        uniqueUsers,
      },
    })
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json(
      { success: false, message: "Failed to fetch stats", error: String(error) },
      { status: 500 },
    )
  }
}

