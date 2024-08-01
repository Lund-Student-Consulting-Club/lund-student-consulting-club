import React from 'react';
import Card from './Card';
import '../style.css'; 

const people = [
  { image: '/seb.jpg', name: 'Sebasitan Offnegårdh', position: 'CEO', link: 'https://www.linkedin.com/in/sebastian-offneg%C3%A5rdh-b904031a5/' },
  { image: '/dan.jpg', name: 'Daniel Wikström', position: 'Kungjävel', link: 'https://www.linkedin.com/in/daniel-wikstr%C3%B6m-a78104126/' },

];

const CardsSection = () => {
  return (
    <div className="cards-container">
      {people.map((person, index) => (
        <Card key={index} image={person.image} name={person.name} position={person.position} link={person.link} />
      ))}
    </div>
  );
};

export default CardsSection;