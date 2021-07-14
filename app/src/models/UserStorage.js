"use strict";

class UserStorage {
    static #users = {
        id: ["aaa", "bbb", "ccc"],
        password: ["1", "2", "3"],
        name: ["A", "B", "C"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
