import React from 'react';
import '../App.css';
import redditlogo from '../images/redditlogo.png';
import { Link } from 'react-router-dom';

function Subreddits() {
    const subredditNames = ['Home', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext'];

  return (
        <section className="subreddit-section">
                <div className="margin-subreddit"></div>
                    <h1>Subreddits</h1>
                    {
                    subredditNames.map((name, index) => {
                        return (
                            <Link to="/pagenotfound" key={index}>
                                <div className="subreddit">
                                    <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
                                    <h2>{name}</h2>
                                </div>
                            </Link>                       
                        )
                    })              
                    }


        </section>      
  );
}

export default Subreddits;

