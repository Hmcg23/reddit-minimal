import React from 'react';
import redditlogo from './images/redditlogo.png';
import searchicon from './images/searchicon.svg';
import messageicon from './images/messageicon.svg'
import arrow from './images/arrow.svg'
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
        <section className="post">
          <div className="upvote-system">
            <img src={arrow} alt="upvote-arrow" className="arrow" />
            <b>256</b>
            <img src={arrow} alt="upvote-arrow" className="arrow" />
          </div>

        <div className="post-info">
          <div className="post-text">
            <h2>Top 10 greatest <a href="https://scratch.mit.edu/projects/677407763/" target="_blank">scratch intros</a></h2>
            <hr />            
          </div>

          <div className="user-info">
            <p>fenyx</p>
            <p>2 days ago</p>
            <div className="messages">
              <img src={messageicon} alt="message icon" className="message-icon" />
              <p>3 comments</p>   
            </div>
      
          </div>          
        </div>

        </section>
      </body>

    </div>
  );
}

export default App;
