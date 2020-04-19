import React from "react";
import './Header.css';

export default function Header(){
    return(
        <div>
            <header className="header">
                <a href="" className="logo">
                    <span className="grey-color"> &lt;</span>
                    <span className="logo-name">Ahmed Abdulkarim</span>
                    <span className="grey-color">/&gt;</span>
                </a>
                <ul className="menu">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#opensource">Experience</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}
