const mongoose = require("mongoose");
module.exports = {
  connect: () => {
    mongoose.connect(process.env.MONGO_URL);

    // Listen for the connection event and log the status
    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB database");
    });

    // Listen for the error event and log the error
    mongoose.connection.on("error", () => {
      console.error("Failed to connect to MongoDB database:");
    });
  },
};
