import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "../components/greeting/Greeting";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
      </div>
    );
  }
}
