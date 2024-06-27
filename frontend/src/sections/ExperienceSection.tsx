import React from "react";
import "../theme/fontColors.css";
import "../theme/fonts.css";

import CSS from "csstype";


const dot: CSS.Properties = {
  height: '60px',
  width: '60px',
  backgroundColor: '#4C86A8',
  borderRadius: '50%',
  boxShadow: '2px 2px 2px rgb(0, 0, 0, 0.2)',
  display: 'inline-block',
}

interface ExperienceProps {
  position: string,
  location: string,
  description: string,
  date: string,
  imageSrc?: string,
}

function Experience({position, location, description, date, imageSrc}: ExperienceProps) {
  return (
    <div style={{display: 'flex'}}>
      <div style = {{border: '#0C1821 solid 1px', backgroundColor: 'white', borderRadius: '8px', padding: '20px', width: '55%', boxShadow: '2px 2px 2px rgb(0, 0, 0, 0.2)',}}>
        <div style = {{position: 'relative'}}>
          <h3 className='font_black'>{position}</h3>
          <h4 className='font_blue'>{location}</h4>
          <p>{description}</p>
          <img src={imageSrc} style={{position: 'absolute', top: '0px', right: '0px', width: '50px'}}></img>
        </div>
      </div>
      <div style = {{width: '50%', position: 'relative'}}>
        <div id = 'dot' style = {{...dot, left: '20%', position: 'absolute', top: '50%', transform: 'translate(0%, -50%)'}}></div>
        <div id = 'vertical_strip' style = {{zIndex: '-1', left: '20%', width: '60px', height: '100%', position: 'absolute'}}>
          <div id = 'centered_black_line' style = {{position: 'absolute', left: '50%', transform: 'translate(-50%, 0%)', width: '12px', height: '250px', backgroundColor: 'black', boxShadow: '2px 2px 2px rgb(0, 0, 0, 0.2)'}}></div>
        </div>
        <h6 style = {{position: 'absolute', left: '35%', top: '50%', transform: 'translate(0%, -50%)'}}>{date}</h6>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div>
        <h2 style={{marginBottom: '50px'}}>My Experience</h2>
        <div style = {{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <Experience position = {'Software Developer Intern'} location={'Epic'} description= {"Developed an application to help clinicians integrate out-of-network allergy data into their patients' charts."} date = {'May - August 2023'} imageSrc="./assets/epicLogo.jpg" />
            <Experience position= {'Software Engineer Intern'} location={'Meta'} description={'Developed and tested new features for Facebook Reels on Android'} date = {'May - August 2022'} imageSrc="./assets/metaLogo.jpg"/>
            <Experience position= {'Teaching/Learning Assistant'} location={'UCF College of Engineering and Computer Science'} description={'Delivered 20+ lectures/recitations on topics ranging from algorithm analysis to game development'} date = {'June - December 2021'} imageSrc="./assets/ucf_cecs.jpg"/>
            <Experience position= {'Undergraduate Researcher'} location={'Wearable Engineering and Assistive Robotics Lab'} description={'Developed a Unity based mobile app to drive the Mechatronic Musical Instrument (MMI). Composed technical documents detailing how the app would detect pitch from the instrument and give the musician feedback.'} date = {'May - November 2021'} imageSrc="./assets/wearLabLogo.jpg"/>
        </div>
    </div>
  );
}

export default ExperienceSection;
