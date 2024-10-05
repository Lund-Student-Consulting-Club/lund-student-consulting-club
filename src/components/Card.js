import React from 'react';


const Card = ({ image, name, position, link, email }) => {
  return (
    <div className="card mb-4 ">
      <div className="card-img-container">
        <img
          src={image}
          alt={name}
          className="card-img"
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text small" style={{wordBreak: 'break-word'}}>{position}</p>
        <div className="d-flex justify-content-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/linkedin.png`}
              alt="LinkedIn"
              className="icon"
            />
          </a>
          <a href={`mailto:${email}`}>
            <img
              src={`${process.env.PUBLIC_URL}/email.png`}
              alt="Email"
              className="icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;