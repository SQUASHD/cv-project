import React from 'react';

function PersonalView(props) {
  return (
    <div className="personal-info">
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
    </div>
  );
}

export default PersonalView;
