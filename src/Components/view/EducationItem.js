import React from 'react';

function EducationItem(props) {
  const { school, degree, start, end, description } = props;

  return (
    <div className="education">
      <h4>{degree}</h4>
      <p>
        {school} | {start} - {end}
      </p>
      <p>{description}</p>
    </div>
  );
}

export default EducationItem;
