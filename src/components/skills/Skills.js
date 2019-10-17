import React from "react";
import "./Skills.css";
import SoftwareSkill from "../softwareSkills/SoftwareSkill";

export default function Skills() {
  return (
    <div className="main">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img alt="saad sitting on table" src={require("../../assests/images/programmer.svg")}></img>
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">What i do </h1>
          <p className="subTitle">CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK </p>
          <SoftwareSkill />
        </div>
      </div>
    </div>
  );
}
