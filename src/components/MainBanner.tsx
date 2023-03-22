import TechnologiesBanner from "./TechnologiesBanner"
import React from "react"
import Bewerbungsbild from "../assets/images/BewerbungsbildCartoon.png"
import CV from  "../assets/images/Lebenslauf Daniel Adrian Gendik.pdf"


const MainBanner: React.FC = () => {
  return (
    <div className="main-banner text-white selection:bg-sky-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between mt-12 lg:items-center lg:mt-0">
        <div className="description flex flex-col gap-5  text-center lg:text-left lg:items-start items-center">
          <h1 className="font-bold text-2xl lg:text-6xl">Hi, I'm Daniel</h1>
          <h2 className="font-normal text-xl lg:text-6xl">
            My name is Daniel Gendik and I'm a 22 year old (Web) Frontend
            developer  from Germany. Scroll down to check out my projects and social media.
          </h2>
        </div>

        <div className="picture-ctn w-full flex flex-col items-center justify-center ">
          <div className="image-ctn flex justify-center">
            <img
              src={Bewerbungsbild}
              alt="picture_of_me"
              className="rounded-md"
            />
          </div>
          <div className="download-ctn flex justify-center">
            <a
              href={CV}
              className="underline-offset-1 text-sky-500 underline font-bold  text-lg"
              target="_blank"
            >
              Checkout my CV
            </a>
          </div>
        </div>
      </div>

      <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-[99%]"></div>

    </div>
  )
}

export default MainBanner
