// import getMovie from './services/apiCall'
const input = document.getElementById("input-search");
const container = new Container()

async function init() {
  registerServiceWorker();

  let response = await container.init()
  console.log("init response", response)
  
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
    container.apiCall.getMovie(input.value);
    container.apiCall.getUpcomings();
  } else {
    console.log("error");
    // validateError();
    // showError("Please enter a city");
  }
}
