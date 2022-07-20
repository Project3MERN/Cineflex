const { Schema, model } = require("mongoose");


const movieSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
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