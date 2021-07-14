"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
// use: 미들웨어(module)를 등록해주는 메서드
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // URL 통해 전달되는 데이터에 한글/공백 등의 문자도 정상 인식되도록
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;
