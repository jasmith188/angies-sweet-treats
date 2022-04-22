import React from 'react';
import { useState } from 'react';

import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../images/angies-sweet-treats-logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={closeMobileMenu}>
          <img className="angies-logo" src={logo} alt="angies-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-links" onClick={closeMobileMenu}>
              pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-me"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              about me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              contact us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
