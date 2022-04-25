import React from 'react';
import '../App.css';

function ToggleMessages() {
    
    const messages = [
    {
        id: 1,
        user: 'fenyx',
        text: 'this is a test',
        timeSincePosted: 3
    },
    {
        id: 2,
        user: 'elidekk',
        text: 'this is another test',
        timeSincePosted: 1
    }
];

  return (
    messages.map(msg => {
    return (
    <div className="comment">
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



