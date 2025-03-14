import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      title: "Brand Strategy",
      description:
        "Develop a cohesive brand identity that resonates with your target audience and sets you apart from competitors.",
      features: [
        "Brand positioning and messaging",
        "Visual identity development",
        "Brand guidelines and assets",
        "Market research and analysis",
      ],
      price: "Starting at $5,000",
      cta: "Learn more",
      href: "/contact?service=brand",
      featured: false,
    },
    {
      title: "Web Development",
      description:
        "Create stunning, high-performance websites that deliver exceptional user experiences across all devices.",
      features: [
        "Custom website design and development",
        "E-commerce solutions",
        "Content management systems",
        "Performance optimization",
        "Ongoing maintenance and support",
      ],
      price: "Starting at $10,000",
      cta: "Get started",
      href: "/contact?service=web",
      featured: true,
    },
    {
      title: "Digital Marketing",
      description:
        "Implement data-driven marketing strategies that increase visibility, engagement, and conversion rates.",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click advertising (PPC)",
        "Social media marketing",
        "Email marketing campaigns",
        "Analytics and reporting",
      ],
      price: "Starting at $3,000/month",
      cta: "Learn more",
      href: "/contact?service=marketing",
      featured: false,
    },
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business, goals, and target audience to establish a solid foundation for your project.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.",
    },
    {
      number: "03",
      title: "Creation",
      description:
        "Our team of specialists brings your project to life, focusing on quality, innovation, and attention to detail.",
    },
    {
      number: "04",
      title: "Launch",
      description: "We carefully deploy your project and provide ongoing support to ensure its continued success.",
    },
  ]

  return (
    <main>
      <PageHeader title="Our Services" description="Comprehensive digital solutions tailored to your business needs." />

      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end digital services designed to help your business thrive in today's competitive
              landscape.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Card className={service.featured ? "border-primary shadow-lg" : ""}>
                {service.featured && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-xl mb-4">{service.price}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={service.featured ? "default" : "outline"}>
                    <Link href={service.href}>
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="w-full bg-muted/50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-medium tracking-tight mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step) => (
                <div key={step.number} className="bg-background rounded-lg p-8 shadow-sm">
                  <div className="text-4xl font-light text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <FadeIn>
          <h2 className="text-3xl font-medium tracking-tight mb-6">Ready to Discuss Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground text-lg">
            Contact us today for a free consultation and let's explore how we can help you achieve your goals.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </section>
    </main>
  )
}

