import React, { useState } from 'react';
import '../../src/App.css';
import searchicon from '../images/searchicon.svg';
import redditlogo from '../images/redditlogo.png';

function Nav() {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    console.log(e.target.value);

  }

  return (
    <nav className="nav-bar">
        <div className="left-side">
          <img src={redditlogo} alt="reddit logo" className="reddit-logo" />
          <h1><em>Reddit<span>Minimal</span></em></h1>          
        </div>
        <div className="right-side">
          <img src={searchicon} alt="search icon" className="search-icon" />
            <input type="text" placeholder="Search" onChange={handleChange} value={searchText} />              
        </div>
    </nav>
  );
}

export default Nav;