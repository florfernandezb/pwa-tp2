export class LastSearchMovies {
    lastSearches = [];

    init() {
        let db = new Dexie("last_search_movies");
        // this.input = input_value
        console.log(e)

        // document.body.addEventListener('submit', onSubmit);
        // document.body.addEventListener("click", onClick);

        db.version(1).stores({ favourites_movies: '_id' });
        db.open()
            .then(console.log("se agregó a favorito"));
    }
}