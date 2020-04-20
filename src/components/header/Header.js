import React from "react";
import './Header.css';
import {Fade} from "react-reveal";

export default function Header(){
    return(
        <Fade top duration={1000} distance="20px"  >
            <div className="sticky-inner">
            {/* <div className="sticky-inner"> */}
                <header className="header">
                    <a href="" className="logo">
                        <span className="grey-color"> &lt;</span>
                        <span className="logo-name" >Ahmed Abdulkarim</span>
                        <span className="grey-color">/&gt;</span>
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                    </label>
                    <ul className="menu">
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </header>
            </div>
         </Fade>
    )
}
