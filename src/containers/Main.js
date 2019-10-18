import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Projects />
        <StartupProject />
      </div>
    );
  }
}
