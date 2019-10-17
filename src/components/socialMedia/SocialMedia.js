import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href="#" className="icon-button github">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button linkedin">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button google">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button gitlab">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button facebook">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button twitter">
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
    </div>
  );
}
