import React, { Component } from 'react';
import './Form.css';

class CVForm extends Component {
  render() {
    const { name, title, email, phone, address, city, handleChange } =
      this.props;
    return (
      <div className="cv-form">
        <section>
          <h2>Personal Details</h2>
        </section>
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
    );
  }
}

export default CVForm;
