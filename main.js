
// import { registerServiceWorker } from "./serviceWorker/registerServiceWorker.js";
import { Container } from "./container.js";

const input = document.getElementById("input-search");
const searchButton = document.getElementById("button-search")
// const upcoming = new UpcomingsUseCase()
// const movie = new MovieUseCase()
const container = new Container()

init()

async function init() {
  registerServiceWorker();

  let response = await container.getUpcomings()
  console.log("init response", response)

}

input.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "Enter":
      event.preventDefault();
      getPelicula();
      break;

    case "Escape":
      input.value = "";
      break;

    default:
      break;
  }
});

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  getPelicula()
})

async function getPelicula() {
  if (input.value != "") {
    // validateError();
    let response = await container.movie.invoke(input.value)
    let movie = container.createMovieDto(response);
  
    container.getMovieCardView(movie)
  } else {
    console.log("error");
    // validateError();
    // showError("Please enter a city");
  }
}
