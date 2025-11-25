//functions

function sum(n1: number, n2: number) {
  return n1 + n2;
}

let resultSum = sum(2, 2);
console.log("Sum", resultSum);

const toUpper = (str: string) => str.toUpperCase();

let str = toUpper("Adrian lopez");
console.log("STR", str);

///tipo de dato vacio void

function sayHello() {
    console.log("Hello");
    
}
sayHello()