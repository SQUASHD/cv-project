import React from 'react';

function EducationItem(props) {
  const { school, degree, start, end, description } = props;

  return (
    <div className="education">
      <h4>{degree}</h4>
      <h5>{school}</h5>
      <p>
        {start} - {end}
      </p>
      <p>{description}</p>
    </div>
  );
}

export default EducationItem;
