import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import MainBanner from "./components/MainBanner"
import ProjectsBanner from "./components/ProjectsBanner"

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <ProjectsBanner />
    </>
  )
}

export default App
