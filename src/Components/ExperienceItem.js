import React, { Component } from "react";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    const { company, position, startDate, endDate, description } = this.state;
    return (
      <>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={company}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={position}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={startDate}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          value={endDate}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <button text="Delete" onClick={this.props.onDelete}></button>
      </>
    );
  }
}

export default ExperienceItem;
