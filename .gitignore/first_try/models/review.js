const mongoose = require("mongoose")
//
// add model to our review
// const Review = mongoose.model('Review', {
//     // attributes can be String, Number, or Date
//     title: String,
//     description: String,
//     movieTitle: String
// })
//
module.exports = mongoose.model("Review", {
    //
    title: String,
    movieTitle: String,
    movieId: { type: String, required: true },
    review: String,
    rating: Number
    //
});
