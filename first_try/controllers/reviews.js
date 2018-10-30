// reviews.js

const express = require('express')
// const router = express.Router({ mergeParams: true })

const Review = require('../models/review')
// const Comment = require('../models/review')

module.exports = function(app) {

    // INDEX
    // sends object (review arrays) to views for rendering
    app.get('/', (req, res) => {
        // extend roote route from views
        // res.render('home', { msg: 'Hello World!' });

        // Find Review in db
        // .then Promise fufilled when data comes back from db
        Review.find().then(reviews => {
            //
            res.render('reviews-index', { reviews: reviews });
            //
        })
        .catch(err => {
            console.log(err);
        })
    })

    // NEW
    // recieves new reviews and sends it to handlebars for rendering
    app.get('/reviews/new', (req, res) => {

        // res.render('reviews-new', {});
        res.render('reviews-new');

    })

    // CREATE
    app.post('/reviews', (req, res) => {
        //
        //Create Review and direct it to root path
        Review.create(req.body).then((review) => {
            //console.log(req.body);
            console.log(review);
            // automatically redirect to reviews/:id
            res.redirect(`/reviews/${review._id}`);
            //
        }).catch((err) => {
            console.log(err.message);
        })
    })

    // SHOW
    // gives each review its own page and unique url path
    // :id - Url or Request Parameter (accessed with req.params)
    app.get('/reviews/:id', (req, res) => {
        //res.send('I\'m a review')
        //
        Review.findById(req.params.id).then(review => {
            // Comment.fine({reviewId: req.params.id}).then(comments => {
            res.render('reviews-show', { review: review });
            // res.render('reviews-show', { review: review, comments: comments});
            // })
        }).catch((err) => {
            //
            console.log(err.message);
            //
        })
    })

    // EDIT
    app.get('/reviews/:id/edit', (req, res) => {
        //
        Review.findById(req.params.id, function(err, review) {
            //
            res.render('reviews-edit', {review: review});
            //
        })
    })

    // UPDATE
    app.put('/reviews/:id', (req, res) => {
        //
        Review.findByIdAndUpdate(req.params.id, req.body).then(review => {
            //
            res.redirect(`/reviews/${review._id}`);
            //
        })
        .catch(err => {
            console.log(err.message);
        })
    })

    // DELETE
    app.delete('/reviews/:id', function(req, res) {
        //
        // Review.findOneAndDelete(req.params.id).then((review) => {
        Review.findByIdAndRemove(req.params.id).then((review) => {
            //
            // delete
            console.log(`Deleted review: ${review.title}`)
            res.redirect('/');

        }).catch((err) => {
            console.log(err.message);
        })
    })
    
}
