import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Greeting() {
  return (
    <div className="main">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">Hi all I'm Saad</h1>
            <p className="greeting-text-p subTitle">
              A passionate Full Stack Software Developer 🚀  having an experience of building web applications with React / Node / React Native and much more.
            </p>
            <p className="greeting-text-p subTitle">First Pakistani Google Code-in Finalist.</p>
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
