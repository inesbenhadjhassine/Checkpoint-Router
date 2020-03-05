import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Logo from './Logo.png';




function Nav() {
  return (
     <nav>
  <img src={Logo} alt="mon logo"  style={{height:'30px'}} />
    <ul className="nav-links">
    <Link to="/" style={linkstyle}>
        <li>Home</li>
      </Link>
    <Link to="/About" style={linkstyle}>
        <li>About</li>
      </Link>
      <Link to="/Shop" style={linkstyle}>
        <li>Shop</li>
      </Link>

    </ul>

    </nav>

  
  );
}

const linkstyle = {
color : 'white'
};

export default Nav;