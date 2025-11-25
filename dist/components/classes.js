"use strict";
///Clase plantilla para hacer objetos
///literal
const literalClass = {
    a: "srt",
    b: 123,
};
console.log("*****Clases Plantilla para hacer objetos & Herencia *****");
const director1 = {
    name: "Peter",
    age: 60,
    data: "He is amazing",
};
console.log(director1);
class Movie {
    constructor(title, duration, hasOscar, director) {
        this.title = title;
        this.duration = duration;
        this.hasOscar = hasOscar;
        this.director = director;
    }
    //metodos = funciones
    getInfo() {
        return `
        Title: ${this.title}
        Duration: ${this.duration}
        Has Oscar: ${this.hasOscar}`;
    }
    play() {
        console.log(`Playing ${this.title}`);
    }
    getDuration() {
        return this.duration;
    }
}
class HorrorMovie extends Movie {
    constructor(title, duration, hasOscar, director, hasJumpScares) {
        super(title, duration, hasOscar, director);
        this.hasJumpScares = hasJumpScares;
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
class Serie {
    constructor(title, duration, director, episodes) {
        this.title = title;
        this.duration = duration;
        this.director = director;
        this.episodes = episodes;
    }
    getDuration() {
        return this.duration;
    }
    play() {
        console.log("Playing Serie");
    }
}
const serie1 = new Serie("Spiderman", 120, director1, 12);
console.log("Serie", serie1);
