import { Project1 } from './project-1';
import { Project2 } from './project-2';
import React from "react"

const ProjectsBanner: React.FC = () => {
  return (
    <div
      className="projects-container flex flex-col justify-center h-auto w-screen"
      id="projects-container"
    >
      <div className="projects-headline">
        <h1 className="font-bold text-5xl text-center mt-5 text-white">
          Projects
        </h1>
      </div>

     <Project1   />
     <Project2 />
    </div>
  )
}

export default ProjectsBanner
