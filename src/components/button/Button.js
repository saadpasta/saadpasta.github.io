import React from "react";
import './Button.css'

export default function Button({text}) {
  return (
    <div>
      <a class="main-button">{text}</a>
    </div>
  );
}
