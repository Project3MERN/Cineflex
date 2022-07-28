const faker = require('faker');

const db = require('../config/connection');
const { User, Movie, Review } = require('../models');
const movieData = [
    {
        name: "Shrek The Third"
    },
    {
        name: "Interstellar"
    },
    {
        name: "Batman: The Dark Knight"
    },
    {
        name: "Goodfellas"
    },
    {
        name: "Avengers: Infinite War"
    },
    {
        name: "Spider-Man: No Way Home"
    },
    {
        name: "The Joker"
    },
    {
        name: 'Lord of the Rings'
    },
    {
        name: "Revenge of the Sith"
    },
    {
        name: "Inception"
    }
]

db.once('open', async () => {
    await Review.deleteMany();
    await Movie.deleteMany();
    await User.deleteMany();

    // create users
    const userData = [];

    for (let i = 0; i < 10; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    };

    const createdUsers = await User.collection.insertMany(userData);

    // create movies
    const createdMovies = await Movie.collection.insertMany(movieData);


    // create reviews
    let createdReviews = [];
    for (let i = 0; i < 50; i++) {
        // create random review text
        const reviewText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        // pick random user for review
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { username, _id: userId } = createdUsers.ops[randomUserIndex];

        // pick a random movie for review
        const randomMovieIndex = Math.floor(Math.random() * createdMovies.ops.length);
        const { _id: movieId } = createdMovies.ops[randomMovieIndex];

        // create a random score between 0 and 5
        const score = Math.floor(Math.random() * 5);

        // create review
        const createdReview = await Review
            .create(
                { reviewText, score, username }
            )

        // update review
        const updatedReview = await Review.updateOne(
            { _id: createdReview._id },
            { $push: { movie: movieId } }
        )

        // update user
        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { reviews: createdReview._id } }
        );

        // update movie
        const updatedMovie = await Movie.updateOne(
            { _id: movieId },
            { $push: { reviews: createdReview._id } }
        )
    }

    console.log('Database seeded!');
    process.exit(0);
})