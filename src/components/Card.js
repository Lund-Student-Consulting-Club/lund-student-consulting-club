import React from 'react';
import '../style.css'; // Import the CSS file for styling if needed

const Card = ({ image, name, position, link }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{position}</p>
      <a href={link}><img src='/linkedin.png' className='linkedin-logo'></img></a>
      
    </div>
  );
};

export default Card;