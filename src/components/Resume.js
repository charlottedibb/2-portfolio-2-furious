import React from "react";
import { Link } from "react-router-dom";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingTop: "129.4118%",
          paddingBottom: "48px",
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform"
        }}
      >
        <iframe
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            border: "none",
            padding: "0",
            margin: "0"
          }}
          title="Charlotte Dibb's Resume"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAELGnRHQtw&#x2F;view?embed"
        ></iframe>
      </div>
      <div className="resume-footer">
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}
