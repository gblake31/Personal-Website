import React from "react";
import HomeSection from "./sections/HomeSection";
import Navigation from "./Navigation";

import './theme/base.css'
import ExperienceSection from "./sections/ExperienceSection";

function Row() {
  return (
    <div style={{margin: '25px 0px'}}>
    </div>
  )
}

function App() {
  return (
    <div className='page'>
      <Navigation />
      <div
        style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "0px" }}
      >
        <HomeSection />
        <Row/>
        <ExperienceSection/>
        <Row/><Row/><Row/><Row/>
      </div>
    </div>
  );
}

export default App;
