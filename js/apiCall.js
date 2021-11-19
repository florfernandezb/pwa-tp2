function traerContenido() {
  fetch("http://www.omdbapi.com/?apikey=586d3e4&t=thor")
    .then(function (response) {
      return response.json();
    })
    .then(function (responseJson) {
      printResultados(responseJson);
    })
    .catch(function (error) {
      console.log("Fallo! -> ", error);
    });
}
