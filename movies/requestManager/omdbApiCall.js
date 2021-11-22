import { getOmdbPath } from "./moviesApiConstants.js";

export class OmdbApiCall {
  async getMovie(movie) {
    let response = await
    fetch(getOmdbPath(movie))
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);
        return data
      })
      .catch(function (error) {
        console.log("Hubo un problema con la peticion Fetch " + error.message);
      });
      return response;
  }
}
