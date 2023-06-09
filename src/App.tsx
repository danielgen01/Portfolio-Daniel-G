import { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import MainBanner from "./components/MainBanner"
import ProjectsBanner from "./components/ProjectsBanner"
import TechnologiesBanner from "./components/TechnologiesBanner"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import { BsArrowUpCircle } from "react-icons/bs"
import { Link, animateScroll as scroll } from "react-scroll"

function App() {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)
  const [isArrowVisible, setIsArrowVisible] = useState<boolean>(false)
  const deactivateScroll = () => {
    if (!isNavBarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen)
    deactivateScroll()
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsArrowVisible(true)
      } else {
        setIsArrowVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="APP w-screen  bg-gradient-to-tr from-black/90 to-black">
      <Navbar
        isNavBarOpen={isNavBarOpen}
        setIsNavBarOpen={setIsNavBarOpen}
        toggleNavBar={toggleNavBar}
      />
      <MainBanner />
      <TechnologiesBanner />
      <ProjectsBanner />
      <AboutMe />
      <Contact />
      <Link
        to="main-banner"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="active"
        className="hover:text-sky-500 duration-200 cursor-pointer"
        style={{ display: isArrowVisible ? "flex" : "none" }}
      >
        <BsArrowUpCircle className="fixed text-sky-500 text-5xl bottom-10 right-10" />
      </Link>
    </div>
  )
}

export default App
