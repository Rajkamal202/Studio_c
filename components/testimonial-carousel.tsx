"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"

interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <FadeIn>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8 md:p-12">
            <Quote className="h-12 w-12 text-primary/20 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <blockquote className="text-xl md:text-2xl font-light italic mb-6">
                  "{testimonials[current].quote}"
                </blockquote>
                <div>
                  <p className="font-medium">{testimonials[current].author}</p>
                  <p className="text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <div className="flex justify-center mt-6 space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

