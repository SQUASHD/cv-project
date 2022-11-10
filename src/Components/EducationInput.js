import React from 'react';

function EducationInput(props) {
  const { id, item, onChange } = props;
  return (
    <div className="group">
      <input
        name="degree"
        id={id}
        type="text"
        placeholder="Degree"
        value={item.degree}
        onChange={(e) => onChange(e, id)}
      />
      <input
        name="school"
        id={id}
        type="text"
        placeholder="School"
        value={item.school}
        onChange={(e) => onChange(e, id)}
      />
      <input
        name="startDate"
        id={id}
        type="text"
        placeholder="Start Date"
        value={item.startDate}
        onChange={(e) => onChange(e, id)}
      />
      <input
        name="endDate"
        id={id}
        type="text"
        placeholder="End Date"
        value={item.endDate}
        onChange={(e) => onChange(e, id)}
      />
      <input
        name="description"
        id={id}
        type="text"
        placeholder="Description"
        value={item.description}
        onChange={(e) => onChange(e, id)}
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

export default EducationInput;
