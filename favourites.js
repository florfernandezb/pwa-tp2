import { MoviesContainer } from "./movies/moviesContainer.js";

const moviesContainer = new MoviesContainer();
moviesContainer.favourites.init();

window.onload = async function () {
  let fav = await moviesContainer.getFAvourites();
  fav.length > 0 ? fav.forEach(res => {

    moviesContainer.setMovieCardView(res.movie, "favourites-container");

    for(let movie of document.querySelectorAll('.delete')){
      movie.addEventListener('click', async function name(e) {
        let id = e.target.id.split('button-')
        moviesContainer.deleteElement(id[1]);
  
        moviesContainer.showToast("Eliminado de favoritos")
  
      })
    }
  }) : document.querySelector('#emptyState').textContent = "No hay películas agregadas a favoritas"
}

// document.getElementById('show-favourites').addEventListener('click', async () => {
//   let res = await moviesContainer.getFAvourites()
//   res.forEach(res => {
//     console.log(res);
//     moviesContainer.setMovieCardView(res.movie, "favourites-container");
//   });
// });

// document.querySelector('.delete').addEventListener('click', function(e) {
//   console.log(e.target.id)
// })


// for (let btn of document.querySelectorAll('.delete')) {
//   btn.addEventListener("click", function (e) {
//     console.log(e.target.id);
//     moviesContainer.deleteElement(e.target.id);
//   })
// };

