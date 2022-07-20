const db = require("../config/connection");
const { User, Movie, Review } = require("../models")

db.once('open', async () => {
    await User.deleteMany({});
    await Movie.deleteMany({});
    await Review.deleteMany({});












    console.log("Database has been reset")
    process.exit(0)
})