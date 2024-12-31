const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();


exports.dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Error while connecting to database" , error);
        process.exit(1);
    })
}