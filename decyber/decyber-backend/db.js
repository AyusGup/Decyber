const mongoose = require('mongoose');

//___MongoDb_Compass___//
// const mongoURI = "mongodb://localhost:27017/decyber-db";

//___MongoDb_Atlas___//
require('dotenv').config();
const connectToMongo = async () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to Mongo Successfuly");
    }).catch((err) => console.log(err));
}
module.exports = connectToMongo;