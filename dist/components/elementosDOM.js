"use strict";
console.log("DOM");
///query selector 
const h1 = document.querySelector("h1");
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);
const title = document.querySelector(".title");
console.log(title.textContent);
const usernameDOM = document.querySelector("#username");
console.log(usernameDOM.placeholder);
