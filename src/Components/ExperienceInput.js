import React from 'react';

function ExperienceInput(props) {
  const { position, company, startDate, endDate, description, handleChange } =
    props;
  return (
    <div className="group">
      <input
        name="position"
        type="text"
        placeholder="Position"
        value={position}
        onChange={handleChange}
      />
      <input
        name="company"
        type="text"
        placeholder="Company"
        value={company}
        onChange={handleChange}
      />
      <input
        name="startDate"
        type="text"
        placeholder="Start Date"
        value={startDate}
        onChange={handleChange}
      />
      <input
        name="endDate"
        type="text"
        placeholder="End Date"
        value={endDate}
        onChange={handleChange}
      />
      <input
        name="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleChange}
      />
      <div className="btn-group">
        <button type="button" className="remove-btn">
          Remove
        </button>
        <button type="button" className="add-btn">
          Add
        </button>
      </div>
    </div>
  );
}

export default ExperienceInput;
