import { MovieRepository } from "../data/repository/movieRepository.js";

export class MovieUseCase {

    constructor(repository) {
        this.repository = new MovieRepository();
    }

    async invoke(movie) {
        return await this.repository.getMovies(movie)
    }
}