import React from 'react';

function CVPreview(props) {
  return (
    <div className="cv-preview">
      <div className="personal-info">
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
        <p>{props.city}</p>
      </div>
      <div className="experience">
        <h2>Work Experience</h2>
        <div className="experience-item">
          <h3>{props.company}</h3>
          <h4>{props.jobTitle}</h4>
          <p>{props.startDate}</p>
          <p>{props.endDate}</p>
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>{props.school}</h3>
          <h4>{props.degree}</h4>
          <p>{props.startDate}</p>
          <p>{props.endDate}</p>
        </div>
      </div>
    </div>
  );
}

export default CVPreview;
