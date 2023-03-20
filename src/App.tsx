import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import MainBanner from "./components/MainBanner"
import ProjectsBanner from "./components/ProjectsBanner"
import TechnologiesBanner from "./components/TechnologiesBanner"

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <TechnologiesBanner     />

      <ProjectsBanner />
    </>
  )
}

export default App
