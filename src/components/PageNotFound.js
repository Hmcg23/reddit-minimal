import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const fullUrl = window.location.href;
  

  return (
    <section className="no-posts">
        <h1>No Posts Matching "{query}"</h1>
        <button onClick={() => {
          if (fullUrl.includes('home')) {
            navigate('/')
          } else {
            navigate('/home')
          }
          console.log(search);
          console.log(query)
          }}><h2>Go Back</h2></button>
    </section>
  );
}

export default PageNotFound;