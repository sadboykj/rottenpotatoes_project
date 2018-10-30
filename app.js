// Express
const express = require('express')
const app = express()

// Handlebars - views
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body-Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

app.get('/', (req, res) => {
    // res.send('Lets get this bread')
    res.render('home', { msg: 'Handlebars enable us to get bread'})
})

app.listen(port, () => {
    console.log('Boys, were up and running')
})
