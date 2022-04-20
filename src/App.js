import React from 'react';
import redditlogo from './images/redditlogo.png';
import searchicon from './images/searchicon.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <body>
        <br />
        <h1>Hello all!</h1>
      </body>
    </div>
  );
}

export default App;
