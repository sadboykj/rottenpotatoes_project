// review.js

const mongoose = require('mongoose')

const Review = mongoose.model('Review', {
    title: String,
    movieTitle: String,
    description: String,
    rating: Number
})

module.exports = Review;

// let reviews = [
//     { title: "Unexpected Best Movie Ever",
//       movieTitle: "The Room" },
//     { title: "Live-Action Anime Should Be Illegal",
//       movieTitle: "The Last Airbender"}
// ]
