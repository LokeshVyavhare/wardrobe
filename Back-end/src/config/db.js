const mongoose = require("mongoose");
const DB_URL = process.env.MONGODB_URL

const connect = async () => mongoose.connect(DB_URL);
module.exports = connect;
