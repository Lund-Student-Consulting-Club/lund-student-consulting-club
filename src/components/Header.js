import React, {useContext} from 'react';

import { Link as Linkerino } from 'react-router-dom';
import { ScrollContext } from './ScrollContext';



const Header = () => {
  const { aboutSectionRef } = useContext(ScrollContext);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      console.log("Offset Top:", aboutSectionRef.current.offsetTop);
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop,
        behavior: 'smooth',
        
      });
    } else {
      console.error('Ref is not attached to any element');
    }  
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,  
      behavior: 'smooth'  
    });
  };
  return (
    
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Linkerino className="navbar-brand" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Home"
              className="home-image"
              style={{ width: '4em', height: '4em' }}
            />
          </Linkerino>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToAbout}>
                  About
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToBottom}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;