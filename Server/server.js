require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const userRouter = require("./features/user/user.routes");
const PORT = process.env.port || 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

app.listen(PORT, async () => {
  await connect();
  console.log("server running");
});
