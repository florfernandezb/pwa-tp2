import { UpcomingsContainer } from "./upcomings/upcomingsContainer.js";
import { MoviesContainer } from "./movies/moviesContainer.js";

const input = document.getElementById("input-search");
const searchButton = document.getElementById("button-search");
let spinner = document.querySelector(".spinner");
let network = document.getElementById("status");

const upcomingsContainer = new UpcomingsContainer();
const moviesContainer = new MoviesContainer();

init()

async function init() {
  moviesContainer.favourites.init();

  registerServiceWorker();

  let response = await upcomingsContainer.getUpcomings();
  console.log("init response", response);

}

input.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "Enter":
      spinner.style.visibility = "visible"
      event.preventDefault();
      getPelicula();
      break;

    case "Escape":
      input.value = "";
      spinner.style.visibility = "hidden"
      break;

    default:
      break;
  }
});

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  spinner.style.visibility = "visible"
  getPelicula();
})

async function getPelicula() {
  if (input.value != "") {
    // validateError();
    let movie = await moviesContainer.getMovies(input.value);
    moviesContainer.setMovieCardView(movie, "movie-container");

    console.log(spinner)
    spinner.style.visibility = "hidden"

    input.value = "";
  } else {
    console.log("error");
    // validateError();
    // showError("Please enter a city");
  }
}

document.getElementById("favourite").addEventListener("click", function (e) {
  moviesContainer.addFavourite();

  moviesContainer.showToast("Agregado a favoritos")
})

window.addEventListener('load', function (e) {
  if (navigator.onLine) {
    network.innerHTML = "User is online";
    network.classList.add("success");
  } else {
    network.innerHTML = "User is offline";
    network.classList.remove("success");
    network.classList.add("error");
  }
}, false);

window.addEventListener('online', function (e) {
  network.innerHTML = "User is back online";
  network.classList.remove("error");
  network.classList.add("success");
}, false);

window.addEventListener('offline', function (e) {
  network.innerHTML = "User went offline";
  network.classList.remove("success");
  network.classList.add("error");
}, false);
