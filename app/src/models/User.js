"use strict";

const bcrypt = require("bcrypt");
const UserStorage = require("./UserStorage");
const jwt = require("jsonwebtoken");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    try {
      const client = this.body;
      if (!client.id || client.id.includes(" "))
        return { success: false, message: "아이디를 확인해주세요." };
      if (!client.password || client.password.includes(" "))
        return { success: false, message: "비밀번호를 확인해주세요." };

      const { id, name, password } = await UserStorage.getUserInfo(client.id);
      const validPassword = await bcrypt.compare(client.password, password);
      if (id === client.id && validPassword) {
        // jwt.sign() 메소드: 토큰 발급
        const token = jwt.sign(
          {
            id,
            password,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "30m",
            issuer: process.env.APP_NAME,
          }
        );
        return {
          success: true,
          token,
          message: `${name}님 환영합니다!`,
        };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    } catch (error) {
      return { success: false, message: "존재하지 않는 아이디입니다." };
    }
  }

  async register() {
    const client = this.body;
    const { id, name, password, confirmPassword } = client;

    if (!id || id.includes(" "))
      return { success: false, message: "아이디를 확인해주세요." };
    if (!name || name.includes(" "))
      return { success: false, message: "이름을 확인해주세요." };
    if (!password || password.includes(" "))
      return { success: false, message: "비밀번호를 확인해주세요." };
    if (password !== confirmPassword)
      return { success: false, message: "비밀번호가 일치하지 않습니다." };

    try {
      const salt = await bcrypt.genSalt(10);
      client.password = await bcrypt.hash(client.password, salt);
      const { success } = await UserStorage.saveUserInfo(client);
      if (success) return { success: true, message: "가입을 축하합니다!" };

      return {
        success: false,
        message: "가입에 실패했습니다.",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}

module.exports = User;
