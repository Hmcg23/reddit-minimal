import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="no-posts">
        <h1>No Posts Matching "{"example"}"</h1>
        <button onClick={() => navigate('/')}><h2>Go Back</h2></button>
    </section>
  );
}

export default PageNotFound;