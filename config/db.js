const mongoose = require('mongoose');
const colors = require('colors')
const connectDB = async () => {
    try {
        const connect =await mongoose.connect(process.env.mongodb_compass_url)
        console.log(`connected to mongodb at ${connect.connection.host}.`.bgMagenta.bgWhite);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
};

module.exports = connectDB;
