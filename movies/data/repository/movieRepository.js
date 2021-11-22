export class MovieRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    getMovies(movie) {
        return this.dataSource.getMoviesResponse(movie)
    }
}