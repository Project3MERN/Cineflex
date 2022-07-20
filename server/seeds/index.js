const db = require("../config/connection");
const { User, Movie, Review } = require("../models")

db.once('open', async () => {
    await User.deleteMany({});
    await Movie.deleteMany({});
    await Review.deleteMany({});

    const userData = [{ username: 'username', email: 'email@email.com', password: 'password' }]

    const newUser = await User.collection.insert(userData)
    console.log(newUser)












    console.log("Database has been seeded!")
    process.exit(0)
})