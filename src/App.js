import React from 'react';
import redditlogo from './images/redditlogo.png';
import searchicon from './images/searchicon.svg';
import messageicon from './images/messageicon.svg'
import arrow from './images/arrow.svg';
import bgimage from './images/bgimage.jpeg'
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
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
      {/* All Posts*/}
      <body>
        <main>
        <div className="all-posts">
          <section className="post">
            {/* Upvote Section */}
            <div className="upvote-system">
              <img src={arrow} alt="upvote-arrow" className="arrow" />
              <b>256</b>
              <img src={arrow} alt="upvote-arrow" className="arrow" />
            </div>

          <div className="post-info">
            <div className="post-text">
              <h2>Top 10 greatest <a href="https://scratch.mit.edu/projects/677407763/" target="_blank" rel="noreferrer">scratch intros</a></h2>
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
          {/* Individual Post */}
          </section>
          <section className="post">
            <div className="upvote-system">
              <img src={arrow} alt="upvote-arrow" className="arrow" />
              <b>12.2k</b>
              <img src={arrow} alt="upvote-arrow" className="arrow" />
            </div>

          <div className="post-info">
            <div className="post-text">
              <h2>Cool Photo</h2>
              <img src={bgimage} alt="post" className="post-image" />
              <hr />   
            </div>

            <div className="user-info">
              <p>ilovemydog</p>
              <p>1 month ago</p>
              <div className="messages">
                <img src={messageicon} alt="message icon" className="message-icon" />
                <p>244 comments</p>   
              </div>
            </div>          
          </div>
          </section>
        </div>
        {/* Subreddit  */}
          <section className="subreddit-section">
            <h1>Subreddits</h1>
            <div className="subreddit">
              <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
              <h2>r/exampletext</h2>
            </div>
            <div className="subreddit">
              <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
              <h2>r/exampletext</h2>
            </div>
            <div className="subreddit">
              <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
              <h2>r/exampletext</h2>
            </div>
            <div className="subreddit">
              <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
              <h2>r/exampletext</h2>
            </div>
            <div className="subreddit">
              <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
              <h2>r/exampletext</h2>
            </div>
            <div className="subreddit">
              <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
              <h2>r/exampletext</h2>
            </div>
            <div className="subreddit">
              <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
              <h2>r/exampletext</h2>
            </div>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
