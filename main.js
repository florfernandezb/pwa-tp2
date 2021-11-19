// import getApiResponse from './services/apiCall'
const input = document.getElementById("input-search");
const container = new Container()

function init() {
  registerServiceWorker();
  container.upcomings.test();
}

input.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    getPelicula();
  }
});

function getPelicula() {
  if (input.value != "") {
    // validateError();
    container.apiCall.getApiResponse(input.value);
    container.apiCall.getUpcomings();
  } else {
    console.log("error");
    // validateError();
    // showError("Please enter a city");
  }
}
