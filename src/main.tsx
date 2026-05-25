import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import {createBrowserRouter,RouterProvider} from "react-router-dom"


import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import Project from "./pages/projects.tsx"
import ProjectItem from "./pages/projectitems.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,    
  },
  {
    path:"/projects",
    Component: Project,
  },
  {
    path:"/projects/:projectId",
    Component: ProjectItem,
  },
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
       <RouterProvider router={router} />,
    </ThemeProvider>
  </StrictMode>
)
