inventors-frontend-challenge# Inventors Frontend Challenge
Challenge Description

You are tasked with building a web page that displays a list of movies from an external API. The API endpoint is https://api.themoviedb.org/3/movie/popular, which returns a list of popular movies. Your task is to create a frontend that consumes this API and displays the movies in a visually appealing way.
Requirements

Below are some basic requirements that should be implemented in your submission:

    Your frontend should be built using HTML, CSS, and JavaScript.
    The web page should display a list of movies, including the movie poster, title, release date, and overview.
    The list should be sortable by release date or popularity.
    The web page should have a search bar that allows users to search for movies by title.
    When a user clicks on a movie, it should display a modal that shows additional details, such as the movie's rating, runtime, and genre.
    Your frontend should be responsive and work on desktop and mobile devices.

Note: You are free to use any CSS framework or library to help you build the UI (user interface). Also, you can add any other functionality you feel is necessary, but avoid adding complicated functionalities.
Also make sure your design follows the design here

https://www.figma.com/file/RVoYFFXnMHbCjha4TrzhDf/INVENTORS?type=design&node-id=717%3A799&t=LmwEPWqtkYDUIj4J-1
API Documentation

The API endpoint is https://api.themoviedb.org/3/movie/popular. It accepts the following query parameters:

    api_key: Your API key, which you can obtain by creating an account at https://www.themoviedb.org/.
    language: The language of the response. Defaults to "en-US".
    page: The page of results to return. Defaults to 1.

The response body is a JSON object that contains the following fields:

    page: The page of results returned.
    total_results: The total number of results available.
    total_pages: The total number of pages available.
    results: An array of movie objects. Each movie object contains the following fields:
        poster_path: The path to the movie's poster image.
        title: The movie's title.
        release_date: The movie's release date.
        overview: A brief summary of the movie's plot.

Submission Instructions

To submit your solution, please fork this repository and add your solution and any necessary instructions to run your solution locally sould be added to a separate SOLUTIONREADME.md add any additional notes you think are important. Once you have created your repository then create a Pull Request to this repository.

Remember to add your full name and the email you used in registrying to your readme.
About

Name: Ochijeh Franklin Ekene
E-mail: ochijehfranklin@gmail.com

colors
#1E1E1E; background

for search 
/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 28px 12px 20px;
gap: 8px;

width: 192px;
height: 48px;

background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(4px);

/* Note: backdrop-filter has minimal browser support */
border-radius: 28px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

avatar
/* Frame 90 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px;
gap: 8px;

width: 48px;
height: 48px;

background: url(.png);
backdrop-filter: blur(4px);

/* Note: backdrop-filter has minimal browser support */
border-radius: 28px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

navbar
position: absolute;
width: 1728px;
height: 164px;
left: calc(50% - 1728px/2 - 0px);
top: -12px;

background: linear-gradient(180deg, #0C1516 12.68%, rgba(12, 21, 22, 0.899768) 32.44%, rgba(12, 21, 22, 0.796534) 52.19%, rgba(12, 21, 22, 0.484071) 74.2%, rgba(12, 21, 22, 0.183844) 86.95%, rgba(12, 21, 22, 0) 100%);


js
document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
});

function fetchMovies() {
    const apiEndpoint = "https://api.themoviedb.org/3/movie/popular";
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

    fetch(`${apiEndpoint}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
        })
        .catch(error => {
            console.log(error);
        });
}

function displayMovies(movies) {
    const movieList = document.getElementById("movie-list");

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        const title = document.createElement("h2");
        title.textContent = movie.title;

        const overview = document.createElement("p");
        overview.textContent = movie.overview;



