const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        reviews: [Review]
        favorites: [Movie]
        watchedList: [Movie]
        wishList: [Movie]
    }

    type Movie {
        _id: ID
        name: String
        reviews: [Review]
        averageScore: Float
    }

    type Review {
        _id: ID
        movie: [Movie]
        reviewText: String
        createdAt: String
        score: Float
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
        createdAt: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        allUsers: [User]
        loggedInUser: User
        user(username: String!): User
        allMovies: [Movie]
        allReviews: [Review]
        movie(name: String!): Movie
        review(_id: ID!): Review
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addReview(movie: String!, reviewText: String!, score: String!): Review
        addComment(reviewId: ID!, commentBody: String!): Review
    }
`

module.exports = typeDefs