import React from 'react';
import './Home.css'; // Import the CSS file for stylin
import CardSection from './CardSection'; //

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="overlay-text">
          <h1>Welcome to Our Organization</h1>
          <p>This is a brief introduction to our organization.</p>
        </div>
      </div>
      <CardSection />
    </>
  );
};

export default Home;
