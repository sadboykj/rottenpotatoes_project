// RottenPotatoes
//
// EXPRESS //
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
//
// DATABASE //
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rotten-potatoes", {useNewUrlParser: true});
//
// ROUTER //
const reviews = require('./controllers/reviews')
//
// HANDLEBAR SETUP //
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')
//
// MIDDLEWARE and ROUTE CONFIGURATION //
// app.use
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(methodOverride('_method'))
// app.use
// app.use
// app.use
//
// SERVER //
app.listen(3000, () => {
    console.log('App listening on port 3000!')
});

module.exports = app;

// NOTES //
//
// EXPRESS //
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
//
// DATABASE //
//
// connect to mongo database
// mongoose.connect('mongodb://localhost/rottenpotatoes')
//
//
// ROUTER //
//
// home
//
// reviews
// let reviews = [
//     { title: "Great Review" },
//     { title: "Next Review" }
// ]
// Above is a route to
// the controller -
// who will then direct it to models
//
// comments
// movies
//
//
// HANDLEBAR SETUP //
//
// express handlebars
// handlebars is templating engine
//
//
// MIDDLEWARE and ROUTE CONFIGURATION //
//
// bodyParser update
// app.use(bodyParser.urlencoded({ endcoded: true }))
// app.use(methodOverride('_method'))
// overrides with POST
//
//
// SERVER //
//
// app.listen(process.env.PORT || 3000, () => {
//     console.log("App listening on port 3000");
//
