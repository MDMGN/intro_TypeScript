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
if (typeof obj === "string") {
    obj.split("_");
}
obj.split("_");
var persona = {
    nombre: "Darren",
    edad: 25,
    saludo: function () { return console.log("Hola"); }
};
//const frutas:Array<String> = ["fresa","pera","manzana"]
var frutas = ["fresa", "pera", "manzana"];
frutas.push("sandia");
//Tuplas
var alumnos = ["Asier", "Marcial", "Mikel", "Imanol"];
