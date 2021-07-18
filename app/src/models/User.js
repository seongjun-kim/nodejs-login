"use strict";

const UserStorage = require("./UserStorage");

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

      if (id === client.id && password === client.password) {
        return { success: true, message: `${name}님 환영합니다!` };
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
