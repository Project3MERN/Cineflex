const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            minLength: 8
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ],
        favorites: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ],
        watchedList: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ],
        wishList: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }

    next();
})

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User;