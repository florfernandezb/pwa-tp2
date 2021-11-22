import { UpcomingsUseCase } from "./upcomings/useCase/upcomingsUseCase.js";
import { MovieUseCase } from "./movies/useCase/movieUseCase.js";
import { MovieCardView } from "./movies/views/movieCardView.js"
import { Movie } from "./classes/Movie.js";

export class Container {
    upcomings = new UpcomingsUseCase();
    movie = new MovieUseCase();
    cardView = new MovieCardView();
    movieDto = new Movie();

    getUpcomings() {
        return this.upcomings.invoke();
    }

    getMovies() {
        return this.movie.getMovie()
    }

    createMovieDto(apiResponse) {
        this.movieDto.title = apiResponse.Title;
        this.movieDto.year = apiResponse.Year;
        this.movieDto.poster = apiResponse.Poster;
        this.movieDto.actors = apiResponse.Actors;
        this.movieDto.country = apiResponse.Country; 
        this.movieDto.director = apiResponse.Director; 
        this.movieDto.genre = apiResponse.Genre; 
        this.movieDto.language = apiResponse.Language; 
        this.movieDto.plot = apiResponse.Plot; 
        this.movieDto.runtime = apiResponse.Runtime; 
        this.movieDto.score = apiResponse.Metascore;
        this.movieDto.id = apiResponse.imdbId;
        return this.movieDto
    }

    getMovieCardView(movie) {
        return this.cardView.createMovieCard(movie)
    }

    getClearMovie() {
        return this.cardView.clearSetup()
    }
}