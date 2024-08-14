import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const people = [
  { image: `${process.env.PUBLIC_URL}/seb.jpg`, name: 'Sebastian Offnegårdh', position: 'CEO', link: 'https://www.linkedin.com/in/sebastian-offneg%C3%A5rdh-b904031a5/', email: "who@gmail.com" },
  { image: `${process.env.PUBLIC_URL}/dan.jpg`, name: 'Daniel Wikström', position: 'Kungjävel', link: 'https://www.linkedin.com/in/daniel-wikstr%C3%B6m-a78104126/', email: "cares@gmail.com" },
];

const CardSection = () => {
  return (
    <section id="card-section" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          {people.map((person, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
              <Card
                image={person.image}
                name={person.name}
                position={person.position}
                link={person.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;