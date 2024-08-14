import React from 'react';



const Card = ({ image, name, position, link, email }) => {
  return (
    <div className="card mb-4">
      <img src={image} alt={`${name}`} className="card-img-top img-responsive" />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{position}</p>
        <div className="d-flex justify-content-center">
          <a 
            href={link}  
          >
            <img
              src={`${process.env.PUBLIC_URL}/linkedin.png`}
              className="icon"/>
              
           </a>
          <a
            href={`mailto:${email}`} 
          >
            <img 
            src={`${process.env.PUBLIC_URL}/email.png`}
            className='icon'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;