// movies.js

// MOVIEDB API
const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb(process.env.MOVIEDB_KEY_V3)

module.exports = function(app) {

    // app.get('/', (req, res) => {
    //     moviedb.miscNowPlayingMovies().then(response => {
    //         res.render('movies-index', { movies: response.results })
    //     }).catch(console.error)
    // });
    app.get('/', (req, res) => {
        moviedb.miscNowPlayingMovies().then(movies => {
            moviedb.genreMovieList().then(genres => {
                res.render('movies-index', {
                    movies: movies.results,
                    genres: genres.results,
                    helpers: {
                        compare: function(genreId, movieGenres, options) {
                            if (movieGenres.includes(genreId)) {
                                return options.fn(this)
                            } else {
                                return options.inverse(this)
                            }
                        }
                    }
                })
            })
        })
    })

}
