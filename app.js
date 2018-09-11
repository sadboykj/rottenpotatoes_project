// rottenpotatoes

//express
const express = require('express')
const app = express()

// express handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//
app.get('/', (req, res) => {
    // extend roote route from views
    res.render('home', { msg: 'Hello World!' });
})

//server
app.listen(3000, () => {
    console.log('App listening on port 3000!')
})
