import React from "react";
import "./Greeting.css";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Greeting() {
  return (
    <div className="main">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">Hi all I'm Saad</h1>
            <p className="greeting-text-p">I'm a Web and Mobile Application developer in Karachi with a passion for exploration and love for AI and ML.</p>
            <SocialMedia />
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assests/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
  );
}
