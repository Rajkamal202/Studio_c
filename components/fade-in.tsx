"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", duration = 0.5, className = "" }: FadeInProps) {
  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  }

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

