"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };
    alert(`id: ${req.id}, pw: ${req.password}`);
}
