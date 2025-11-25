
console.log("DOM")

///query selector 

const h1 = document.querySelector("h1")
console.log(h1?.textContent);

const title = document.querySelector(".title") as HTMLHeadingElement

console.log(title.textContent);

const usernameDOM = document.querySelector("#username") as HTMLInputElement
console.log(usernameDOM.placeholder);
