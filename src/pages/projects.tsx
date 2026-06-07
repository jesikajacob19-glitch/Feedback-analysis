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
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Project() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])


  function getProjects(){
    fetch('http://localhost:8787/projects')
    .then((data) => data.json())
    .then(projectsResponse=> {
      console.log(projectsResponse)
      setProjects(projectsResponse)
    })
  }
  
  useEffect(() => {
    getProjects()
  }, [])


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
