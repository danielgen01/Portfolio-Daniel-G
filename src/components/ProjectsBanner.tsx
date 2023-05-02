import { PropertyProject } from "./property_project"
import { EcommerceProject } from "./ECommerce_project"
import { Game_Project } from "./game_project"
import React from "react"
import { StarbucksProject } from "./starbucks_project"
import { PokeProject } from "./poke_project"
import { AgencyProject } from "./agency_project"
import { KanbanProject } from "./kanban_project"

const ProjectsBanner: React.FC = () => {
  return (
    <>
      <section
        className="projects-container flex flex-col justify-center h-auto w-screen gap-10"
        id="projects-container"
      >
        <div className="projects-headline">
          <h1 className="font-bold text-3xl lg:text-5xl text-center mt-5 text-white">
            Projects
          </h1>
        </div>
        <KanbanProject />
        <PropertyProject />

        <EcommerceProject />
        <Game_Project />
        <StarbucksProject />
        {/* <PokeProject /> */}
        <AgencyProject />
      </section>

      <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-[99%] z-40"></div>
    </>
  )
}

export default ProjectsBanner
