const mongoose = require('mongoose');

const URI = "mongodb://ammar:ammar22@cluster0-shard-00-00.i3u8p.mongodb.net:27017,cluster0-shard-00-01.i3u8p.mongodb.net:27017,cluster0-shard-00-02.i3u8p.mongodb.net:27017/course?ssl=true&replicaSet=atlas-hixg6x-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected..');
}

module.exports = connectDB;