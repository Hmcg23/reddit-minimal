import React, { useState } from 'react';
import '../App.css';
import arrow from '../images/arrow.svg';
import messageicon from '../images/messageicon.svg'
import bgimage from '../images/bgimage.jpeg'
import ToggleMessages from './ToggleMessages';
import fakePostData from '../fake-data/fakePostData.json';
import fakeCommentData from '../fake-data/fakeCommentData.json';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

export const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  const filteredPosts  = posts.filter((post) => {
      const postText = post.text.toLowerCase();
      return postText.includes(query);
  });
  if (filteredPosts.length === 0 ) {
    return null;
  } else {
    return filteredPosts;
  }
};


function Posts() {
  const [comments, setComments] = useState("");
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const filteredPosts = filterPosts(fakePostData, query);


  return (
          <div className="all-posts">
            {
              filteredPosts === null ? <PageNotFound /> : filteredPosts.map(post => (
                <article className="post" key={post.id}>
              {/* Upvote Section */}
                  <section className="upvote-and-text">
                    <div className="upvote-system">
                      <img src={arrow} alt="upvote-arrow" className="up-arrow" />
                      <b>{post.upvotes}</b>
                      <img src={arrow} alt="upvote-arrow" className="down-arrow" />
                    </div>
                    {/* Post Text */}
                    <div className="post-info">
                      <div className="post-text">
                        <h2>{post.text}</h2>
                        {post.isImage === true ? <img src={post.image} alt='post' className="post-image" /> : ''}
                        <hr />            
                      </div>
                        {/* User Info and Other */}
                      <div className="user-info">
                        <p>{post.username}</p>
                        <p>{`${post.timeSincePosted} hours ago`}</p>
                        <div className="messages">
                          <img src={messageicon} alt="message icon" className="message-icon" onClick={() => { !comments ? setComments(<ToggleMessages />) : setComments("")}} />
                          <p>{fakeCommentData.length}</p>
                        </div>
                      </div>
                    </div>                
                  </section>
                  {comments}
                </article>
              ))
            }
          </div>
);
}

export default Posts;

