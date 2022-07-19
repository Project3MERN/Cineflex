const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment")

const reviewSchema = new Schema(
    {
        movie: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ],
        reviewText: {
            type: String,
            required: 'You need to leave a review',
            minLength: 1,
            maxLength: 250
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        score: {
            type: Number,
            minLength: 0,
            maxLength: 5
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const Review = model("Review", reviewSchema);

module.exports = Review