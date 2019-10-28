import React from "react";
import './Button.css'

export default function Button({text,className}) {
  return (
    <div className={className}>
      <a class="main-button">{text}</a>
    </div>
  );
}
