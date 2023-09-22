const mongoose = require('mongoose');

const mongoDBConnected = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/food_app', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB");

        const collection_data = mongoose.connection.db.collection("food_item");

        collection_data.find({}).toArray((err, data) => {
            if (err) {
                console.error("Error retrieving data from 'food_item' collection:", err);
            } else {
                console.log(data);
            }
            
            // Close the MongoDB connection when done.
            mongoose.connection.close();
        });

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

module.exports = mongoDBConnected;
