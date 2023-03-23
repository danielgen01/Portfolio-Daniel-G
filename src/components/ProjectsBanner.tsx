import { Project1 } from "./project-1"
import { Project2 } from "./project-2"
import { Project3 } from "./project-3"
import React from "react"
import { Project4 } from "./project-4"

const ProjectsBanner: React.FC = () => {
  return (
    <>
      <div
        className="projects-container flex flex-col justify-center h-auto w-screen gap-10"
        id="projects-container"
      >
        <div className="projects-headline">
          <h1 className="font-bold text-3xl lg:text-5xl text-center mt-5 text-white">
            Projects
          </h1>
        </div>

        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </div>

      <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-[99%] z-40"></div>
    </>
  )
}

export default ProjectsBanner
