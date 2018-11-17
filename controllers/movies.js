// movies.js

// MOVIEDB API
const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb(process.env.MOVIEDB_KEY_V3)

module.exports = function(app) {

    app.get('/', (req, res) => {
        moviedb.miscNowPlayingMovies().then(response => {
            res.render('movies-index', { movies: response.results })
        }).catch(console.error)
    });

}
