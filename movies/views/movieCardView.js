import { Movie } from "../../classes/Movie.js"
export class MovieCardView {
    constructor(image, image_description, title, synopsis, scroe, link) {
        this.image = image;
        this.image_description = image_description;
        this.title = title;
        this.synopsis = synopsis;
        this.scroe = scroe;
        this.link = link;
    }

    div = document.createElement('div')


    createMovieCard(movie) {
        let container = document.getElementById('movie-container')
        this.div.setAttribute('class', 'card')
        this.div.setAttribute('id', `movieId-${movie.id}`)

        this.setupImage(movie.poster, movie.title);
        this.setupMovieDescription(movie.title, movie.plot, movie.scroe, "link")
        container.appendChild(this.div);

    }

    setupImage(img, img_description) {
        let image;

        image = document.createElement('img');
        image.setAttribute("class", "card-img-top");
        image.src = img;
        image.alt = img_description;

        return this.div.append(image)
    }

    setupMovieDescription(movieTitle, movieSynopsis, movieScore, movieLink) {
        let descriptionContainer, title, synopsis, score, link;
        descriptionContainer = document.createElement('div');
        descriptionContainer.setAttribute('class', 'card-body');
        title = document.createElement('h2');
        title.setAttribute('class', 'card-title')
        title.textContent = movieTitle;

        synopsis = document.createElement('p')
        synopsis.setAttribute('class', 'card-text')
        synopsis.textContent = movieSynopsis

        descriptionContainer.append(title, synopsis, this.setupButton())
        return this.div.append(descriptionContainer);
    }

    setupButton() {
        let button;

        button = document.createElement("a")
        button.setAttribute("class", "btn btn-primary")
        button.textContent = "Agregar a favoritos"

        return button;
    }


}
