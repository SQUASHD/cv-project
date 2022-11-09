import React from 'react';
import ExperienceItem from './ExperienceItem';

function Experience(props) {
  const { experiences } = props;

  return (
    <div className="experience-list">
      <h2>Experience</h2>
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.id}
          position={experience.position}
          company={experience.company}
          start={experience.startDate}
          end={experience.endDate}
          description={experience.description}
        />
      ))}
    </div>
  );
}

export default Experience;
