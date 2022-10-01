import React from "react";
import trollFace from "../images/troll-face.png";

export default function Navbar() {
  return (
    <header className="header">
      <img className="header--image" src={trollFace} />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
