// reviews.js

const Review = require('../models/review')
module.exports = function(app) {

    // INDEX
    app.get('/', (req, res) => {
        Review.find({})
            .then(reviews => {
                res.render('reviews-index', { reviews: reviews })
        })
        .catch(err => {
            console.log(err)
        })
    })

    // NEW
    app.get('/reviews/new', (req, res) => {
        res.render('reviews-new', {})
    })

    // CREATE
    app.post('/reviews', (req, res) => {
        Review.create(req.body).then((review) => {
            // console.log(req.body)
            console.log(review)
            res.redirect(`/reviews/${review._id}`)
        }).catch((err) => {
            // console.log(err.message);
            console.log('this review aint it chief')
        })
    })

    // SHOW
    app.get('/reviews/:id', (req, res) => {
        // res.send('Yea wassup brodie I\'m right here')
        Review.findById(req.params.id).then((review) => {
            res.render('reviews-show', { review: review })
        }).catch((err) => {
            // console.log(err.message);
            console.log('this review aint it chief')
        })
    })

    // EDIT
    app.get('/reviews/:id/edit', (req, res) => {
        Review.findById(req.params.id, function(err, review) {
            res.render('review-edit', {review: review })
        })
    })

    // UPDATE
    app.put('/reviews/:id', (req, res) => {
        Review.findByIdAndUpdate(req.params.id, req.body)
        .then(review => {
            res.redirect(`/reviews/${review._id}`)
        }).catch(err => {
            // console.log(err.message);
            console.log('this edit update aint it chief')
        })
    })

    // DELETE
    app.delete('/reviews/:id', function (req, res) {
        console.log('fudatbihya')
        Review.findByIdAndRemove(req.params.id).then((review) => {
            res.redirect('/')
        }).catch((err) => {
            // console.log(err.message);
            console.log('chief said not to delete the poor boi')
        })
    })

}

// mocha
// - test runner
//
// chai
// - assertion library
// - syntactic sugar - makes writing tests better.
//
// chai-http
// - helper test library
// - methods for making http requests in tests
