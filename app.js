// rottenpotatoes

// express
const express = require('express')
const app = express()

// express handlebars
var exphbs = require('express-handlebars');

// body parser
const bodyParser = require('body-parser');

// connect to  mongo database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rottenpotatoes');

// add model to our review
const Review = mongoose.model('Review', {
    // attributes can be String, Number, or Date
    title: String,
    description: String,
    movieTitle: String
});

// arrays for reviews
let reviews = [
    { title: "Great Review" },
    { title: "Next Review" }
]

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ endcoded: true }));

//
app.get('/', (req, res) => {
    // extend roote route from views
    // res.render('home', { msg: 'Hello World!' });

    // Find Review in db
    // .then Promise fufilled when data comes back from db
    Review.find()
        .then(reviews => {
            res.render('reviews-index', { reviews: reviews });
        })
        .catch(err => {
            console.log(err);
        })
})

// index
// sends object (review arrays) to views for rendering
app.get('/reviews', (req, res) => {
    res.render('reviews-index', { reviews: reviews });
})

// recieves new reviews and sends it to handlebars for rendering
app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
})

// create
app.post('/reviews', (req, res) => {
    //console.log(req.body);
    //
    //Create Review and direct it to root path
    Review.create(req.body).then((review) => {
        console.log(review);
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    })
})

//server
app.listen(3000, () => {
    console.log('App listening on port 3000!')
})
