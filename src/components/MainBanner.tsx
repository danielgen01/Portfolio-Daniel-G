import React from "react"
import htmllogo from "../assets/images/html-logo.png"
import csslogo from "../assets/images/css-logo.png"
import jslogo from "../assets/images/js-logo.png"
import reactlogo from "../assets/images/react-logo.png"
import tailwindlogo from "../assets/images/tailwind-logo.png"
import reduxlogo from "../assets/images/redux-logo.png"

const MainBanner: React.FC = () => {
  return (
    <div className="main-banner text-white">
      <div className="description flex flex-col gap-5 mt-52 mx-5 text-left items-start">
        <h1 className="font-bold text-7xl">Hi, I'm Daniel</h1>
        <h2 className="font-normal text-4xl">
          My name is Daniel Gendik and I'm a 22 year old (Web) Frontend
          developer
          <br />
          from Germany. Scroll down to check out my projects and social media.
        </h2>
        </div>

        <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-full"></div>

        <div className="description flex flex-col gap-5 mt-52 mx-5 text-left items-end justify-start">
          <h1 className="font-bold text-7xl">Dev Stack + technologies</h1>
          {/* logos technologies */}
          <div className="technologies-logos flex row flex-wrap">
            <img src={htmllogo} alt="" className="h-[150px]" />
            <img src={csslogo} alt="" className="h-[150px]" />
            <img src={jslogo} alt="" className="h-[150px]" />
          </div>
        </div>
      </div>
    
  )
}

export default MainBanner
