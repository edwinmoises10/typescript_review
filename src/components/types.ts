//import

//fusionar tipos de datos |
let id: number | string = "";
///tipo de dato privado, no pasa nada que comparta nombre cuando usas type
type id = number | string;
let userID: id = "";

//tipos de datos para OBJ con ;

// type movie = {
//   title: string;
//   duration: number;
//   hasOscar: boolean;
// };
///con , , ,
const catMovie: movie = {
  title: "batman",
  duration: 12,
  hasOscar: true,
};

let myArray: (number | string | boolean)[];
myArray = [12, "Juan", true, 12];
console.log(myArray);

type stateLoading = "loading";
type stateError = "error";

let loading: stateLoading = "loading";
let error: stateError = "error";

type state = stateLoading | stateError;

let state: state = "loading";
console.log("State = ", state);

///intersecciones

type movie = {
  title: string;
  duration: number;
  hasOscar: boolean;
};

type book = {
  title: string;
  pages: number;
};

type bookAdaptation = movie & book; // tipo de dato con toda la info de movie y book

let harryPotter: bookAdaptation = {
  title: "prueba",
  duration: 120,
  hasOscar: true,
  pages: 400,
};
console.log('harryPotter = ', harryPotter)


type numString = number & string
let a : numString 