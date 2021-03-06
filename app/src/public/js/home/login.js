"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#button");

loginButton.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
  let resultMsg = "";

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      }
      resultMsg = res.message;
    })
    .catch((err) => {
      resultMsg = "[로그인 에러]\n" + err;
    })
    .finally(() => {
      alert(resultMsg);
    });
}
