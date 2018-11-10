// comments.js

const Comment = require('../models/comment')
module.exports = (app) => {

    // NEW
    app.post('reviews/comments', (req, res) => {
        res.send('reviews comment')
    })

}
