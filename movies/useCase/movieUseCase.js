export class MovieUseCase {

    constructor(repository) {
        this.repository = repository;
    }

    async invoke(movie) {
        return await this.repository.getMovies(movie);
    }
}