import React, { useRef } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import More from "./components/More";
import MyForm from "./components/MyForm";
import TechStack from "./components/TechStack";

import "./App.css";
import "./styles/Projects.css";
import "./styles/Form.css";

const scrollToRef = ref => window.scrollTo({ right: 0, top: ref.current.offsetTop, behavior: "smooth" });

function App() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div className="App">
      <Intro executeScroll={executeScroll} />
      <About refProp={myRef} />
      <TechStack />
      <Projects />
      <More />
      <MyForm />
    </div>
  );
}

export default App;
