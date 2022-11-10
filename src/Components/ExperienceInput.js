import React from 'react';

function ExperienceInput(props) {
  const { id, item, onChange, addItem, removeItem } = props;
  return (
    <div className="group">
      <input
        name="position"
        id={id}
        type="text"
        placeholder="Position"
        value={item.position}
        onChange={(e) => onChange(e, id)}
      />
      <input
        name="company"
        id={id}
        type="text"
        placeholder="Company"
        value={item.company}
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
        <button
          type="button"
          className="remove-btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove
        </button>
        <button type="button" className="add-btn" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ExperienceInput;
