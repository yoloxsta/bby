// public/script.js
document.getElementById('show-books').addEventListener('click', function() {
    fetch('http://localhost:3000/api/books')  // Fetch from port 3000 for books
        .then(response => response.json())
        .then(data => {
            const listContainer = document.getElementById('list-container');
            listContainer.innerHTML = '<h3>Books:</h3>';
            data.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.textContent = book.title;
                listContainer.appendChild(bookItem);
            });
        })
        .catch(error => console.error('Error fetching books:', error));
});

document.getElementById('show-movies').addEventListener('click', function() {
    fetch('http://localhost:3001/api/movies')  // Fetch from port 3001 for movies
        .then(response => response.json())
        .then(data => {
            const listContainer = document.getElementById('list-container');
            listContainer.innerHTML = '<h3>Movies:</h3>';
            data.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.textContent = movie.title;
                listContainer.appendChild(movieItem);
            });
        })
        .catch(error => console.error('Error fetching movies:', error));
});
