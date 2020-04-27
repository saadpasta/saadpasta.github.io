import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab ,transparent }) {
  return (
    <div className={className}>
      <a class={transparent ? "main-button-transparent":"main-button"} href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
