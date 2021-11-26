export class MovieCardView {

    createHtmlSkeleton(movieId, divId) {
        let container = document.getElementById(divId)
        let idExist = document.getElementById(movieId)

        if (!idExist) {
            let divCard = document.createElement('div');
            let img = document.createElement('img')
            let divBody = document.createElement('div');
            let h2 = document.createElement('h2')
            let p = document.createElement('p')
            let a = document.createElement('a')

            divCard.setAttribute('class', 'card');
            divCard.setAttribute('id', movieId);
            img.setAttribute('class', 'card-img-top');
            divBody.setAttribute('class', 'card-body');
            h2.setAttribute('class', 'card-title');
            p.setAttribute('class', 'card-text');
            a.setAttribute('class', 'btn btn-primary favourite');

            divBody.append(h2, p, a)
            divCard.appendChild(img)
            divCard.appendChild(divBody)
            container.appendChild(divCard)
        }


    }

    createMovieCard(movie, divId) {
        this.createHtmlSkeleton(movie.id, divId)
        this.setupImage(movie);
        this.setupMovieDescription(movie);
        this.setupButton(movie);

    }

    setupImage(movie) {
        let container = document.getElementById(movie.id)
        let image = container.querySelector('img');
        image.src = movie.poster;
        image.alt = movie.title;
    }

    setupMovieDescription(movie) {
        let descriptionContainer, title, synopsis, score, link;
        let container = document.getElementById(movie.id)
        // descriptionContainer = container.querySelector('div');
        // descriptionContainer = document.getElementsByClassName('card-body');

        title = container.querySelector('h2');
        title.textContent = movie.title;

        synopsis = container.querySelector('p');
        synopsis.textContent = movie.plot;
    }

    setupButton(movie) {
        let container = document.getElementById(movie.id)
        this.button = container.querySelector(".favourite");
        this.button.setAttribute('id', movie.id);
        this.button.innerHTML = "Agregar a favoritos";
        return this.button;
    }

    destroyView() {
        let div = document.getElementsByClassName('card')
        if (div.length != 0) {
            div[0].remove();
        }
    }
}
