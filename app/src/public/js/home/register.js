"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password"); // js는 camelCase로, HTML에서는 공백을 '-'(하이픈)으로 연결
const registerButton = document.querySelector("#button");

registerButton.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };
    let resultMsg = "";

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            }
            resultMsg = res.message;
        })
        .catch((err) => {
            console.error(new Error("[회원가입 에러]\n" + err));
        })
        .finally(() => {
            alert(resultMsg);
        });
}
