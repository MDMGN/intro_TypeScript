"use strict";
// Tipos de datos primitivos
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = "Darren"; // String
var edad = 20; // Number
var masculino = true; // Boolean
// Tipo any
var mensaje = "mesage"; // any: Cualquier tipo de dato
//console.log(mensaje)
var obj = "obj";
// Asersiones de tipos
// Aserciones con tipos desconocidos
if (typeof obj === "string") { //Comporbando si el tipo es un string para acceder al metodo "split"
    obj.split("_");
}
obj.split("_"); // Casteando con un alias para convertir el dato a string y acceder al metodo "split"
var persona = {
    nombre: "Darren",
    edad: 25,
    saludo: function () { return console.log("Hola"); }
};
//const frutas:Array<String> = ["fresa","pera","manzana"] // Tipado con Generics
var frutas = ["fresa", "pera", "manzana"];
//Tuplas
var alumnos = ["Asier", "Marcial", "Mikel", "Imanol"];
alumnos = ["a", "b", "c", "d"];
/* alumnos.push("Darren") */
var arr = ["Darren", "T"];
arr = [6, 7, 8];
var arr2 = ["Darren", 8, true];
// Enumeraciones
var DIAS_SEMANA;
(function (DIAS_SEMANA) {
    DIAS_SEMANA[DIAS_SEMANA["LUNES"] = 0] = "LUNES";
    DIAS_SEMANA[DIAS_SEMANA["MARTES"] = 1] = "MARTES";
    DIAS_SEMANA[DIAS_SEMANA["MIERCOLES"] = 2] = "MIERCOLES";
    DIAS_SEMANA[DIAS_SEMANA["JUEVES"] = 3] = "JUEVES";
    DIAS_SEMANA[DIAS_SEMANA["VIERNES"] = 4] = "VIERNES";
    DIAS_SEMANA[DIAS_SEMANA["SABADOS"] = 5] = "SABADOS";
    DIAS_SEMANA[DIAS_SEMANA["DOMINGO"] = 6] = "DOMINGO";
})(DIAS_SEMANA || (DIAS_SEMANA = {}));
var hoy = DIAS_SEMANA.JUEVES;
var id = crypto.randomUUID();
var name = "Imanol";
// Funciones en TypeScript
/* function saludar():void{
    console.log("Hello!!")
} */
function saludar(name) {
    console.log("Hello ".concat(name !== null && name !== void 0 ? name : 'MD'));
}
saludar("Darren");
function combine(val, val2) {
    return val + val2;
}
//console.log(combine(2,2))  // 4 number
//console.log(combine("s","a")) // "sa"  string
//console.log(combine("s",true)) // error: No sobrecargada en su prototipo
var sumar = function (n, n2) {
    return n + n2;
};
/* const simba: animal | caballo ={
    correr: ()=> console.log("Corriendo"),
    color: "negro" // No se puede
} */
var simba = {
    correr: function () { return console.log("s"); },
    color: "negro", // No se puede,
    nombre: "Simba"
};
//Mappes Types
/* const bambi: Pick<animal,"color">={
    color: "azul",
} */
/* const bambi: Partial<animal> = simba
 */
// POO
var Animal = /** @class */ (function () {
    function Animal(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    Animal.prototype.getColor = function () {
        return this.color;
    };
    return Animal;
}());
var animal = new Animal("Bambi", "Azul");
console.log(animal.getColor());
