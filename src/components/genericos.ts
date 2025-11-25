
// genericos 

// function getFirstElement (array: number[]){
//     return array[0]
// }

function getFirstElement<T>(array: T[]){ //generico <T> no denotar un valor exacto sino que se puede usar varios tipos number 
    return array[0]
}

const numArr = [10,20,30]
const firstNum = getFirstElement<number>(numArr)
console.log(firstNum);


const strArr = ["a", "b", "c"]
let firstStr = getFirstElement(strArr)
console.log(firstStr);

const usernameDom = document.querySelector<HTMLInputElement>('#username')
console.log(usernameDom?.placeholder);


