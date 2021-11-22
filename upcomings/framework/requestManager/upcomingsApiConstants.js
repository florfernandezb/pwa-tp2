const TMDB_API_KEY = '3a23bc894bc67c1ef9926afb3de6cd12'

export function getUpcomingsPath() {
    return `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
}