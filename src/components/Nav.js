import React from 'react';
import '../../src/App.css';
import searchicon from '../images/searchicon.svg';
import redditlogo from '../images/redditlogo.png';
import { useNavigate } from 'react-router-dom';


function Nav({searchQuery, setSearchQuery}) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
    navigate(`?search=${searchQuery}`)
    setSearchQuery('');
    e.preventDefault();

  }

  return (
    <nav className="nav-bar">
        <div className="left-side">
          <img src={redditlogo} alt="reddit logo" className="reddit-logo" />
          <h1><em>Reddit<span>Minimal</span></em></h1>
        </div>
        <div className="right-side">
          <img src={searchicon} alt="search icon" className="search-icon" />
          <form action="/" method="get" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" name="search" value={searchQuery} onInput={(e) => {setSearchQuery(e.target.value) }} />
          </form>
        </div>
    </nav>
  );
}

export default Nav;