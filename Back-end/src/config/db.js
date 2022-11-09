const mongoose = require("mongoose");

const connect = async () => mongoose.connect(`mongodb://127.0.0.1:27017/yoox`);
module.exports = connect;
