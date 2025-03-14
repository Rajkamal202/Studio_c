import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  member: {
    name: string
    role: string
    bio: string
    image: string
  }
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="relative h-80 w-full">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-medium mb-1">{member.name}</h3>
        <p className="text-primary text-sm mb-4">{member.role}</p>
        <p className="text-muted-foreground">{member.bio}</p>
      </CardContent>
    </Card>
  )
}

