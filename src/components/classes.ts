///Clase plantilla para hacer objetos

///literal

const literalClass = {
  a: "srt",
  b: 123,
};

console.log("*****Clases Plantilla para hacer objetos & Herencia *****");

// class Movie {

//     title: string;
//     private duration : number;
//     readonly hasOscar : boolean;

//     constructor (title: string, duration: number, hasOscar:boolean){

//         this.title = title
//         this. duration = duration
//         this.hasOscar = hasOscar
//     }

//     //metodos = funciones
//     getInfo(){
//         return `
//         Title: ${this.title}
//         Duration: ${this.duration}
//         Has Oscar: ${this.hasOscar}`
//     }
// }

interface Director<T> {
  name: string;
  age: number;
  data: T;
}

const director1: Director<string> = {
  name: "Peter",
  age: 60,
  data: "He is amazing",
};

console.log(director1);
//herencia - obtiene los paramatros de una clase padre

interface IVideo<T> {
  title: string;
  // duration: number; no puede acceder a un parametro privado
  play(): void;
  getDuration(): number;
  director: Director<T>;
}

class Movie implements IVideo<string> {
  constructor(
    public title: string,
    private duration: number,
    readonly hasOscar: boolean,
    public director: Director<string>
  ) {}
  //metodos = funciones
  getInfo() {
    return `
        Title: ${this.title}
        Duration: ${this.duration}
        Has Oscar: ${this.hasOscar}`;
  }
  play(): void {
    console.log(`Playing ${this.title}`);
  }
  getDuration(): number {
    return this.duration;
  }
}

class HorrorMovie extends Movie {
  constructor(
    title: string,
    duration: number,
    hasOscar: boolean,
    director: Director<string>,
    public hasJumpScares: boolean
  ) {
    super(title, duration, hasOscar, director);
  }

  displayAlert() {
    console.log("This Movie is really scary");
  }

  //sobrecargar metodo con el mismo nombre
  getInfo() {
    return `Some movie info`;
  }
}

const movie1 = new Movie("Batman The Dart Knight", 120, true, director1);
const movie2 = new Movie("Batman The Dart Knight Rises", 120, true, director1);
const screm = new HorrorMovie("Screen", 90, false, director1, true);

console.log(movie1.getInfo());
console.log("Screm", screm);
console.log(screm.getInfo()); ///a pesar que no se declaro en mi nueva clase el metodo se puede acceder a los metodos del padre (Movie)
screm.displayAlert();

//No realizar !!
// movie1.title= "StarWars" No es recomendable
console.log("Movies 1 & 2 ", movie1, movie2);
// console.log(movie1.duration); Acceso Privado
// movie1.hasOscar = false Acceso solo de lectura No edicion

////INterfaces definir tipos de datos Mayus
//Interfaces para trabajar con OBJETOS (expandir)
//tipos de datos mas personalizados Type (no se pueden expandir)

interface IEpisodic {
  episodes: number;
}

class Serie implements IVideo<string>, IEpisodic {
  constructor(
    public title: string,
    private duration: number,
    public director: Director<string>,
    public episodes: number
  ) {}

  getDuration():number {
    return this.duration
  }

  play(): void {
      console.log("Playing Serie");
      
  }
}

const serie1 = new Serie("Spiderman", 120, director1, 12)
console.log("Serie", serie1)