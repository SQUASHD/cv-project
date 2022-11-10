import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';
import EducationInput from './EducationInput';
import '../styles/Form.css';

class Form extends Component {
  render() {
    const {
      name,
      title,
      email,
      phone,
      address,
      city,
      handleChange,
      addExperienceItem,
      addEducationItem,
      handleChangeExperience,
      handleChangeEducation,
    } = this.props;
    const { experience, education } = this.props;
    return (
      <div className="cv-form">
        <form>
          <section>
            <h2>Personal Details</h2>
            <div className="group">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleChange}
              />
              <input
                name="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleChange}
              />
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={handleChange}
              />
              <input
                name="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={handleChange}
              />
              <input
                name="city"
                type="text"
                placeholder="City"
                value={city}
                onChange={handleChange}
              />
            </div>
          </section>
          <section>
            <h2>Experience</h2>
            {experience.length === 0 ? (
              <button
                type="button"
                className="add-btn"
                onClick={addExperienceItem}
              >
                Add
              </button>
            ) : (
              experience.map((item) => {
                return (
                  <ExperienceInput
                    id={item.id}
                    key={item.id}
                    item={item}
                    onChange={handleChangeExperience}
                  />
                );
              })
            )}
          </section>
          <section>
            <h2>Education</h2>
            {education.length === 0 ? (
              <button
                type="button"
                className="add-btn"
                onClick={addEducationItem}
              >
                Add
              </button>
            ) : (
              education.map((item) => {
                return (
                  <EducationInput
                    id={item.id}
                    key={item.id}
                    item={item}
                    onChange={handleChangeEducation}
                  />
                );
              })
            )}
          </section>
        </form>
      </div>
    );
  }
}

export default Form;
