import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Xstitch",
    summary: "A cross-stitch pattern creating app with version history",
    description:
      "Users can create patterns, return to previous saved versions, and generate pdfs to print out their patterns.",
    image: (
      <img src={require("../media/edit.gif")} alt="pixel art ice cream cone" />
    ),
    techStack: "Built with React, Ruby on Rails, PostgreSQL, and Axios.",
    link: "https://github.com/curriecode/Xstitch"
  },
  {
    title: "fake friends",
    summary: "Recast the hit tv show friends with ai generated faces.",
    description:
      "A simple web application that allows users to choose desired age and hair color and receive an ai-generated face to replace each main cast member of friends.",
    image: (
      <img src={require("../media/fake-friends.png")} alt="two random faces" />
    ),
    techStack: "Built with Laravel, VueJs and MySQL.",
    link: "https://github.com/charlottedibb/fake-friends"
  },
  {
    title: "Hungry Heroes",
    summary: "A food pick-up ordering app that sends orders by text.",
    description:
      "Users can place orders, which notifies the restaurant via text message. The restaurant can respond with estimated wait time and notify the user when the order is ready for pickup.",
    image: (
      <img
        src={require("../media/hungry_heroes.gif")}
        alt="hungry heroes menu"
      />
    ),
    techStack:
      "Built using Ajax, Bootstrap, Node.js, Express, PostgreSQL, and Twilio.",
    link: "https://github.com/charlottedibb/hungryheroes"
  }
];

export default function Projects() {
  const projectCards = projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ));

  return (
    <div className="projects">
      <h2>Check out some of my favourite projects</h2>
      <div className="projects-card-container">{projectCards}</div>
    </div>
  );
}
