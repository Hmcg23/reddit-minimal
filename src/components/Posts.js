import React, { useState, useEffect } from 'react';
import '../App.css';
import arrow from '../images/arrow.svg';
import messageicon from '../images/messageicon.svg'
import ToggleMessages from './ToggleMessages';
import PageNotFound from './PageNotFound';
import Subreddits from './Subreddits';


export const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  const filteredPosts  = posts.filter(post => (
    post.data.title.toLowerCase().includes(query)
  ));
  console.log(filteredPosts);
  return filteredPosts
};


function Posts() {
  const [comments, setComments] = useState("");
  const [subredditData, setSubredditData] = useState()
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const filteredPosts = filterPosts(subredditData, query);
  const subredditName = window.location.pathname

  useEffect(() => {
    fetch(`https://www.reddit.com/r${subredditName}.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request Failed!")
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      if (jsonResponse !== null) {
        setSubredditData(jsonResponse.data.children);        
      }
    })
    }, [subredditName]);

    console.log(filteredPosts);

  return (
    <main>
          <div className="all-posts">
            {
              filteredPosts === undefined ? <PageNotFound /> : filteredPosts.map((post, index) => (
                <article className="post" key={index}>
                  {/* Upvote Section */}
                  <section className="upvote-and-text">
                    <div className="upvote-system">
                      <img src={arrow} alt="upvote-arrow" className="up-arrow" />
                      <b>{post.data.ups}</b>
                      <img src={arrow} alt="upvote-arrow" className="down-arrow" />
                    </div>
                    {/* Post Text */}
                    <div className="post-info">
                      <div className="post-text">
                        <h2>{post.data.title}</h2>
                        {post.data.url.includes('jpg') ? <img src={post.data.url} alt='post' className="post-image" />: ''}
                        <hr />            
                      </div>
                        {/* User Info and Other */}
                      <div className="user-info">
                        <p>{post.data.author}</p>
                        <p>{`${ new Date(post.data.created)} hours ago`}</p>
                        <div className="messages">
                          <img src={messageicon} alt="message icon" className="message-icon" onClick={() => { !comments ? setComments(<ToggleMessages />) : setComments("")}} />
                          <p>{post.data.num_comments}</p>
                        </div>
                      </div>
                    </div>                
                  </section>
                  {comments}
                </article>
              ))
            }
          </div>
          <section className="subreddit-section">
                <h1>Subreddits</h1>
                <Subreddits />
          </section>
  </main>
);
}

export default Posts;

