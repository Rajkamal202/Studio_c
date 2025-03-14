import { NextResponse } from "next/server"
import dbConnect from "@/lib/db/connect"
import { Coupon, Claim } from "@/lib/db/models"

export async function GET() {
  try {
    await dbConnect()

    // Clear existing data
    await Coupon.deleteMany({})
    await Claim.deleteMany({})

    // Create sample coupons
    const coupons = await Coupon.insertMany([
      { code: "SAVE20", description: "20% off your purchase" },
      { code: "FREESHIP", description: "Free shipping on your order" },
      { code: "EXTRA10", description: "Extra 10% off sale items" },
      { code: "WELCOME15", description: "15% off for new customers" },
      { code: "BUNDLE25", description: "25% off when you buy 2+ items" },
      { code: "FLASH30", description: "30% off flash sale" },
      { code: "LOYALTY10", description: "10% off for returning customers" },
      { code: "HOLIDAY15", description: "15% off holiday special" },
    ])

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
      data: { coupons: coupons.length },
    })
  } catch (error) {
    console.error("Error seeding database:", error)
    return NextResponse.json(
      { success: false, message: "Failed to seed database", error: String(error) },
      { status: 500 },
    )
  }
}

