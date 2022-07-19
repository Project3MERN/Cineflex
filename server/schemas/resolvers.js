const { User, Movie, Review, Comment } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth")

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        loggedInUser: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                return userData
            } else {
                return AuthenticationError
            }
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
        movie: {

        },
        review: {

        }
    },
    Mutation: {
        login: async (parents, { email, password }) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw new AuthenticationError("This user does not exist in the database")
            }
            const checkPassword = await user.isCorrectPassword(password)
            if (!checkPassword) {
                throw new AuthenticationError("Incorrect password entered, please try again!")
            }
            const token = signToken(user)
            return { token, user }
        },
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return { token, user }
        }
    }
}

module.exports = resolvers;