import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CardSection from './CardSection'
import About from './About'
import { ScrollContext } from './ScrollContext';


const Home = () => {
  
  const { aboutSectionRef } = useContext(ScrollContext);
  return (
    
    <div className="bg-light">
      <div className="position-relative">
    <div
      className="d-flex justify-content-center align-items-end"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/favicon.ico)`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div className="text-center text-dark">
        <h1 className="display-4 mb-4">Welcome to Lund Student Consulting Club</h1>
        <p className="lead mb-3">
          Bridging Knowledge and Practice for Future Consultants
        </p>
          </div>
        </div>
      </div>
      <div className="about" ref={ aboutSectionRef }> 
        <About />
      </div>
        <CardSection />
    </div>
  );
};

export default Home;