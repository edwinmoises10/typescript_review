"use strict";
// genericos 
// function getFirstElement (array: number[]){
//     return array[0]
// }
function getFirstElement(array) {
    return array[0];
}
const numArr = [10, 20, 30];
const firstNum = getFirstElement(numArr);
console.log(firstNum);
const strArr = ["a", "b", "c"];
let firstStr = getFirstElement(strArr);
console.log(firstStr);
const usernameDom = document.querySelector('#username');
console.log(usernameDom === null || usernameDom === void 0 ? void 0 : usernameDom.placeholder);
