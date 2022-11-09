import React, { Component } from 'react';
import Preview from './Components/Preview';
import Form from './Components/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: {
        name: '',
        title: '',
        email: '',
        phone: '',
        address: '',
        city: '',
      },
      // experience: [],
      // education: [],
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      personalDetails: {
        ...prevState.personalDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    const { name, title, email, phone, address, city } =
      this.state.personalDetails;
    const { experience, education } = this.state;
    return (
      <div className="App">
        <div className="cv-containers">
          <div className="cv-builder-container">
            <Form
              name={name}
              title={title}
              email={email}
              phone={phone}
              address={address}
              city={city}
              experience={experience}
              education={education}
              handleChange={this.handleChange}
            />
          </div>
          <div className="cv-preview-container">
            <Preview
              name={name}
              title={title}
              email={email}
              phone={phone}
              address={address}
              city={city}
              experience={experience}
              education={education}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
