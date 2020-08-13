import React, { useState } from "react";
import FadeIn from "react-fade-in";
import "../styles/TechStack.css";
import {
  Amazonaws,
  Css3,
  Git,
  Html5,
  Javascript,
  Jquery,
  Mysql,
  NodeDotJs,
  Postgresql,
  ReactJs,
  Ruby,
  Rubyonrails
} from "@icons-pack/react-simple-icons";

const Stack = () => {
  return (
    <FadeIn className="tech-group-container" delay={125}>
      <FadeIn delay={125}>
        <Javascript className="tech-icon" />
        <Ruby className="tech-icon" />
      </FadeIn>
      <FadeIn delay={125}>
        <Html5 className="tech-icon" />
        <Css3 className="tech-icon" />
      </FadeIn>
      <FadeIn delay={125}>
        <NodeDotJs className="tech-icon" />
        <ReactJs className="tech-icon" />
      </FadeIn>
      <FadeIn delay={125}>
        <Rubyonrails className="tech-icon" />
        <Jquery className="tech-icon" />
      </FadeIn>
      <FadeIn delay={125}>
        <Postgresql className="tech-icon" />
        <Mysql className="tech-icon" />
      </FadeIn>
      <FadeIn delay={125}>
        <Amazonaws className="tech-icon" />
        <Git className="tech-icon" />
      </FadeIn>
    </FadeIn>
  );
};

export default function TechStack() {
  const [showTech, setShowTech] = useState(false);

  const checkScrollTop = () => {
    if (!showTech && window.pageYOffset > 600) {
      setShowTech(true);
    } else if (showTech && window.pageYOffset <= 600) {
      setShowTech(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="tech-stack">
      <h2>I know all sorts of things</h2>
      {showTech ? <Stack /> : ""}
    </div>
  );
}
