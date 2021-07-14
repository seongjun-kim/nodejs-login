"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const { id, password } = req.body;

        const users = UserStorage.getUsers("id", "password", "name");

        const response = {};
        if (users.id.includes(id)) {
            const index = users.id.indexOf(id);
            if (users.password[index] === password) {
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.message = "로그인 실패";
        return res.json(response);
    },
};

module.exports = {
    process,
    output,
};
