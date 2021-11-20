class ApiCall {
  getMovie(movie) {
    fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${movie}`)
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
    let response = await 
      fetch(`
        https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`)
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          // console.log("data del upcoming fetch", data.results);
          // console.log("data del upcoming map", data.results.map(res => console.log(res)));
          // container.upcomings.test(data);
          return data
          res = data;
          console.log("api1")
          // return data;
        })
        .catch(function (error) {
          console.log("Hubo un problema con la peticion Fetch" + error.message);
        });

     return response
    // setTimeout(() => {
    //   console.log("api2", res)
    //   return res
    // }, 10000);
  }
}
