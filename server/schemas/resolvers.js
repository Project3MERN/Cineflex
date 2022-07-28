const { User, Movie, Review } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        allUsers: async () => {
            return User.find().populate('reviews')
        },
        loggedInUser: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .populate({
                        path: 'reviews',
                        populate: {
                            path: 'movie',
                            model: 'Movie'
                        }
                    })
                return userData
            }
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('reviews')
        },
        allMovies: async () => {
            const all = await Movie.find().populate('reviews')
            return all
        },
        allReviews: async () => {
            const all = Review.find()
                .populate('movie')
                .populate('comments')
                .sort({ createdAt: -1 });
            return all
        },
        movie: async (parent, { _id }) => {
            return Movie.findOne({ _id })
                .populate('reviews').sort({ createdAt: -1 })
        },
        review: async (parent, { _id }) => {
            return Review.findOne({ _id }).populate('movie').populate('comments').sort({ createdAt: -1 })
        },
        checkout: async (parent, args, context) => {
            const line_items = [];
            const url = new URL(context.headers.referer).origin;

            const product = await stripe.products.create({
                name: "Donation",
                description: "A generous donation!",
            });

            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: args.donation * 100,
                currency: 'usd'
            })

            line_items.push({
                price: price.id,
                quantity: 1
            })

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
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
                updateMovie(review, movie)
            }
            async function updateUser(review) {
                console.log(review)
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { reviews: review._id } },
                    { new: true }
                )
                return review
            }
            // we also want to update the movie Model to include the newly created review, so it can be accessed for the individual Movie page
            async function updateMovie(review, movie) {
                await Movie.findOneAndUpdate(
                    { _id: movie._id },
                    { $push: { reviews: review._id } },
                    { new: true }
                )
                return review
            }
            if (context.user) {
                const movie = await Movie.findOne({ name: args.movie })
                if (!movie) {
                    const newMovie = await Movie.create({ name: args.movie })
                    createReview(newMovie)
                } else {
                    createReview(movie)
                }
            } else {
                throw new AuthenticationError("User must be logged in to leave a review")
            }
        },
        addComment: async (parent, { reviewId, commentBody }, context) => {
            if (context.user) {
                const addingComment = await Review.findOneAndUpdate(
                    { _id: reviewId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true, populate: { path: 'movie' } }
                )
                return addingComment
            }
            throw new AuthenticationError("User must be logged in to leave comments!")
        },
        removeReview: async (parent, args, context) => {
            if (context.user) {
                const reviewData = await Review.findOne({ _id: args.reviewId })
                if (reviewData) {
                    await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $pull: { reviews: args.reviewId } },
                        { new: true }
                    )
                    await Movie.findOneAndUpdate(
                        { _id: reviewData.movie },
                        { $pull: { reviews: args.reviewId } },
                        { new: true }
                    )
                    await Review.findOneAndDelete(
                        { _id: args.reviewId }
                    )
                    return "Review has been deleted"
                } else {
                    console.log("This review does not exist")
                }
            } else {
                throw new AuthenticationError("User must be logged in to leave comments!")
            }
        },
        removeComment: async (parent, { commentId, reviewId }, context) => {
            console.log(commentId)
            console.log(reviewId)
            if (context.user) {
                const removingComment = await Review.findOneAndUpdate(
                    { _id: reviewId },
                    { $pull: { comments: { _id: commentId } } },
                    { new: true, runValidators: true }
                )
                console.log(removingComment)
                return removingComment
            } else {
                throw new AuthenticationError("User must be logged in to use this functionality")
            }
        }
    }
}

module.exports = resolvers;