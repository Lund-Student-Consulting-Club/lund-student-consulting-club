import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
        
        <div className="col-md-4 mb-3">
            <h5>Our Address</h5>
            <p>
              Lunds Student Consulting Club<br />
              1234 Elm Street<br />
              Lund, Sweden<br />
              Postal Code: 12345
            </p>
          </div>
         
          <div className="col-md-4 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            </ul>
          </div>
          
          
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>
              Email: <a href="mailto:info@example.com" className="text-white">info@example.com</a><br />
              Phone: <a href="tel:+123456789" className="text-white">+123 456 789</a>
            </p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Lunds Student Consulting Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;