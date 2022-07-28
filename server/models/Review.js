const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");
const dateFormat = require('../utils/dateFormat');

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
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        score: {
            type: Number,
            min: 0,
            max: 5,
            required: true
        },
        username: {
            type: String,
            required: true
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