import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { TeamMember } from "@/components/team-member"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & Creative Director",
      bio: "With over 15 years of experience in digital design and strategy, Alex leads our creative vision and ensures every project exceeds expectations.",
      image: "/men1.jpg?height=400&width=400",
    },
    {
      name: "Jamie Chen",
      role: "Technical Director",
      bio: "Jamie brings deep technical expertise to every project, specializing in creating high-performance, scalable digital solutions.",
      image: "/women3.jpg?height=400&width=400",
    },
    {
      name: "Taylor Williams",
      role: "Design Lead",
      bio: "Taylor's passion for minimalist design and user experience helps our clients communicate their brand values with clarity and impact.",
      image: "/men.jpg?height=400&width=400",
    },
  ]

  const values = [
    {
      title: "Excellence",
      description: "We pursue excellence in every detail, from concept to execution.",
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve complex challenges.",
    },
    {
      title: "Collaboration",
      description: "We believe the best results come from true partnership with our clients.",
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency.",
    },
  ]

  return (
    <main>
      <PageHeader
        title="About Us"
        description="We're a team of strategists, designers, and developers passionate about creating exceptional digital experiences."
      />

      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/story.jpg?height=1000&width=800" alt="Our studio" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-tight mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, we began with a simple mission: to help businesses achieve their full potential in the
                digital landscape. What started as a small team of passionate creatives has grown into a full-service
                digital agency with clients around the world.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that exceptional digital experiences are built on a foundation of strategic thinking,
                creative design, and technical excellence. This philosophy guides everything we do, from our initial
                client consultations to the launch of each project.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're proud to partner with forward-thinking brands across industries, helping them connect with
                their audiences and achieve meaningful business results through thoughtful digital solutions.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="w-full bg-muted/50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-medium tracking-tight mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="bg-background rounded-lg p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-primary font-medium">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl font-medium tracking-tight mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="w-full bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80 text-lg">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

