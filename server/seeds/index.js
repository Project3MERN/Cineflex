const db = require("../config/connection");
const { User, Movie, Review } = require("../models")

db.once('open', async () => {
    await User.deleteMany({});
    await Movie.deleteMany({});
    await Review.deleteMany({});

    const userData = [];

    userData.push({ username: 'charanvir', email: 'charanvir@gmail.com', password: 'charanvir' })

    const newUser = await User.collection.insertMany(userData)












    console.log("Data has been seeded")
    process.exit(0)
})