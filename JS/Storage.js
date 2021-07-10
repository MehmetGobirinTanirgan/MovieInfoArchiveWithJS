class Storage{

    static addMovieToStorage(newMovie){
        let movies = this.getMoviesFromStorage();
        movies.push(newMovie);
        localStorage.setItem("movies",JSON.stringify(movies));
    };

    static getMoviesFromStorage(){
        let movies;
        if(localStorage.getItem("movies") !== null){
            movies = JSON.parse(localStorage.getItem("movies"));
        }else {
            movies = [];
        }
        return movies;
    };

    static deleteMovieFromStorage(movieTitle){
        let movies = this.getMoviesFromStorage();

        movies.forEach(function(movie,index){
            if(movie.title === movieTitle){
                movies.splice(index,1);
            }
        });

        localStorage.setItem("movies",JSON.stringify(movies));
    }

    static clearAllMoviesFromStorage(){
        localStorage.removeItem("movies");
    }

}