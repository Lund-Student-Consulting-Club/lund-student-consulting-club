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
         className='w-100 bg-cover '
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/favicon.ico)`,
            backgroundSize: 'contain',  
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', 
            height: '100vh',
            position: 'relative',
            
          }}
        >
          <div className="position-absolute bottom-0 start-0 end-0 p-4 d-flex flex-column align-items-start text-white bg-dark bg-opacity-50">
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
      <h1 className=" display-4 text-center mb-4">Our Members</h1>
        <CardSection />
    </div>
  );
};

export default Home;