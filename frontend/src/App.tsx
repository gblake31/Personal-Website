import React from "react";
import HomeSection from "./sections/HomeSection";
import Navigation from "./Navigation";

import './theme/base.css'
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export function Row() {
  return (
    <div style={{margin: '25px 0px'}}>
    </div>
  )
}

function App() {
  return (
    <div id = 'home' className='page'>
      <Navigation />
      <div
        style={{ display: "flex", flexDirection: "column", padding: "0px" }}
      >
        <HomeSection />
        <ExperienceSection/>
        <ProjectsSection/>
        <Row/>
        <ContactSection/>
      </div>
    </div>
  );
}

export default App;
