const { User, Movie, Review, Comment } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        allUsers: async () => {
            return User.find()
        },
        loggedInUser: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                return userData
            }
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
        allMovies: async () => {
            const all = await Movie.find();
            console.log(all)
            return all
        },
        allReviews: async () => {
            const all = Review.find()
                .populate('movie')
            return all
        },
        movie: async (parent, { name }) => {
            return Movie.findOne({ name })
                .populate('reviews')
        },
        review: async (parent, { _id }) => {
            return Review.findOne({ _id })
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
        },
        addReview: async (parent, args, context) => {
            async function createReview(movie) {
                const review = await Review.create({ username: context.user.username, reviewText: args.reviewText, score: args.score, movie: movie })
                updateUser(review)
            }
            async function updateUser(review) {
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { reviews: review._id } },
                    { new: true }
                )
                return review
            }
            console.log(args)
            console.log(args.movie)
            if (context.user) {
                const movie = await Movie.findOne({ name: args.movie })
                if (!movie) {
                    const newMovie = await Movie.create({ name: args.movie })
                    createReview(newMovie)
                } else {
                    createReview(movie)
                }
                console.log()
            } else {
                throw new AuthenticationError("User must be logged in to leave a review")
            }
        }
    }
}

module.exports = resolvers;