import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"

function Project() {
  let navigate = useNavigate()
  const projects = [
    {
      id: 1,
      name: "Web Development Project",
      description: "This project is for Wed development team",
    },
    {
      id: 2,
      name: "HealthCare Project",
      description: "This project is for Healthcare team",
    },
    {
      id: 3,
      name: "Finance Project",
      description: "This project is for Finance team",
    },
  ]

  function redirectToProject(projectID: number) {
    navigate(`/projects/${projectID}`)
  }
  return (
    <div className="flex gap-4 p-6">
      {projects.map((project) => {
        return (
          <Card className="relative w-xs max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">Featured</Badge>
              </CardAction>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={() => redirectToProject(project.id)}
                className="w-full"
              >
                View Project
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default Project
