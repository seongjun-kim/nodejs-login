"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

app.set("views", "./views");
app.set("view engine", "ejs");
// use: 미들웨어(module)를 등록해주는 메서드
app.use("/", home);

module.exports = app;
