require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 
    mongoose.connect("mongodb+srv://questionin:questionin@atlascluster.rhb4ikg.mongodb.net/questionIn?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected ');
    }).on('err',()=> {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;