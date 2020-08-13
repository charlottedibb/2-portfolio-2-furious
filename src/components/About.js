import React from "react";
import "../styles/About.css";

export default function About(props) {
  return (
    <div className="about-container" ref={props.refProp}>
      <h2>A bit about me...</h2>
      <div className="about-group">
        <img src={require("../media/animat-responsive.gif")} alt="changing device size"/>
        <h3>Design/Development</h3>
        <p>
          I love making beautiful, robust UIs for broad audiences, solving
          tricky problems, and seeing my applications come to life.
        </p>
      </div>
      <div className="about-group">
        <img src={require("../media/animat-lightbulb.gif")} alt="lightbulb"/>
        <h3>Psychology</h3>
        <p>
          I'm a research assistant at the Bee Lab at Kwantlen Polytechnic
          University, researching the connection between social media on mental
          health.
        </p>
      </div>
      <div className="about-group">
        <img src={require("../media/animat-checkmark.gif")} alt="checkmark"/>
        <h3>HR Background</h3>
        <p>Jaw-droppingly professional. Bureaucracy fears me. </p>
      </div>
    </div>
  );
}
