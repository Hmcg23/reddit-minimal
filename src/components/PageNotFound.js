import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  

  return (
    <section className="no-posts">
        <h1>No Posts Matching "{query}"</h1>
        <button onClick={(e) => {
          e.preventDefault();
          navigate(window.location.pathname);
          }}><h2>Go Back</h2></button>
    </section>
  );
}

export default PageNotFound;