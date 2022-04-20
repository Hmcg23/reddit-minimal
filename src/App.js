import React from 'react';
import redditlogo from './images/redditlogo.png';
import messageicon from './images/messageicon.svg';
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
          <img src={messageicon} alt="search icon" className="message-icon" />
          <h2 className="text">Search</h2>     
        </div>

      </nav>
    </div>
  );
}

export default App;