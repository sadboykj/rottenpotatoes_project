// EXPRESS
const express = require('express')
const methodOverride = require('method-override')
const app = express()
app.use(methodOverride('_method'))

// HANDLEBARS - views
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// MONGOOSE - database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rottenpotatoes')

// BODY-PARSER
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// METHOD-OVERRIDE

const port = 3000

// OBJECTS
// let reviews = [
//     { title: "Unexpected Best Movie Ever",
//       movieTitle: "The Room" },
//     { title: "Live-Action Anime Should Be Illegal",
//       movieTitle: "The Last Airbender"}
// ]
const Review = mongoose.model('Review', {
    title: String,
    movieTitle: String,
    rating: Number,
    description: String
})

//ROUTERS

// app.get('/', (req, res) => {
//     // res.send('Lets get this bread')
//     res.render('home', { msg: 'Handlebars enable us to get bread'})
// })

// INDEX
app.get('/', (req, res) => {
    Review.find()
    .then(reviews => {
        res.render('reviews-index', { reviews: reviews })
    })
    .catch(err => {
        console.log('nah dawg no reviews here')
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

app.listen(port, () => {
    console.log('Boys, were up and running')
})
