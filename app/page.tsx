import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroParallax } from "@/components/hero-parallax"
import { FadeIn } from "@/components/fade-in"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function Home() {
  const services = [
    {
      title: "Brand Strategy",
      description:
        "Develop a cohesive brand identity that resonates with your target audience and sets you apart from competitors.",
      icon: "lightbulb",
      color: "bg-amber-500/10",
      textColor: "text-amber-500",
    },
    {
      title: "Web Development",
      description:
        "Create stunning, high-performance websites that deliver exceptional user experiences across all devices.",
      icon: "code",
      color: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    {
      title: "Digital Marketing",
      description:
        "Implement data-driven marketing strategies that increase visibility, engagement, and conversion rates.",
      icon: "bar-chart",
      color: "bg-green-500/10",
      textColor: "text-green-500",
    },
  ]

  const testimonials = [
    {
      quote:
        "Working with this team transformed our online presence. The attention to detail and strategic approach exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, Innovate Inc.",
      image: "/women1.jpg?height=80&width=80",
    },
    {
      quote:
        "The website they created for us perfectly captures our brand essence while delivering exceptional performance and user experience.",
      author: "Michael Chen",
      role: "Marketing Director, Elevate Group",
      image: "/men1.jpg?height=80&width=80",
    },
    {
      quote:
        "Their team's expertise and dedication to quality is evident in every aspect of our digital transformation journey.",
      author: "Emma Rodriguez",
      role: "Founder, Spectrum Solutions",
      image: "/women3.jpg?height=80&width=80",
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <HeroParallax />

      <section className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Elevating Digital Experiences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We combine strategic thinking with exceptional design to create digital solutions that drive meaningful
              results for forward-thinking brands.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="w-full bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  Crafting Digital Excellence Since 2015
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team of strategists, designers, and developers work collaboratively to create digital experiences
                  that captivate audiences and drive business growth.
                </p>
                <Button asChild size="lg">
                  <Link href="/about">
                    Learn more about us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/teamc.jpg?height=800&width=600"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We've helped businesses of all sizes achieve their digital goals.
            </p>
          </div>
        </FadeIn>

        <TestimonialCarousel testimonials={testimonials} />
      </section>

      <section className="w-full bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80 text-lg">
              Let's collaborate to create something exceptional together.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

