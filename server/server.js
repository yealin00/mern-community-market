require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("서버 실행 중");
});
