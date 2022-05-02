/* Boilerplate code - GET request

fetch('url').then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request Failed!');
}, networkError => console.log(networkError.message))
.then(jsonResponse => {
    // Code to excecute with jsonResponse
})

*/

export const getSubredditData = (subredditData) => {
    const url = 'https://www.reddit.com/';
    const subreddit = 'subreddits';
    const endpoint = `${url}${subreddit}.json`;
    fetch(endpoint)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request Failed!');
    }, networkError => {
        console.log(networkError.message);
    })
    .then(jsonResponse => {
        subredditData = jsonResponse.data;
    })
}