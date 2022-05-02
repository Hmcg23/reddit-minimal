import React, { useState, useEffect } from 'react';
import './App.css';
// components
import PageNotFound from './components/PageNotFound';
import Subreddits from './components/Subreddits';
import Nav from './components/Nav';
import Posts from './components/Posts';
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  // useState hook
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [articles, setArticles] = useState([]);
  const [subreddits, setSubreddits] = useState('subreddits');

  // api call
  useEffect(() => {
  fetch(`https://www.reddit.com/${subreddits}.json`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request Failed!")
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => {
    if (jsonResponse !== null) {
      setArticles(jsonResponse.data.children);
    }
  })
  }, [subreddits]);

  return (
          <Router>
            <div className="App">
              <Nav
              searchQuery={searchQuery} setSearchQuery={setSearchQuery}
              />
              <main>
                <Routes>
                  <Route path="/" element={<Posts />} />
                  <Route path="/home" element={<Posts />} />
                  <Route path="/pagenotfound" element={<PageNotFound />} />
                </Routes>
                <section className="subreddit-section">
                  <h1>Subreddits</h1>
                { 
                articles !== null ? articles.map((article, index) => (
                  <Subreddits key={index} article={article.data} />
                )) :''
                }                  
                </section>

              </main>
            </div>
          </Router>
  );      
}

export default App;

/*
1. fetch the reddit data of desired subreddit
2. pass that data to <Posts /> using props
3. get the title, upvotes, username, etc.
4. repeat
*/