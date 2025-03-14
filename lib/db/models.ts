import mongoose from "mongoose"

// Coupon Schema
const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Claim Schema
const claimSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  cookieId: {
    type: String,
    required: true,
  },
  couponId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coupon",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

// Create models
export const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema)
export const Claim = mongoose.models.Claim || mongoose.model("Claim", claimSchema)

