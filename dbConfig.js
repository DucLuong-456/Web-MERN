const mongoose = require('mongoose')
const URI =process.env.MONGODB_URL;
async function connect() {
    try {
      await mongoose.connect(URI,
      );
      console.log("Connected to mongodb");
    } catch (error) {
      console.log(error);
    }
  }
  module.exports = { connect };