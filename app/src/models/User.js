"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const { id, name, password } = UserStorage.getUserInfo(client.id);

        if (id) {
            if (id === client.id && password === client.password) {
                return { success: true, message: `${name}님 환영합니다!` };
            }
            return { success: false, message: "비밀번호가 틀렸습니다." };
        }
        return { success: false, message: "존재하지 않는 아이디입니다." };
    }

    register() {
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

        const { success } = UserStorage.saveUserInfo(client);
        if (success) return { success: true, message: "가입을 축하합니다!" };
        return {
            success: false,
            message: "가입에 실패했습니다.",
        };
    }
}

module.exports = User;
