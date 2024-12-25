const mongoose = require("mongoose");

const {CONNECTION_STRING} = require("../utils/constants");
const connectDB = async()=>{
   await mongoose.connect(CONNECTION_STRING);
}

module.exports = {connectDB};