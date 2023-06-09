import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { HiMenuAlt3 } from "react-icons/hi"
import { AiOutlineArrowRight } from "react-icons/ai"
import { BiCodeAlt } from "react-icons/bi"

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
      <nav className="navbar w-full top-0 h-14 lg:h-20 flex justify-between items-center bg-[#1d2021] fixed z-40">
        <div className="deco-icon ml-5">
          <BiCodeAlt className=" text-5xl text-sky-500 " />
        </div>
        <div className="h-full mr-10 flex items-center menu-icon-ctn">
          {!isNavBarOpen && (
            <>
              <HiMenuAlt3
                className="text-white text-4xl lg:text-5xl cursor-pointer"
                onClick={toggleNavBar}
              />
            </>
          )}
        </div>{" "}
      </nav>

      <div
        className="nav-links-background fixed h-screen top-0 z-40 w-screen bg-black/50 "
        style={{ display: isNavBarOpen ? "flex" : "none" }}
      >
        <div
          className="nav-links-ctn fixed top-0 right-0 bg-gray-800 h-screen w-2/3 lg:w-1/5 rounded-md  animate-menu-slide
"
        >
          <nav className="flex flex-col gap-10 items-center text-white mt-28 text-4xl z-50">
            <AiOutlineArrowRight
              className="text-white text-5xl cursor-pointer z-50 "
              onClick={toggleNavBar}
            />
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
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className="hover:text-sky-500 duration-200 cursor-pointer"
              onClick={toggleNavBar}
            >
              About me
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
