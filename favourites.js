import { MoviesContainer } from "./movies/moviesContainer.js";

const moviesContainer = new MoviesContainer();
moviesContainer.favourites.init();

window.onload = async function () {
  let fav = await moviesContainer.getFAvourites();
  fav.forEach(res => {
    console.log(res);
    moviesContainer.setMovieCardView(res.movie, "favourites-container");
  });

  document.querySelector('.delete').addEventListener('click', function name(e) {
    console.log(e.target.id);
    let id = e.target.id.split('button-')
    console.log(id)
      moviesContainer.deleteElement(id[1]);
  })
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

