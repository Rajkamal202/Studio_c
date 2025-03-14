import { type LucideIcon, Code, BarChart, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: string
    color: string
    textColor: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (iconName: string): LucideIcon => {
    switch (iconName) {
      case "code":
        return Code
      case "bar-chart":
        return BarChart
      case "lightbulb":
        return Lightbulb
      default:
        return Code
    }
  }

  const Icon = getIcon(service.icon)

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className={cn("w-12 h-12 rounded-md flex items-center justify-center mb-2", service.color)}>
          <Icon className={cn("h-6 w-6", service.textColor)} />
        </div>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <a href="/services" className={cn("text-sm font-medium hover:underline", service.textColor)}>
          Learn more
        </a>
      </CardContent>
    </Card>
  )
}

