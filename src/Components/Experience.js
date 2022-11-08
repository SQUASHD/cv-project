import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [],
    };
  }
  render() {

    return (
      <div>
        <h1>Experience</h1>
      </div>
    );
  }
}

export default Experience;
