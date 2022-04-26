import React, { useState } from 'react';
import '../App.css';
import arrow from '../images/arrow.svg';
import messageicon from '../images/messageicon.svg'
import bgimage from '../images/bgimage.jpeg'
import ToggleMessages from './ToggleMessages';

const posts = [
  { id: '1', text: 'This first post is about React' },
  { id: '2', text: 'This next post is about Preact' },
  { id: '3', text: 'We have yet another React post!' },
  { id: '4', text: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postText = post.text.toLowerCase();
      return postText.includes(query);
  });
};


function Posts() {
  const [comments, setComments] = useState("");
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const filteredPosts = filterPosts(posts, query);



  return (
          <div className="all-posts">
            {
              filteredPosts.map(post => (
                <section className="post" key={post.id}>
              {/* Upvote Section */}
              <div className="upvote-and-text">
                <div className="upvote-system">
                  <img src={arrow} alt="upvote-arrow" className="up-arrow" />
                  <b>256</b>
                  <img src={arrow} alt="upvote-arrow" className="down-arrow" />
                </div>
                {/* Post Text */}
                <div className="post-info">
                  <div className="post-text">
                    <h2>{post.text}</h2>
                    <hr />            
                  </div>
                    {/* User Info and Other */}
                  <div className="user-info">
                    <p>fenyx</p>
                    <p>2 days ago</p>
                    <div className="messages">
                      <img src={messageicon} alt="message icon" className="message-icon" onClick={() => { !comments ? setComments(<ToggleMessages />) : setComments("")}} />
                      <p>3</p>
                    </div>
                  </div>
                </div>                
              </div>

              {comments}
            </section>
              ))
            }
            





            {/* Second Post */}
            <section className="post">
              <div className="upvote-and-text">
                <div className="upvote-system">
                  <img src={arrow} alt="upvote-arrow" className="up-arrow" />
                  <b>12.2k</b>
                  <img src={arrow} alt="upvote-arrow" className="down-arrow" />
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
                      <p>244</p>   
                    </div>
                  </div>          
                </div>                
              </div>

            </section>
          </div>
);
}

export default Posts;

