import React from "react"
import Ecommercescreen from "../assets/images/E-Commerce Screen.png"

export function Project2() {
  return (
    <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5">
      <div className="grid-item-image-container lg:order-2">
        <img src={Ecommercescreen} alt="E-Commerce-Screenshot" />
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
        <h1 className="font-semibold text-3xl">E-Commerce App</h1>
        <h2 className="text-2xl text-center lg:mx-20">
          I built an E-Commerce store from scratch. I used React with Typescript to build components and Redux for state management.
           I styled my app with TailwindCSS.
        </h2>
        <div className="buttons flex gap-5">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-md font-medium hover:opacity-75">
            View Livedemo
          </button>
          <a href="https://github.com/danielgen01/E-Commerce-with-React-Redux" className="bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-2 rounded-md font-medium hover:opacity-75" target={"_blank"}>
            Sourcecode
          </a>
        </div>
      </div>
    </div>
  )
}
