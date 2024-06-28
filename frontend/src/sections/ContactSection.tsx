import React, { ReactNode } from "react";
import "../theme/fontColors.css";
import "../theme/fonts.css";
import "../theme/buttons.css"

import {Row} from '../App'

function ContactSection() {
  return (
    <div id = 'contact'>
        <div style = {{display: 'flex', justifyContent: 'center'}}>
            <div style = {{display: 'flex', gap: '20px'}}>
                <button onClick = {() => {window.location.href = 'mailto:blakegassman@gmail.com'}} style = {{width: '40px', height: '40px', backgroundImage: 'url(./assets/mail.png)', backgroundSize: '90%', backgroundPosition: '1.5px 2.5px', backgroundRepeat: 'no-repeat'}}></button>
                <button onClick = {() => {window.location.href = 'https://github.com/gblake31/'}} style = {{width: '40px', height: '40px', backgroundImage: 'url(./assets/github.png)', backgroundSize: '80%', backgroundPosition: '5px 5px', backgroundRepeat: 'no-repeat'}}></button>
                <button onClick = {() => {window.location.href = 'https://www.facebook.com/blake.gassman321/'}} style = {{width: '40px', height: '40px', backgroundImage: 'url(./assets/facebook-app-symbol.png)', backgroundSize: '80%', backgroundPosition: '5px 5px', backgroundRepeat: 'no-repeat'}}></button>
                <button onClick = {() => {window.location.href = 'https://www.linkedin.com/in/blake-gassman/'}} style = {{width: '40px', height: '40px', backgroundImage: 'url(./assets/linkedin.png)', backgroundSize: '100%'}}></button>  
            </div>
        </div>
        <Row/>
        <div style = {{display: 'flex'}}>
            <h6 style = {{fontSize: '20px', display: 'inline', margin: 'auto'}}>©  Blake Gassman 2024</h6>
        </div>
        <Row/><Row/><Row/>
    </div>
    
  );
}

export default ContactSection;
