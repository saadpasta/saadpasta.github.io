import React from "react";
import "./Greeting.css";

export default function Greeting() {
  return (
    <div className="main">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <h1 className="greeting-text">Hi all I'm Saad</h1>
          <p className="greeting-text-p">I'm a web developer in Karachi with a passion for exploration and continual learning.</p>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assests/images/manOnTable.svg")}></img>
        </div>
      </div>
    </div>
  );
}
