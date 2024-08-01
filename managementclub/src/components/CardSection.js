import React from 'react';
import Card from './Card';
import '../style.css'; 

const people = [
  { image: '/seb.jpg', name: 'Sebasitan Offnegårdh Spliehs', position: 'CEO' },
  { image: '/dan.jpg', name: 'Daniel Wik', position: 'Kungjävel' },
];

const CardsSection = () => {
  return (
    <div className="cards-container">
      {people.map((person, index) => (
        <Card key={index} image={person.image} name={person.name} position={person.position} />
      ))}
    </div>
  );
};

export default CardsSection;