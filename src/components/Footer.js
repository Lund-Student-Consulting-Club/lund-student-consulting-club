import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
        
        <div className="col-md-4 mb-3">
            <h5>Our Address</h5>
            <p>
              Lund Student Consulting Club<br />
              Finalgatan 17 B<br />
              Lund, Sweden<br />
              Postal Code: 222 74
            </p>
          </div>
         
          
          
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>
              Email: <a href="mailto:lundstudentconsultingclub.com" className="text-white">lundstudentconsultingclub@gmail.com </a><br />
              Phone: <a href="tel:+46723126995" className="text-white">+46 72-312 69 95</a>
            </p>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Lunds Student Consulting Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;