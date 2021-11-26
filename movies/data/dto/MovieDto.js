export class MovieDto {
    constructor(title, year, poster, actors, country, director, genre, language, plot, runtime, score, id) {
        this.title = title;
        this.year = year;
        this.poster = poster;
        this.actors = actors;
        this.country = country;
        this.director = director;
        this.genre = genre;
        this.language = language;
        this.plot = plot;
        this.runtime = runtime;
        this.score = score;
        this.id = id;
    }

}