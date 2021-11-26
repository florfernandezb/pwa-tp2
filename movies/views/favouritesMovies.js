export class FavouritesMovies {

    init() {
        this.favouritesDb = new Dexie("favourites_movies");
        this.favouritesDb.version(1).stores({ favourites_movies: '_id', favourites_movies_title: 'title' });
        this.favouritesDb.open()
            .then(console.log("se agregó a favorito indexed"));
    }

    addFavourite(movie) {
        this.favouritesDb.favourites_movies.put({ title: movie.title, movie: movie, _id: movie.id })
            .then(function () {
                console.log("aca estamos en el primer then del guardado de la db")
            })
            .then(console.log("listo"));
    }

    async getFavourites() {
        let favourites = []
        await this.favouritesDb.favourites_movies.toArray()
            .then(function (result) {
                result.forEach(function (data) {
                    favourites.push(data)
                });
            });
        return favourites
    }

    deleteFavourite(id) {
        db.todo.where('_id').equals(id).delete()
            .then(this.refreshView);

    }

    refreshView() {
        console.log("refresh view")
    }
}