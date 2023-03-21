import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { HiMenuAlt3 } from "react-icons/hi"
import { AiOutlineArrowRight } from "react-icons/ai"

type props = {
  isNavBarOpen: boolean
  setIsNavBarOpen: any
  toggleNavBar: any
}

const Navbar: React.FC<props> = ({
  isNavBarOpen,
  setIsNavBarOpen,
  toggleNavBar,
}) => {
  return (
    <>
      <div className="navbar w-auto h-20  flex justify-end items-center bg-[#1d2021]">
        <div className="h-full mr-10 flex items-center">
          {!isNavBarOpen && (
            <>
              <HiMenuAlt3
                className="text-white text-5xl cursor-pointer"
                onClick={toggleNavBar}
              />
            </>
          )}
          {isNavBarOpen && (
            <>
              <AiOutlineArrowRight
                className="text-white text-5xl cursor-pointer z-50"
                onClick={toggleNavBar}
              />
            </>
          )}
        </div>{" "}
      </div>

      <div
        className="nav-links-background absolute h-screen top-0 z-40 w-screen bg-black/50 "
        style={{ display: isNavBarOpen ? "flex" : "none" }}
      >
        <div className="nav-links-ctn absolute top-0 right-0 bg-gray-800 h-screen w-2/3 lg:w-1/5 rounded-md  animate-menu-slide
">
          <nav className="flex flex-col gap-10 items-center text-white mt-28 text-4xl">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className="hover:text-sky-500 duration-200 cursor-pointer"
              onClick={toggleNavBar}
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
              onClick={toggleNavBar}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className="hover:text-sky-500 duration-200 cursor-pointer"
              onClick={toggleNavBar}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
