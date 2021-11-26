import { UpcomingsContainer } from "./upcomings/upcomingsContainer.js";
import { MoviesContainer } from "./movies/moviesContainer.js";

const input = document.getElementById("input-search");
const searchButton = document.getElementById("button-search");

const upcomingsContainer = new UpcomingsContainer();
const moviesContainer = new MoviesContainer();

init()

async function init() {

  registerServiceWorker();

  let response = await upcomingsContainer.getUpcomings();
  console.log("init response", response);

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
  getPelicula();
})

async function getPelicula() {
  if (input.value != "") {
    // validateError();
    moviesContainer.cleanScreen();
    let movie = await moviesContainer.getMovies(input.value);
    moviesContainer.setMovieCardView(movie, "movie-container");
    input.value = "";
  } else {
    console.log("error");
    // validateError();
    // showError("Please enter a city");
  }

}




