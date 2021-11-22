import { OmdbApiCall } from "../../requestManager/omdbApiCall.js";

export class GetMoviesDataSource {
    constructor() {
        this.moviesApiCall = new OmdbApiCall()
    }

    async getMoviesResponse(movie) {
        return await this.moviesApiCall.getMovie(movie)
    }
}