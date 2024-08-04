import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/favicon.ico`}  alt="Home" className="home-image" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;