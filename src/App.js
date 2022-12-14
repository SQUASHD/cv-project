import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    console.log(e.target.name, e.target.value);
    this.setState((prevState) => ({
      personalDetails: {
        ...prevState.personalDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      experience: prevState.experience.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      }),
    }));
  };

  handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      education: prevState.education.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      }),
    }));
  };

  addExperienceItem = () => {
    const newExperience = {
      id: uuidv4(),
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    this.setState((prevState) => ({
      experience: [...prevState.experience, newExperience],
    }));
  };

  addEducationItem = () => {
    const newEducation = {
      id: uuidv4(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    this.setState((prevState) => ({
      education: [...prevState.education, newEducation],
    }));
  };

  removeExperienceItem = (id) => {
    this.setState((prevState) => ({
      experience: prevState.experience.filter((item) => item.id !== id),
    }));
  };

  removeEducationItem = (id) => {
    this.setState((prevState) => ({
      education: prevState.education.filter((item) => item.id !== id),
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
              addExperienceItem={this.addExperienceItem}
              addEducationItem={this.addEducationItem}
              handleChangeExperience={this.handleChangeExperience}
              handleChangeEducation={this.handleChangeEducation}
              removeExperienceItem={this.removeExperienceItem}
              removeEducationItem={this.removeEducationItem}
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
