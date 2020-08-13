import React from "react";
import FadeIn from "react-fade-in";
import { ReactComponent as Arrow } from "../media/arrow-down.svg";

import "../styles/Intro.css";

export default function Intro(props) {


  return (
    <div className="intro">
      <img
        src={require("../media/walking.png")}
        className="intro-image"
        alt="cartoon running person"
      />
      <div className="intro-text">
        <FadeIn delay={500}>
          <h2>Hey.</h2>
          <h2 className="text-wrap">I'm Charlotte.</h2>
          <div onClick={props.executeScroll}>
            <p>I'm a full stack web developer.</p>
            <Arrow style={{ height: "48px", width: "48px" }} className="arrow"/>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
