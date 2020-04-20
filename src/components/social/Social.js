import React from "react";
import "./Social.css";
import SocialMedia from "../sections/socialMedia/SocialMedia";
import {contactInfo} from "../../config/portfolio";
import { Fade } from "react-reveal";

export default function Social() {
    return (
        // <Fade bottom duration={1000} distance="20px">

        <div className="main contact-margin-top" id="social">
            <SocialMedia/>
            <div className="contact-div-main">
                {/* <div className="contact-header">
                    <h1 className="heading contact-title">{contactInfo.title}</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

                    <div className="contact-text-div">
                        <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                        <br/><br/>
                        <a className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>
                <div className="contact-image-div">
                    <img src={require('../../assets/images/Clipart-Email-9158026.png')} height="100" width="100"></img>
                    <img alt="Saad Working" src={require("../../assests/images/contactMail.png")}></img>
                </div> */}
            </div>
        </div>
      
        //  </Fade>
            
    );
}

