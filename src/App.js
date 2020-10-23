import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import More from "./components/More";
import MyForm from "./components/MyForm";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume"

import "./App.css";
import "./styles/Projects.css";
import "./styles/Form.css";

const scrollToRef = ref =>
  window.scrollTo({ right: 0, top: ref.current.offsetTop, behavior: "smooth" });

function App() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Intro executeScroll={executeScroll} />
            <About refProp={myRef} />
            <TechStack />
            <Projects />
            <More />
            <MyForm />
            <Link to="/resume">Resume</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
