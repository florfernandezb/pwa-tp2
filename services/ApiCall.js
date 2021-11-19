class ApiCall {
  getApiResponse(movie) {
    fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${movie}`)
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la peticion Fetch" + error.message);
      });
  }

  async getUpcomings() {
    let response;
    await fetch(`
        https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`)
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log("data de nuevo fetch", data);
        container.upcomings.test(data);
        response = data;
        return data;
      })
      .catch(function (error) {
        console.log("Hubo un problema con la peticion Fetch" + error.message);
      });
    if (!response) {
      return response;
    }
  }
}
