import { fetchMovies } from './api.js';

const searchBox = document.getElementById('search-box');
const movieList = document.getElementById('movie-list');
const modal = document.getElementById('movie-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalPoster = document.getElementById('modal-poster');
const modalTitle = document.getElementById('modal-title');
const modalOverview = document.getElementById('modal-overview');
const modalRelease = document.getElementById('modal-release');
const modalRating = document.getElementById('modal-rating');

let movies = [];

function displayMovies(movieArray) {
    movieList.innerHTML = '';
    movieArray.forEach(movie => {
        const element = document.createElement('div');
        element.classList.add('movie-item');
    element.innerHTML = `<div class = "movie-box">
    <img src="https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}" alt="" class="movie-poster">
    <h2 class="movie-title">${movie.title}</h2>
    <p class="movie-average">${movie.vote_average}</p>
    </div>`;

        element.querySelector('.movie-poster').addEventListener('click', () => openModal(movie));
        movieList.appendChild(element);
    });
}

fetchMovies().then(response => {
    movies = response.results;
    displayMovies(movies);
});

function openModal(movie) {
    modalPoster.src = `https://media.themoviedb.org/t/p/w500${movie.poster_path}`;
    modalTitle.textContent = movie.title;
    modalOverview.textContent = movie.overview;
    modalRelease.textContent = movie.release_date;
    modalRating.textContent = movie.vote_average;

    modal.style.display = 'flex';
}

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

searchBox.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
});
