import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";

export default function Contact() {
  return (
    <div className="contact">
      <h3>Check me out on</h3>
      <ul>
        <li>
          <a href="https://github.com/charlottedibb">
            <Github className="contact-icon" />
            <p>Github</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dibb/">
            <Linkedin className="contact-icon" />
            <p>Linkedin</p>
          </a>
        </li>
      </ul>
      <Link to="/resume" id="resume-link"><p>Or view my </p><p>&nbsp;resume</p></Link>
    </div>
  );
}
