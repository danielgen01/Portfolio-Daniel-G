import React from "react"

const ProjectsBanner: React.FC = () => {
  return (
    <div className="projects-container flex flex-col justify-center h-auto w-screen ">
      <div className="projects-headline">
        <h1 className="font-bold text-5xl text-center mt-5 text-white">
          Projects
        </h1>
      </div>
      <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mx-20">
        <div className="project-container bg-gradient-to-r from-indigo-500 to-sky-500
         rounded-3xl h-96 shadow-xl text-white flex flex-col items-center ">
          <h1 className="text-4xl font-bold uppercase text-center">Kanbanboard</h1>
        </div>

        <div className="project-container bg-gradient-to-r from-sky-500 to-indigo-500
         rounded-3xl h-96 shadow-xl  text-white flex flex-col items-center 
        ">
          <h1 className="text-4xl font-bold uppercase text-center">E-Commerce store</h1>

        </div>

      </div>
    </div>
  )
}

export default ProjectsBanner
