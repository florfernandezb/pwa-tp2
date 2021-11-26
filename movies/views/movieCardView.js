// import { OnClickListener } from "./onClickListener";

export class MovieCardView {

    createHtmlSkeleton(movieId, divId) {
        let container = document.getElementById(divId)

        if (divId == 'favourites-container') {
            let divCard = document.createElement('div');
            let img = document.createElement('img');
            let divBody = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let score = document.createElement('p');
            let small = document.createElement('small')
            let a = document.createElement('a');

            divCard.setAttribute('class', 'card');
            divCard.setAttribute('id', movieId);
            img.setAttribute('class', 'card-img-top');
            h2.setAttribute('class', 'card-text score');
            divBody.setAttribute('class', 'card-body');
            h2.setAttribute('class', 'card-title');
            p.setAttribute('class', 'card-text');
            score.setAttribute('class', 'card-text');
            small.setAttribute('class', 'text-muted score')
            a.setAttribute('class', 'btn btn-primary cardBtn');

            score.appendChild(small)

            divBody.append(h2, p, score, a);
            divCard.appendChild(img);
            divCard.appendChild(divBody);
            container.appendChild(divCard);
        }
    }

    createMovieCard(movie, divId) {
        // let idExist = document.getElementById(movie.id)

        if(divId == 'movie-container'){
            let container = document.getElementById(divId);
            console.log(container.children[0])
            container.children[0].setAttribute('id', movie.id)
        }

        this.createHtmlSkeleton(movie.id, divId);
        this.setupImage(movie);
        this.setupMovieDescription(movie);
        this.setupButton(movie, divId);

    }

    setupImage(movie) {
        let container = document.getElementById(movie.id);
        let image = container.querySelector('img');
        image.src = movie.poster;
        image.alt = movie.title;
    }

    setupMovieDescription(movie) {
        let title, synopsis, score, link;
        let container = document.getElementById(movie.id);

        title = container.querySelector('h2');
        title.textContent = movie.title;

        synopsis = container.querySelector('p');
        synopsis.textContent = movie.plot;

        score = container.querySelector('.score');
        score.textContent = `score ${movie.score}`;

    }

    setupButton(movie, divId) {
        let container = document.getElementById(movie.id);
        let button = container.querySelector('a');
        button.setAttribute('id', `button-${movie.id}`);

        switch (divId) {
            case "movie-container":
                button.setAttribute('class', 'btn btn-primary favourite cardBtn');
                button.innerHTML = "Agregar a favoritos";
                return button;
            case 'favourites-container':
                button.setAttribute('class', "btn btn-danger delete cardBtn");
                button.innerHTML = "Quitar de favoritos";
                return button;
        }
    }

    deleteElement(id) {
        let card = document.getElementById(id)
        if(card) {
            card.remove();
        }
    }

    destroyView() {
        let div = document.getElementsByClassName('card');
        if (div.length != 0) {
            div[0].remove();
        }
    }
}
