import React from "react";
import "./Greeting.css";
import SocialMedia from "../sections/socialMedia/SocialMedia";
import Button from "../sections/button/Button";
import { greeting } from "../../config/portfolio";
import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    // <Fade bottom duration={1000} distance="40px" >
    <div className="greet-main" id="greeting" >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div className="greeting-container">
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              {/* <span className="wave-emoji">{emoji("👋")}</span> */}
            </h1>
            <p className="greeting-text-p subTitle">
              I am Ahmed Abdulkarim and welcome to my portfolio, <br/> 
              <b>Mission statement:</b> Sowing the seeds of my potential in fallowed opportunities <br/> 
              <b>Vision statement:</b> Earnestly tilling each opportunity with the fertilizer accrued from past experiences and the water precipitating from my efforts <br/>
              <a className="resume-link" href="https://www.google.com/" target="_blank">
            <span className="resume-link-text" >Resume</span>
            </a>
               {/* I am Ahmed Abdulkarim and you've reached my portfolio, <br/> don't be a stranger have a look around and if you want to connect send me a message...after all we do live in a civilized age */}
               </p>
            <SocialMedia />
            
            
         
          </div>
        </div>
        <div className="greeting-image-div">
  
          <img alt="ahmed crossed"  src={require("../../assets/images/profilePhoto.jpg")} ></img>
        </div>
      </div>
    </div>
    // </Fade>
  );
}





