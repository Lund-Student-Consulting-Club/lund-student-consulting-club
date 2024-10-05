import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const people = [
  { image: `${process.env.PUBLIC_URL}/seb.jpg`, name: 'Sebastian Offnegårdh', position: 'Pres. & Head of Management Consulting', link: 'https://www.linkedin.com/in/sebastian-offnegardh/', email: "" },
  { image: `${process.env.PUBLIC_URL}/sixten.jpg`, name: 'Sixten Ogenborn', position: 'Vice President & Head of Finance', link: 'https://www.linkedin.com/in/sixten-ogenborn-21777a200/', email: ""},
  { image: `${process.env.PUBLIC_URL}/pontus.jpg`, name: 'Pontus Sennevall', position: 'Head of Case Development', link: 'https://www.linkedin.com/in/pontus-sennevall-882892149/', email: ""},
//{ image: `${process.env.PUBLIC_URL}/blank.png`, name: 'Daniel Lai Wikström', position: 'Head of IT', link: 'https://www.linkedin.com/in/daniel-wikstr%C3%B6m-a78104126/', email: "cares@gmail.com" },
  { image: `${process.env.PUBLIC_URL}/emil.jpg`, name: 'Emil Anttila', position: 'Head of Corporate Relations', link: 'https://www.linkedin.com/in/emil-anttila-523aa916b/', email: ""},
  { image: `${process.env.PUBLIC_URL}/filip.jpg`, name: "Filip Strandberg", position: 'Head of Treasury', link:"https://www.linkedin.com/in/filip-strandberg-304675175/", email: ""}
];

const CardSection = () => {
  return (
    
    <section id="card-section" className="py-5 bg-light">
    <h1></h1>
      <div className="container">
        <div className="row justify-content-start">
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