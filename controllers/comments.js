// comments.js

const Comment = require('../models/comment')
module.exports = (app) => {

    // CREATE
    app.post('/reviews/comments', (req, res) => {
        Comment.create(req.body).then(comment => {
            res.redirect(`/reviews/${comment.reviewId}`)
            console.log(comment)
        }).catch((err) => {
            console.log("created comment wasn't chief-certified :/")
        })
    })

    // DELETE
    app.delete('/reviews/comments/:id', function (req, res) {
        console.log("DELETED comment")
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.redirect(`/reviews/${comment.reviewId}`)
        }).catch((err) => {
            console.log("cheif couldnt let you delete this yet")
        })
    })

}
