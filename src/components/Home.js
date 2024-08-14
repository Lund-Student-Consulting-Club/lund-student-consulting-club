import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CardSection from './CardSection'

const Home = () => {
  return (
    <>
      <div className="position-relative">
        <div
          className="w-100"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/suits.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            position: 'relative',
          }}
        >
          <div className="position-absolute bottom-0 start-0 end-0 p-4 d-flex flex-column align-items-start text-white bg-dark bg-opacity-50">
            <h1 className="display-4 mb-4">Welcome to Lunds Student Consulting Club</h1>
            <p className="lead mb-3">
              We were created to... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa massa, gravida vel dolor eget, ultricies scelerisque sapien.
            </p>
            <p>
              Orci luctus et ultrices posuere cubilia curae; Phasellus vitae est dignissim lorem scelerisque finibus. Aliquam eget placerat neque, quis tincidunt augue.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5">Kungarnas kungar</h1>
      <CardSection />
    </>
  );
};

export default Home;