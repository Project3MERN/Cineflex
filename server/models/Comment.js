const { Schema } = require("mongoose")

const commentSchema = new Schema(
    {
        commentBody: {
            type: String,
            required: true,
            maxLength: 250
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = commentSchema