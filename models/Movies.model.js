const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
    },

    director: {
        type: String,
    },

    stars: {
        type: [String],
    },

    image: {
        type: String,
    },

    description: {
        type: String,
    },

    showtimes: {
        type: [String],
    },
})

const Movie = mongoose.model('Movie', moviesSchema)

module.exports = Movie