import React, { Component } from 'react';
import PersonalView from './components/view/Personal';
import Experience from './components/view/Experience';
import Education from './components/view/Education';
import Form from './components/Form';
import data from './defaultdata';
import './styles/App.css';

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
      experience: [],
      education: [],
    };
  }

  componentDidMount() {
    const { personal, experience, education } = data;
    this.setState((prevState) => ({
      ...prevState,
      personalDetails: personal,
      experience: experience,
      education: education,
    }));
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
    const { experience, education } = this.state;
    const { name, title, email, phone, address, city } =
      this.state.personalDetails;

    const educationList = education.map((item) => {
      return {
        id: item.id,
        school: item.school,
        degree: item.degree,
        startDate: item.startDate,
        endDate: item.endDate,
        description: item.description,
      };
    });

    const experienceList = experience.map((item) => {
      return {
        id: item.id,
        position: item.position,
        company: item.company,
        startDate: item.startDate,
        endDate: item.endDate,
        description: item.description,
      };
    });

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
            <div className="cv-preview">
              <PersonalView
                name={name}
                title={title}
                email={email}
                phone={phone}
                address={address}
                city={city}
              />
              {experienceList.length > 0 ? (
                <Experience heading="Experience" experiences={experienceList} />
              ) : null}
              {educationList.length > 0 ? (
                <Education
                  heading="Education"
                  CompletedEducation={educationList}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
