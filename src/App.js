import React from 'react';
import './App.css';
// components
import PageNotFound from './components/PageNotFound';
import Subreddits from './components/Subreddits';
import Nav from './components/Nav';
import Posts from './components/Posts';
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <body>
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/pagenotfound" element={<PageNotFound />} />
            </Routes>
            <Subreddits />
          </main>
        </body>
      </div>
    </Router>
  );      
}

export default App;
