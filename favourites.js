import { MoviesContainer } from "./movies/moviesContainer.js";

const moviesContainer = new MoviesContainer();
moviesContainer.favourites.init();

for (let btn of document.querySelectorAll('.favourite')) {
    btn.addEventListener("click", function (e) {
      moviesContainer.addFavourite();
    });
  };
  
  for (let btn of document.querySelectorAll('.delete')) {
    btn.addEventListener("click", function (e) {
      console.log(e.target.id);
      moviesContainer.deleteElement(e.target.id);
    })
  };
  
  // let button = document.getElementById('show-favourites')
  document.getElementById('show-favourites').addEventListener('click', async () => {
    let res = await moviesContainer.getFAvourites()
    res.forEach(res => {
      console.log(res);
      moviesContainer.setMovieCardView(res.movie, "favourites-container");
    });
  });