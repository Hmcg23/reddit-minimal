import React, { useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState(query || '');

  return (
    <Router>
        <body className="App">
          <Nav
          searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          />
          <main>
            <Routes>
              <Route path="*" element={<Posts />} />
              <Route path="/home" element={<Posts />} />
              <Route path="/pagenotfound" element={<PageNotFound />} />
            </Routes>
            <Subreddits />
          </main>
        </body>
    </Router>
  );      
}

export default App;
