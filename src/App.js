import React, { useState, useEffect } from 'react';
import './App.css';
// components
import Subreddits from './components/Subreddits';
import Nav from './components/Nav';
import Posts from './components/Posts';
// react router
import { BrowserRouter as Router } from 'react-router-dom';

function App(props) {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  // useState hook
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [subredditData, setSubredditData] = useState([]);
  const [subreddit, setSubreddit] = useState('/home');

  const test = window.location.pathname;

  // api call
  useEffect(() => {
    fetch(`https://www.reddit.com/r${subreddit}.json`)
    .then(response => {
      if (response.ok) {
        setSubreddit(test);
        return response.json();
      }
      throw new Error("Request Failed!")
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      if (jsonResponse !== null) {
        setSubredditData(jsonResponse.data.children);
      }
    })
    }, [subreddit, test]);

  return (
          <Router>
            <div className="App">
              <Nav
              searchQuery={searchQuery} setSearchQuery={setSearchQuery}
              />
              <main>
                <Posts subredditData={subredditData} />
                  <section className="subreddit-section">
                    <h1>Subreddits</h1>
                    <Subreddits />
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