// server.js
const express = require('express');
const cors = require('cors');

// Create separate express instances for books and movies
const appBooks = express();
const appMovies = express();

// Enable CORS for both servers
appBooks.use(cors());
appMovies.use(cors());

// Book and movie data
const books = [
  { id: 1, title: "The Great Gatsby" },
  { id: 2, title: "To Kill a Mockingbird" },
  { id: 3, title: "1984" }
];

const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "The Matrix" },
  { id: 3, title: "The Dark Knight" }
];

// Serve static files from the 'public' directory
appBooks.use(express.static('public'));
appMovies.use(express.static('public'));

// API to get book list (on port 3000)
appBooks.get('/api/books', (req, res) => {
  res.json(books);
});

// API to get movie list (on port 3001)
appMovies.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Start the servers
appBooks.listen(3000, () => {
  console.log('Book server running at http://localhost:3000');
});

appMovies.listen(3001, () => {
  console.log('Movie server running at http://localhost:3001');
});
