"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const accessLogStream = require("./src/config/log");
const { swaggerUi, specs } = require("./src/config/swagger");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
// use: 미들웨어(module)를 등록해주는 메서드
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // URL 통해 전달되는 데이터에 한글/공백 등의 문자도 정상 인식되도록
app.use(express.static(`${__dirname}/src/public`)); // 이미지/CSS/JS 파일과 같은 '정적 파일을 활용하기 위해' Express 기본 제공 미들웨어 함수(static) 사용
app.use(morgan("dev")); // 개발환경 콘솔 전용 로그. 별도 파일 저장 없음.
app.use(morgan("common", { stream: accessLogStream })); // log 폴더 내 파일(access.log)로 기록
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use("/", home);

module.exports = app;
