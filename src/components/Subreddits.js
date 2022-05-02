import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import redditlogo from '../images/redditlogo.png';

function Subreddits({article}) {


    console.log(article.icon_img);

  return (
    <Link to="/pagenotfound">
        <div className="subreddit">
            <img src={article.icon_img !== "" && article.icon_img !== null ? article.icon_img : redditlogo} alt="subreddit logo" className="subreddit-logo" />
            <h2>{article.display_name}</h2>
        </div>
    </Link>
  );
}

export default Subreddits;

