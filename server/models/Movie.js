const { Schema, model } = require("mongoose");


const movieSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        cast: [
            {
                type: String,
                required: true
            }
        ],
        releaseYear: {
            type: Number,
            minLength: 9,
            maxLength: 9
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

movieSchema.virtual('averageScore').get(function () {
    const totalScores = []
    const scores = this.reviews.score
    for (let i = 0; i < scores.length; i++) {
        totalScores.push(scores[i])
    }
    const averageScore = totalScores / scores
    return averageScore
})

const Movie = model("Movie", movieSchema);

module.exports = Movie;