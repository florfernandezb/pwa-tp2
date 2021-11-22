import { GetMoviesDataSource } from "../../data/datasource/getMoviesDataSource.js";

export class MovieRepository {
    constructor(dataSource) {
        this.dataSource = new GetMoviesDataSource()
    }

    getMovies(movie) {
        return this.dataSource.getMoviesResponse(movie)
    }
}