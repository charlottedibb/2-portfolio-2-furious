import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="about-text">
        <p>
          I’m a McGill University psychology grad with a past life in Human
          Resources.
        </p>
        <p>
          Seeking new and more interesting challenges, I took the leap into
          programming and web development.
        </p>
        <p>
          I love making beautiful, robust UIs for broad audiences, solving
          tricky problems, and seeing my applications come to life.
        </p>
      </div>
      <div className="sitting">
        <p>When I'm not coding, you can find me at home. </p>
        <img src={require("./sitting.png")} className="about-image" alt="cartoon sitting person"/>
      </div>
    </div>
  );
}
