import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "../components/greeting/Greeting";
import Skills from "../components/skills/Skills";
import Projects from "./projects/Projects";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Projects />
      </div>
    );
  }
}
