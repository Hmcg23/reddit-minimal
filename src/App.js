import React, { useState } from 'react';
import './App.css';
// components
import Nav from './components/Nav';
import Posts from './components/Posts';
// react router
import { BrowserRouter as Router } from 'react-router-dom';

function App(props) {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  // useState hook
  const [searchQuery, setSearchQuery] = useState(query || '');
  
  return (
          <Router>
            <div className="App">
              <Nav
              searchQuery={searchQuery} setSearchQuery={setSearchQuery}
              />
                <Posts />
            </div>
          </Router>
  );      
}

export default App;