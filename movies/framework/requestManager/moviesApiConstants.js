const OMDB_API_KEY = '586d3e4'

export function getOmdbPath(movie) {
    return `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${movie}&plot=full`
}