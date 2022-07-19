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
        description: String
        cast: [String]
        releaseYear: Int
        reviews: [Review]
    }

    type Review {
        movie: [Movie]
        reviewText: String
        createdAt: String
        score: Int
        comments: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
        movie: Movie
        review: Review
    }

    type Mutation {
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs