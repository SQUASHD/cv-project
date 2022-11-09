import React from 'react';

function ExperienceItem(props) {
  const { position, company, start, end, description } = props;

  return (
    <div className="experience">
      <h4>{position}</h4>
      <h5>{company}</h5>
      <p>
        {start} - {end}
      </p>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceItem;
