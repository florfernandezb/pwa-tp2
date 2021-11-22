export class GetMoviesDataSource {
    constructor(apiCall) {
        this.moviesApiCall = apiCall;
    }

    async getMoviesResponse(movie) {
        return await this.moviesApiCall.getMovie(movie)
    }
}