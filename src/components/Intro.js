import React from "react";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-text">
        <div>
          <h2>Hey. I'm Charlotte. </h2>
          <p>I'm a full stack web developer.</p>
        </div>
      </div>
      <img src={require("./walking.png")} className="intro-image" />
    </div>
  );
}
