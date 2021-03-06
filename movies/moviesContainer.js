import { OmdbApiCall } from "./framework/requestManager/omdbApiCall.js";
import { GetMoviesDataSource } from "./data/datasource/getMoviesDataSource.js"
import { MovieRepository } from "./data/repository/movieRepository.js";
import { MovieUseCase } from "./useCase/movieUseCase.js"
import { MovieCardView } from "./views/movieCardView.js"
import { MovieDto } from "./data/dto/MovieDto.js";
import { IndexedDb } from "./utils/indexedDb.js"
import { FavouritesMovies } from "./views/favouritesMovies.js";
import { OnClickListener } from "./views/onClickListener.js";

export class MoviesContainer extends OnClickListener {
    apiCall = new OmdbApiCall();
    dataSource = new GetMoviesDataSource(this.apiCall);
    repository = new MovieRepository(this.dataSource);
    useCase = new MovieUseCase(this.repository);
    cardView = new MovieCardView();
    movieDto = new MovieDto();
    db = new IndexedDb()
    favourites = new FavouritesMovies();

    movieHistory = [];
    currentSearch;

    async getMovies(movie) {
        this.currentSearch = this.createMovieDto(await this.useCase.invoke(movie));
        return this.currentSearch
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
        this.movieDto.score = apiResponse.Ratings[0].Value;
        this.movieDto.id = apiResponse.imdbID;
        return this.movieDto;
    }

    setMovieCardView(movie, divId) {
        return this.cardView.createMovieCard(movie, divId);
    }

    addFavourite() {
        this.favourites.addFavourite(this.currentSearch);
    }

    deleteElement(id) {
        this.cardView.deleteElement(id)
        this.favourites.deleteFavouriteFromIndexed(id);
    }

    getFAvourites() {
        return this.favourites.getFavourites();
    }

    cleanScreen() {
        this.cardView.destroyView();
    }

    showToast(msg) {
        let toast = document.getElementById("toast");
        toast.className = "show";
        toast.textContent = msg;
        setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
    }

}