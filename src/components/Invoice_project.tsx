import React from "react"
import invoice_screen from "../assets/images/Invoice_screen.webp"
import { BsGithub } from "react-icons/bs"
import { BsArrowUpRight } from "react-icons/bs"
import { FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiReact, SiTypescript, SiRedux } from "react-icons/si"

export function InvoiceProject() {
  return (
    <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5">
      <div className="grid-item-image-container">
        <img src={invoice_screen} alt="property_screenshot" />
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
        <h1 className="font-semibold text-3xl text-center">
          Invoice Business App
        </h1>
        <h2 className="lg:text-2xl text-lg lg:mx-20">
          I built an business App where you can manage client invoices. I styled
          my app with TailwindCSS and used React to create components.
        </h2>
        <div className="used-technologies-list flex flex-row gap-10 text-4xl lg:text-6xl">
          <SiReact className="text-[#61DBFB]" />
          <SiTypescript className=" text-[#007acc]" />
          <SiRedux className="text-purple-700" />

          <SiTailwindcss className="text-sky-500" />
        </div>
        <div className="buttons grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-fit">
          <a
            href="https://invoice-app-by-daniel-g.netlify.app/"
            target={"_blank"}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2 w-full justify-center"
          >
            View Livedemo
            <BsArrowUpRight />
          </a>
          <a
            href="https://github.com/danielgen01/invoice-app"
            className="bg-gradient-to-r from-indigo-500 to-sky-500 px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center justify-center gap-2 w-full"
            target={"_blank"}
          >
            <BsGithub className="h-[20px] w-fit text-[#171515]" />
          </a>
        </div>
      </div>
    </div>
  )
}
