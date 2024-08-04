import React from 'react';
import '../style.css'; 
const Card = ({ image, name, position, link }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{position}</p>
      <a href={link}><img src={`${process.env.PUBLIC_URL}/linkedin.png`}  className='linkedin-logo'></img></a>
      
    </div>
  );
};

export default Card;