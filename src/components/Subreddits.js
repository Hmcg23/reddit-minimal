import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import redditlogo from '../images/redditlogo.png';

function Subreddits() {

  const [articles, setArticles] = useState([]);

  // fetch most popular subreddits
  useEffect(() => {
    fetch(`https://www.reddit.com/subreddits.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request Failed!")
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      if (jsonResponse !== null) {
        setArticles(jsonResponse.data.children);
      }
    })
    }, []);


  return (
    articles.map((article, index) => (
      <Link to={article.data.display_name.toLowerCase()} key={index}>
        <div className="subreddit">
            <img src={article.data.icon_img !== "" && article.data.icon_img !== null ? article.data.icon_img : redditlogo} alt="subreddit logo" className="subreddit-logo" />
            <h2>{article.data.display_name}</h2>
            {console.log(article)}
        </div>        
      </Link>

    ))
  );
}

export default Subreddits;

/*
                articles !== null ? articles.map((article, index) => (
                  <Subreddits key={index} article={article.data} />
                )) :''
*/