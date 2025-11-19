

//Se puede usar ("root") as HTMLElement ò ("root")! (TS Infiere el tipo)
//Recomendado el bloque if actua como guardia de tipo

// let username: string = 'Hello Moises'
// const resultDOM =  document.getElementById("root")
// if(resultDOM){
//     resultDOM.innerHTML= `<h2> ${username} </h2>`
// }else{
//     console.log("DOM Not Found")
// }

//tipo de datos 

let movie : string = "Batman"
let duration : number = 200
let hasOscar :boolean = true

movie = "Batman - The Dark Kning"
duration = 240
hasOscar = false

console.log(movie, duration, hasOscar);
