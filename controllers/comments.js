// comments.js

const Comment = require('../models/comment')
module.exports = (app) => {

    // NEW
    app.post('reviews/comments', (req, res) => {
        Comment.create(req.body).then(comment => {
            res.redirect(`/reviews/${comment.reviewId}`)
            console.log(comment)
        }).catch((err) => {
            console.log("comment wasn't chief-certified :/")
        })
    })

}
