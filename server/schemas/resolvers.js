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

    }
}

module.exports = resolvers;