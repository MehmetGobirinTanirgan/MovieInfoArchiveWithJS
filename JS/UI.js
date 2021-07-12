
class UI {
    static addMovieToUI(newMovie) {
        const movieList = document.getElementById("movies");
        movieList.innerHTML += `
          <tr>
          <td><iframe width="400" height="250" src="https://www.youtube.com/embed/${newMovie.urlID}"
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe></td>
          <td>${newMovie.title}</td>
          <td>${newMovie.director}</td>
          <td>${newMovie.date}</td>
          <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
          </tr>
          `;
    };

    static clearInputs(element1, element2, element3, element4) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
        element4.value = "";
    };

    static displayMessages(type, message) {
        const groupDiv = document.getElementById("btn-msg-group");
        const div = document.createElement("div");
        div.className = `alert alert-${type} ml-2 mb-0 p-1`;
        div.textContent = message;
        groupDiv.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 1000);
    };

    static displayMovies(movies) {
        const movieList = document.getElementById("movies");

        movies.forEach(movie => {
            movieList.innerHTML += `
            <tr>
            <td><iframe width="400" height="250" src="https://www.youtube.com/embed/${movie.urlID}"
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe></td>
            <td>${movie.title}</td>
            <td>${movie.director}</td>
            <td>${movie.date}</td>
            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
            </tr>
            `;
        });
    }

    static deleteMovieFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllMoviesFromUI() {
        const movieList = document.getElementById("movies");

        while (movieList.firstElementChild !== null) {
            movieList.firstElementChild.remove();
        }
    }

}
