import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar w-auto h-20  flex justify-end items-center bg-[#1d2021]">
       

        <div className="nav h-full mr-20">
          <nav className="flex gap-5  text-white text-lg font-medium h-full w-full items-center">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className="hover:text-sky-500 duration-200 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="projects-container"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className="hover:text-sky-500 duration-200 cursor-pointer"
            >
              Projects
            </Link>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-3 rounded-md"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
