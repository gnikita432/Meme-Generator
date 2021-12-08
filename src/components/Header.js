import React from "react";
import icon from "./icon.png";

export default function Header() {
  return (
    <header className="header">
      <img src={icon} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
