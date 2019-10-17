import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href="#" className="icon-button github">
        <i className="fa fa-github"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button linkedin">
        <i className="fa fa-linkedin"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button google">
        <i className="fa fa-google"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button gitlab">
        <i className="fa fa-gitlab"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button facebook">
        <i className="fa fa-facebook"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button twitter">
        <i className="fa fa-twitter"></i>
        <span></span>
      </a>
    </div>
  );
}
