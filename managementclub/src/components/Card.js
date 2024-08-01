import React from 'react';
import '../style.css'; // Import the CSS file for styling if needed

const Card = ({ image, name, position }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

export default Card;