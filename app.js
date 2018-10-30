// EXPRESS
const express = require('express')
const app = express()

// HANDLEBARS - views
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// BODY-PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

// list of objects
let reviews = [
    { title: "Unexpected Best Movie Ever",
      movieTitle: "The Room" },
    { title: "Live-Action Anime Should Be Illegal",
      movieTitle: "The Last Airbender"}
]

//ROUTERS

// app.get('/', (req, res) => {
//     // res.send('Lets get this bread')
//     res.render('home', { msg: 'Handlebars enable us to get bread'})
// })

app.get('/', (req, res) => {
    res.render('reviews-index', { reviews: reviews });
})

app.listen(port, () => {
    console.log('Boys, were up and running')
})
