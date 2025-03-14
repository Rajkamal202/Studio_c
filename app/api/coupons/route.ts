import { NextResponse } from "next/server"
import dbConnect from "@/lib/db/connect"
import { Coupon } from "@/lib/db/models"

export async function GET() {
  try {
    await dbConnect()

    const coupons = await Coupon.find({ active: true }).select("code description -_id")

    return NextResponse.json({
      success: true,
      data: coupons,
    })
  } catch (error) {
    console.error("Error fetching coupons:", error)
    return NextResponse.json(
      { success: false, message: "Failed to fetch coupons", error: String(error) },
      { status: 500 },
    )
  }
}

