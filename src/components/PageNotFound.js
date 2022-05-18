import React from 'react';
import '../App.css';

function PageNotFound() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  

  return (
    <section className="no-posts">
        <h1>...</h1>
        {/*
          <button onClick={(e) => {
          e.preventDefault();
          window.location = '/home'
          }}><h2>Go Home</h2></button>
        */}
    </section>
  );
}

export default PageNotFound;