// RottenPotatoes
//
// Express
//
// express
// a light-weight web application framework
// organizes resources into an MVC architecture
//
// app
//
// body parser
// parse - to analyze into parts and roles
// bodyParser parses your request and converts
// the data into an easily extractable format
// imports req.body and req
//
// method-override
// for server to get "PUT" command
// since HTML doesnt have it
//
// express handlebars
// handlebars is templating engine
//
// import reviews.js
//
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
//
// db
// connect to mongo database
// 
//
//
//


const reviews = require('./controllers/reviews')


var exphbs = require('express-handlebars')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rottenpotatoes')

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

module.exports = app;
//server
app.listen(3000, () => {
    console.log('App listening on port 3000!')
});
