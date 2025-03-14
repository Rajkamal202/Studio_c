import { FadeIn } from "@/components/fade-in"

interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="w-full bg-muted/30 pt-32 pb-16 md:pt-40 md:pb-20 border-b">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">{title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{description}</p>
        </FadeIn>
      </div>
    </section>
  )
}

