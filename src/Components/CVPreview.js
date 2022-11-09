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
    </div>
  );
}

export default CVPreview;
