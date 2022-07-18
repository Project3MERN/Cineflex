const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas")
const db = require("./config/connection")

const PORT = process.env.PORT || 3001;

const { authMiddleware } = require("./utils/auth");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
}

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();

    server.authMiddleware({ app });

    db.once('open', () => {
        console.log(`API server running on port ${PORT}`)
        console.log(`Use graphql at http:localhost:${PORT}${server.graphqlPath}`)
    })
}

startApolloServer(typeDefs, resolvers)