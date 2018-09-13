// rottenpotatoes

//express
const express = require('express')
const app = express()

// express handlebars
var exphbs = require('express-handlebars');

// arrays for reviews
let reviews = [
    { title: "Great Review" },
    { title: "Next Review" }
]

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//
app.get('/', (req, res) => {
    // extend roote route from views
    res.render('home', { msg: 'Hello World!' });
})

// index
// sends object (review arrays) to views for rendering
app.get('/reviews', (req, res) => {
    res.render('reviews-index', { reviews: reviews });
})

//server
app.listen(3000, () => {
    console.log('App listening on port 3000!')
})
