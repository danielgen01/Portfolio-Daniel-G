import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import MainBanner from "./components/MainBanner"
import ProjectsBanner from "./components/ProjectsBanner"
import TechnologiesBanner from "./components/TechnologiesBanner"

function App() {
  const [isNavBarOpen,setIsNavBarOpen] = useState<boolean>(false)
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen)
  }
  return (
    <>
      <Navbar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} toggleNavBar={toggleNavBar}/>
      <MainBanner />
      <TechnologiesBanner     />

      <ProjectsBanner />
    </>
  )
}

export default App
