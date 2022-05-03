import React, { useState } from 'react';
import '../App.css';
import arrow from '../images/arrow.svg';
import messageicon from '../images/messageicon.svg'
import ToggleMessages from './ToggleMessages';
import PageNotFound from './PageNotFound';

export const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  const filteredPosts  = posts.filter((post) => {
      const postText = post.data.title.toLowerCase();
      return postText.includes(query);
  });
  if (filteredPosts.length === 0 ) {
    return null;
  } else {
    return filteredPosts;
  }
};


function Posts({subredditData}) {
  const [comments, setComments] = useState("");
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const filteredPosts = filterPosts(subredditData, query);

  return (
          <div className="all-posts">
            {
              filteredPosts === null ? <PageNotFound /> : 
              filteredPosts.map((post, index) => (
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
);
}

export default Posts;

