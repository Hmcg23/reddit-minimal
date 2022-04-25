import React, { useState } from 'react';
import '../App.css';
import arrow from '../images/arrow.svg';
import messageicon from '../images/messageicon.svg'
import bgimage from '../images/bgimage.jpeg'
import ToggleMessages from './ToggleMessages';


function Posts() {
  const [comments, setComments] = useState("");

  return (
          <div className="all-posts">
            <section className="post">
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
                    <h2>Top 10 greatest <a href="https://scratch.mit.edu/projects/677407763/" target="_blank" rel="noreferrer">scratch intros</a></h2>
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

