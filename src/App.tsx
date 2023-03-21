import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import MainBanner from "./components/MainBanner"
import ProjectsBanner from "./components/ProjectsBanner"
import TechnologiesBanner from "./components/TechnologiesBanner"
import AboutMe from "./components/AboutMe"

function App() {
  const [isNavBarOpen,setIsNavBarOpen] = useState<boolean>(false)
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
  return (
    <>
      <Navbar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} toggleNavBar={toggleNavBar}/>
      <MainBanner />
      <TechnologiesBanner     />
      <ProjectsBanner />
      <AboutMe />
    </>
  )
}

export default App
