
let directionLeft = document.getElementsByClassName('bi-arrow-left-circle')[0];
let directionRight = document.getElementsByClassName('bi-arrow-right-circle')[0];
let trend = document.getElementsByClassName('trend-cards')[0];



directionLeft.addEventListener('click', ()=>{
    trend.scrollLeft -= 20;
})
directionRight.addEventListener('click', ()=>{
    trend.scrollLeft += 30;
}) 

let json_url = "sdgmovie.json";

fetch(json_url).then(response => response.json())
    .then((data) => {
        data.forEach((ele, i) => {
         let {poster_path, title, release_date, rating, original_language, backdrop_path } =
          card = document.createElement('a');
         card.href = '#';
         trend-card.classList.add('card');
            card.innerHTML = `
            <img src="${poster_path}" width="130" height="195" alt="${title}" class="poster">
                <div class="rest_card">
                    <img src="${backdrop_path}" alt="${title}">
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
                trend.appendChild(card);
            });
        });


        fetch(json_url).then(response => response.json())
    .then((data) => {
        data.forEach((ele, i) => {
         let {poster_path, title, release_date, rating, original_language, backdrop_path } =
          card = document.createElement('a');
         card.href = '#';
         trend-card.classList.add('card');
            card.innerHTML = `
            <img src="${poster_path}" width="130" height="195" alt="${title}" class="poster">
                <div class="rest_card">
                    <img src="${backdrop_path}" alt="${title}">
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
                trend.appendChild(card);
            });
        });

