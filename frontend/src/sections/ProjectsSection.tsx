import React, { ReactNode } from "react";
import "../theme/fontColors.css";
import "../theme/fonts.css";

import projects from '../data/projects.json'

interface ProjectProps {
    title: string
    subtitle: string
    description: string
    imageSrc: string
    visit: string
    github: string
}

function Project({title, subtitle, description, imageSrc, visit, github}: ProjectProps) {
    return (
        <button className = 'projectButton' style = {{position: 'relative', border: '3px solid black', width: '30%', height: '360px', display: 'flex', flexDirection: 'column', borderRadius: '10px', boxShadow: '2px 2px 2px rgb(0, 0, 0, 0.2)'}}>
            <div style = {{width: '100%', height: '60%', backgroundImage: 'url(' + imageSrc + ')', backgroundSize: '100%', backgroundPositionY: '-2px'}}>
            </div>
            <div style = {{borderTop: '1px solid black', padding: '10px'}}>
                <h4><i><strong>{title}</strong></i></h4>
                <p>{subtitle}</p>
            </div>
        </button>
    )
}

function ProjectsSection() {
    const projectsList = projects.projects
  return (
    <div id = 'projects' style = {{padding: '40px 0px 80px 0px', borderBottom: '5px solid #e5ac34'}}>
        <h2 style = {{marginBottom: '50px'}}>My Projects</h2>
        <div style = {{display: 'flex', flexWrap: 'wrap', gap: '5%'}}>
            {
                projectsList.map((prj) => <Project title = {prj.name} subtitle={prj.subtitle} description={prj.description} imageSrc={prj.imgSrc} visit = {prj.visit} github={prj.github}/>)
            }
        </div>
    </div>
    
  );
}

export default ProjectsSection;
