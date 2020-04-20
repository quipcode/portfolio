import React from "react";
import "./Greeting.css";
import SocialMedia from "../sections/socialMedia/SocialMedia";
import Button from "../sections/button/Button";
import { greeting } from "../../config/portfolio";
import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div className="greeting-container">
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              {/* <span className="wave-emoji">{emoji("👋")}</span> */}
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            
            <a className="resume-link" href="https://www.google.com/" target="_blank">
            <span className="resume-link-text" >Resume</span>
            </a>
            {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              
            </div> */}
          </div>
        </div>
        <div className="greeting-image-div">
          {/* <img alt="saad sitting on table" src={require("../../assests/images/manOnTable.svg")}></img> */}
        </div>
      </div>
    </div>
    </Fade>
  );
}
