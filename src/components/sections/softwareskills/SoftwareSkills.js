import React from "react";
import './SoftwareSkills.css'
import { skillsSection } from "../../../config/portfolio";

export default function SoftwareSkills() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline"  name={skills.skillName}>
                <i  onmouseover="bigImg(this)" className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}