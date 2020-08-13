import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <header>
        <div className="project-image-container">{project.image}</div>
        <h3>{project.title}</h3>
      </header>
      <div className="card-body">
        <p className="project-summary">{project.summary}</p>
        <div className={`project-description ${open ? "open" : "closed"}`}>
          <p>{project.description}</p>
          <p>{project.techStack}</p>
          <a href={project.link}>github</a>
        </div>
      </div>
      <footer onClick={() => {open ? setOpen(false) : setOpen(true)}}>
        {open ? "Read less" : "Read more"}
      </footer>
    </div>
  );
}
