// HIDDEN
const dotenv = require('dotenv').config();

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
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rottenpotatoes',  { useNewUrlParser: true })

// BODY-PARSER
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ROUTERS
const reviews  = require('./controllers/reviews')(app)
const comments = require('./controllers/comments')(app)
const movies   = require('./controllers/movies')(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Boys, were up and running')
})

module.exports = app;
