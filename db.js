const mongoose = require('mongoose');

const mongoDBConnected = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/food_app',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("connected to mongoDB");
    
    }).catch((err)=>{
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = mongoDBConnected;

