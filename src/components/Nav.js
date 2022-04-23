import React from 'react';
import '../../src/App.css';
import searchicon from '../images/searchicon.svg';
import redditlogo from '../images/redditlogo.png';

function Nav() {
  return (
    <nav className="nav-bar">
        <div className="left-side">
        <img src={redditlogo} alt="reddit logo" className="reddit-logo" />
        <h1><em>Reddit<span>Minimal</span></em></h1>          
        </div>
        <div className="right-side">
        <img src={searchicon} alt="search icon" className="search-icon" />
        <h2 className="text">Search</h2>     
        </div>
    </nav>
  );
}

export default Nav;