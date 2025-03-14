"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image
          src="/backg.jpg?height=1920&width=1080"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Crafting Digital Experiences That Inspire
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We combine strategic thinking with exceptional design to create digital solutions that drive meaningful
          results for forward-thinking brands.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
            <Link href="/claims">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

