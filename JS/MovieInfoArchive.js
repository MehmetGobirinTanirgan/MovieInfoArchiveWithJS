const form = document.getElementById("movie-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const dateElement = document.getElementById("release-date");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-movies");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",displayMovieList);
    cardBody.addEventListener("click",deleteMovie);
    clear.addEventListener("click",clearAllMovies);
}


function addMovie(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const releaseDate = dateElement.value;
    const url = urlElement.value;
    let urlString = url.toString();
    let firstIndex = urlString.indexOf("=");
    let lastIndex = urlString.indexOf("&");
    let urlID = urlString.substring(firstIndex+1,lastIndex);
   
    if(title === "" || director === "" || url === "" || releaseDate === ""){
        UI.displayMessages("danger","Fill the all areas!");
    }
    else if(!urlString.includes("https://www.youtube.com/watch?v=")){
        UI.displayMessages("danger","Youtube links only!");
    }
    else{
        const newMovie = new Movie(title,director,releaseDate,urlID);
        UI.addMovieToUI(newMovie);
        Storage.addMovieToStorage(newMovie);
        UI.displayMessages("success","Movie added!");
        UI.clearInputs(titleElement,directorElement,urlElement,dateElement);
    }  
    e.preventDefault();
}

function displayMovieList(){
    let movies = Storage.getMoviesFromStorage();
    UI.displayMovies(movies);
}

function deleteMovie(e){  
    if(e.target.id === "delete-movie"){
        UI.deleteMovieFromUI(e.target);
        Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("success","Movie deleted!");
    }
}

function clearAllMovies(){  
    if(confirm("Are you sure?")){
        UI.clearAllMoviesFromUI();
        Storage.clearAllMoviesFromStorage();
    }
}