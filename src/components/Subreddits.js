import React from 'react';
import '../App.css';
import redditlogo from '../images/redditlogo.png';
import { Link } from 'react-router-dom';
import fakeSubredditData from '../fake-data/fakeSubredditData.json';

function Subreddits() {
    const subredditNames = ['Home', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext', 'r/exampletext'];

  return (
        <section className="subreddit-section">
                <div className="margin-subreddit"></div>
                    <h1>Subreddits</h1>
                    {
                    fakeSubredditData.map((name) => {
                        return (
                            <Link to="/pagenotfound" key={name.id}>
                                <div className="subreddit">
                                    <img src={redditlogo} alt="subreddit logo" className="subreddit-logo" />
                                    <h2>r/{name.subreddit}</h2>
                                </div>
                            </Link>                       
                        )
                    })              
                    }


        </section>      
  );
}

export default Subreddits;

