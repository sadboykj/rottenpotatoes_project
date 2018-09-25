// RottenPotatoes

// import reviews.js
const reviews = require('./controllers/reviews')
// express
// a light-weight web application framework
// organizes resources into an MVC architecture
const express = require('express')
// method-override for server to get "PUT" command
// since HTML doesnt have it
const methodOverride = require('method-override')
//
const app = express()
//
// express handlebars
// handlebars is templating engine
var exphbs = require('express-handlebars')
//
// body parser
// parse - to analyze into parts and roles
// bodyParser parses your request and converts
// the data into an easily extractable format
// imports req.body and req
const bodyParser = require('body-parser')
//
// connect to  mongo database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rottenpotatoes')
//
// add model to our review
const Review = mongoose.model('Review', {
    // attributes can be String, Number, or Date
    title: String,
    description: String,
    movieTitle: String
})

// // arrays for reviews
// let reviews = [
//     { title: "Great Review" },
//     { title: "Next Review" }
// ]

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// bodyParser update
// app.use(bodyParser.urlencoded({ endcoded: true }))
app.use(bodyParser.urlencoded({ extended: true }))
// overrides with POST
app.use(methodOverride('_method'))

// // INDEX
// // sends object (review arrays) to views for rendering
// app.get('/', (req, res) => {
//     // extend roote route from views
//     // res.render('home', { msg: 'Hello World!' });
//
//     // Find Review in db
//     // .then Promise fufilled when data comes back from db
//     Review.find()
//         .then(reviews => {
//             res.render('reviews-index', { reviews: reviews });
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })
//
// // NEW
// // recieves new reviews and sends it to handlebars for rendering
// app.get('/reviews/new', (req, res) => {
//     res.render('reviews-new', {});
// })
//
// // CREATE
// app.post('/reviews', (req, res) => {
//     //console.log(req.body);
//     //
//     //Create Review and direct it to root path
//     Review.create(req.body).then((review) => {
//         console.log(review);
//         // automatically redirect to reviews/:id
//         res.redirect(`/reviews/${review._id}`);
//     }).catch((err) => {
//         console.log(err.message);
//     })
// })
//
// // SHOW
// // gives each review its own page and unique url path
// // :id - Url or Request Parameter (accessed with req.params)
// app.get('/reviews/:id', (req, res) => {
//     //res.send('I\'m a review')
//     //
//     Review.findById(req.params.id).then((review) => {
//         res.render('reviews-show', { review: review });
//     }).catch((err) => {
//         console.log(err.message);
//     })
// })
//
// // EDIT
// app.get('/reviews/:id/edit', (req, res) => {
//     Review.findById(req.params.id, function(err, review) {
//         res.render('reviews-edit', {review: review});
//     })
// })
//
// // UPDATE
// app.put('/reviews/:id', (req, res) => {
//     Review.findByIdAndUpdate(req.params.id, req.body).then(review => {
//         res.redirect(`/reviews/${review._id}`)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })
// })
//
// // DELETE
// app.delete('/reviews/:id', function (req, res) {
//     Review.findByIdAndRemove(req.params.id).then((review) => {
//         // delete
//         console.log(`Deleted review: ${review.title}`)
//         res.redirect('/');
//     }).catch((err) => {
//         console.log(err.message);
//     })
// })

//server
app.listen(3000, () => {
    console.log('App listening on port 3000!')
});
