import React from 'react';
import '../App.css';
import FakeCommentData from '../fake-data/fakeCommentData.json';

function ToggleMessages() {

  return (
    FakeCommentData.map((msg) => {
    return (
    <div className="comment" key={msg.id}>
        <div className="comment-info">
            <h3>{msg.user}</h3>
            <h3>{`${msg.timeSincePosted} hours ago`}</h3>            
        </div>
        <p>{msg.text}</p>
    </div>
    )
})
  );
}

export default ToggleMessages;



