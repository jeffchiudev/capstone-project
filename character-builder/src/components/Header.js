import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <nav  style={{paddingLeft: '300px'}} className="navbar navbar-expand-lg bg-secondary navbar-light custom-navbar">
        <h1  className="navbar-brand nav-title">Oubliettes & Dragonnes: A Character Building Exercise</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item>">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
      
    </React.Fragment>
  );
}

export default Header;