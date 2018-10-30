// EXPRESS
const express = require('express')
const app = express()

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
    rating: Number
})


//ROUTERS

// app.get('/', (req, res) => {
//     // res.send('Lets get this bread')
//     res.render('home', { msg: 'Handlebars enable us to get bread'})
// })

app.get('/', (req, res) => {
    // res.render('reviews-index', { reviews: reviews });
    Review.find()
    .then(reviews => {
        res.render('reviews-index', { reviews: reviews })
    })
    .catch(err => {
        console.log('what you doin dawg')
    })
})

app.listen(port, () => {
    console.log('Boys, were up and running')
})
