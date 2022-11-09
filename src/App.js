import React, { Component } from 'react';
import CVPreview from './Components/CVPreview';
import CVForm from './Components/CVForm';
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
    return (
      <div className="App">
        <div className="cv-containers">
          <div className="cv-builder-container">
            <CVForm
              name={name}
              title={title}
              email={email}
              phone={phone}
              address={address}
              city={city}
              handleChange={this.handleChange}
            />
          </div>
          <div className="cv-preview-container">
            <CVPreview
              name={name}
              title={title}
              email={email}
              phone={phone}
              address={address}
              city={city}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
