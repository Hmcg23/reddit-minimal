import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import fakeSubredditData from '../fake-data/fakeSubredditData.json';

function Subreddits() {

  return (
        <section className="subreddit-section">
                    <h1>Subreddits</h1>
                    {
                    fakeSubredditData.map((name) => {
                        return (
                            <Link to="/pagenotfound" key={name.id}>
                                <div className="subreddit">
                                    <img src={name.image} alt="subreddit logo" className="subreddit-logo" />
                                    <h2>r/{name.subreddit.toLowerCase()}</h2>
                                </div>
                            </Link>                       
                        )
                    })              
                    }


        </section>      
  );
}

export default Subreddits;

