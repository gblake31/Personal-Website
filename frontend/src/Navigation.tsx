import React from "react";
import "./theme/fontColors.css";
import "./theme/fonts.css";
import "./theme/buttons.css";

function Navigation() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0px 10px 0px",
          borderBottom: "5px solid #4C86A8"
        }}
      >
        <h3 style={{ padding: "0px", margin: "0px" }}>Blake Gassman</h3>
        <div style= {{display: 'flex', gap: '20px'}}>
          <button
            className="font_black" onClick={() => {
              const home = document.getElementById('home')
              console.log("hi!")
              home?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            Home
          </button>
          <button className="font_black" onClick={() => {
              const experience = document.getElementById('experience')
              console.log(experience)
              experience?.scrollIntoView({
                behavior: 'smooth',
              })
            }}>Experience</button>
          <button className="font_black" onClick={() => {
              const projects = document.getElementById('projects')
              projects?.scrollIntoView({
                behavior: 'smooth',
              })
            }}>Projects</button>
          <button className="font_black" onClick={() => {
              const projects = document.getElementById('contact')
              projects?.scrollIntoView({
                behavior: 'smooth',
              })
            }}>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
