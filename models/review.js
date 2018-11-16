// review.js

const mongoose = require('mongoose')
const Comment  = require('./comment')
// echo $NODE_PATH
// which npm
// export NODE_PATH='/usr/local/bin/node_modules'

const Review = mongoose.model('Review', {
    title: String,
    movieTitle: String,
    description: String,
    rating: Number
});

module.exports = Review;

// let reviews = [
//     { title: "Unexpected Best Movie Ever",
//       movieTitle: "The Room" },
//     { title: "Live-Action Anime Should Be Illegal",
//       movieTitle: "The Last Airbender"}
// ]
