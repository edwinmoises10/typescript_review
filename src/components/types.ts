

//import



//fusionar tipos de datos |
let id : number | string = ""
///tipo de dato privado, no pasa nada que comparta nombre cuando usas type 
type id = number|string
let userID : id = ""

//tipos de datos para OBJ con ; 

type movie = {
    title : string;
    duration : number;
    hasOscar: boolean;
}
///con , , , 
const catMovie : movie = {
    title : "batman",
    duration : 12,
    hasOscar : true,
}

let myArray : (number|string|boolean)[]
myArray = [12, 'Juan', true, 12]
console.log(myArray)