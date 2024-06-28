import React from "react";
import "../theme/fontColors.css";
import "../theme/fonts.css";

import CSS from "csstype";

import experience from "../data/experience.json"


const dot: CSS.Properties = {
  height: '60px',
  width: '60px',
  borderRadius: '50%',
  border: '5px solid black',
  boxShadow: '2px 2px 2px rgb(0, 0, 0, 0.2)',
  display: 'inline-block',
}

interface ExperienceProps {
  position: string,
  location: string,
  description: string,
  date: string,
  index?: number,
  imageSrc?: string,
}

function Experience({position, location, description, date, index, imageSrc}: ExperienceProps) {
  return (
    <div style={{display: 'flex'}}>
      <div style = {{border: '#0C1821 solid 3px', backgroundColor: 'white', borderRadius: '8px', padding: '20px', width: '80%', boxShadow: '2px 2px 2px rgb(0, 0, 0, 0.2)', position: 'relative'}}>
        <div style = {{position: 'relative'}}>
          <h3 className='font_black'>{position}</h3>
          <h4 className='font_blue'>{location}</h4>
          <p>{description}</p>
          <img src={imageSrc} style={{position: 'absolute', top: '0px', right: '0px', width: '50px'}}></img>
        </div>
        <div style = {{width: 0, height: 0, position: 'absolute', bottom: '50%', right: '-15px', transform: 'translate(0px, 15px)', borderTop: '15px solid transparent', borderLeft: '15px solid black', borderBottom: '15px solid transparent'}}>
        </div>
      </div>
      <div style = {{width: '50%', position: 'relative'}}>
        <div id = 'dot' style = {{...dot, backgroundColor: (!index || index % 2 == 0) ? '#4C86A8' : '#e5ac34', left: '10%', position: 'absolute', top: '50%', transform: 'translate(0%, -50%)'}}></div>
        <div id = 'vertical_strip' style = {{zIndex: '-1', left: '10%', width: '60px', height: '140%', position: 'absolute'}}>
          <div id = 'centered_black_line' style = {{position: 'absolute', left: '50%', transform: 'translate(-50%, -25%)', width: '10px', height: '100%', backgroundColor: 'black'}}></div>
        </div>
        <h6 style = {{position: 'absolute', left: '27%', top: '50%', transform: 'translate(0%, -50%)'}}>{date}</h6>
      </div>
    </div>
  );
}

function ExperienceSection() {
  const experiences = experience.experience
  return (
    <div style = {{paddingBottom: '80px', borderBottom: "5px solid #4C86A8"}}>
        <h2 style={{marginBottom: '50px'}}>My Experience</h2>
        <div style = {{display: 'flex', flexDirection: 'column', gap: '50px'}}>
          {
            experiences.map((exp, i) =>
              <Experience index = {i} position = {exp.title} location={exp.company} description= {exp.description} date = {exp.date} imageSrc={exp.imageSrc} />
            )
          }
        </div>
    </div>
  );
}

export default ExperienceSection;
