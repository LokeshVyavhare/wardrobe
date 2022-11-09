const mongoose = require("mongoose");

const connect = async () => mongoose.connect();
module.exports = connect;
