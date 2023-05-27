
let directionLeft = document.getElementsByClassName('bi-arrow-left-circle')[0];
let directionRight = document.getElementsByClassName('bi-arrow-right-circle')[0];
let trend = document.getElementsByClassName('trend-cards')[0];

let viewing = document.getElementsByClassName('fullPlate')[0];
const hamburger =document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const card = document.getElementsByClassName("trend-card");

hamburger.addEventListener("click", ()=>{
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>n.
addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))




directionLeft.addEventListener('click', ()=>{
    trend.scrollLeft -= 20;
})
directionRight.addEventListener('click', ()=>{
    trend.scrollLeft += 30;
}) 
API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=53a50c82b99ddc3e6bd760a7fd956522&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=53a50c82b99ddc3e6bd760a7fd956522&query="'

const littleCard = document.getElementsByClassName('littleCard');
const search  = document.getElementById('search-field');
//const search = document.getAnimations('search')

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch (url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies){
    littleCard.innerHTML = ''

    movies.forEach((movie) =>{
        const  {title, poster_path, release_date, overview} = movie

        const movieEl = document.createElement ('a')
        movieEl.classList.add('littleCard')

        movieEl.innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}" class="postCard">
             <div class="detailz">
                <h4 class="title">${title}<span class="year"><p>${release_date}</p></span></h4>
                <p class="storyLine"> ${overview}
                </p>
                <div class="action">
                    <div  class="playnow">
                        <i class="bi bi-play-fill"></i>play</p>
                    </div>
                    <div class="played">
                        <i class="bi bi-check2-all"></i>
                    </div>
                </div>
             </div>
        `
        viewing.appendChild(movieEl);
})
 
}


search.addEvenListener('click', (e) =>{
    e.preventDefault()

    const searchTerm = search.value 

    if(searchTerm && searchTerm !== ''){
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
}else{
window.location.reload ()
}
})


function showMovies(movies){
    card.innerHTML = ''

    movies.forEach((movie) =>{
        const  {title, poster_path, release_date, backdrop_path} = movie

        const moviel = document.createElement ('a')
        moviel.classList.add('card')

        moviel.innerHTML = `
        <img src="${IMG_PATH + poster_path}" width="130" height="195" alt="${title}" class="poster">
        <div class="rest_card">
            <img src="${IMG_PATH + backdrop_path}" alt="${title}">
            <div class="cont">
                <h4>${title}</h4>
                <div class="sub">
                    <p>${original_language}, ${release_date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${rating}</h3>
                    <i id="join" class="bi bi-plus-circle"></i>
                </div>
            </div>
        </div>
        `
        trend.appendChild(moviel);
})
 
}


