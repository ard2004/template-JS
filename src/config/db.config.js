const mongoose = require("mongoose");
exports.connectDB = () => {
    mongoose.connect(`${process.env.MONGO_DB}`)
        .then(() => {
        console.log(" success: connected to DB!");
    })
        .catch((error) => {
        console.log(error);
    });
};
