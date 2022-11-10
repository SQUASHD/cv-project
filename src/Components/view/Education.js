import React from 'react';
import EducationItem from './EducationItem';

function Education(props) {
  const { CompletedEducation } = props;

  return (
    <div className="education-list">
      <h2>Education</h2>
      {CompletedEducation.map((education) => (
        <EducationItem
          id={education.id}
          key={education.id}
          school={education.school}
          degree={education.degree}
          start={education.startDate}
          end={education.endDate}
          description={education.description}
        />
      ))}
    </div>
  );
}

export default Education;
