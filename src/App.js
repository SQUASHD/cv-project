import React, { Component } from "react";
// import Info from "./Components/Info";
// import Experience from "./Components/Experience";
// import Education from "./Components/Education";

class App extends Component {
  constructor(props = {}) {
    super(props);
    this.state = {
      info: {
        firstName: '',
        lastName: '',
        Title: '',
        Email: '',
        Phone: '',
        Address: '',
      },
      experience: [],
      education: [],
    };
  }

  render() {
    return <div></div>;
  }
}

export default App;
