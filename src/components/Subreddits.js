import React from 'react';
import '../App.css';
import redditlogo from '../images/redditlogo.png';

function Subreddits() {
  return (
        <section className="subreddit-section">
                <div className="margin-subreddit"></div>
                    <h1>Subreddits</h1>
                    {/* Subreddit */}
                    <div className="subreddit">
                        <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
                        <h2>Home</h2>
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
  );
}

export default Subreddits;

