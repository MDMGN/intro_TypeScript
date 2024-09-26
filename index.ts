// Tipos de datos primitivos

let nombre:string = "Darren" // String
let edad:number = 20 // Number
let masculino:boolean=true // Boolean
// Tipo any
let mensaje:any="mesage" // any: Cualquier tipo de dato

//console.log(mensaje)

let obj:unknown = "obj"

// Asersiones de tipos

// Aserciones con tipos desconocidos
if( typeof obj === "string"){ //Comporbando si el tipo es un string para acceder al metodo "split"
    obj.split("_")
}

(obj as string).split("_")  // Casteando con un alias para convertir el dato a string y acceder al metodo "split"

//Tipos de datos compuestos e inferencia de tipos
import {type Persona} from "./types"

const persona:Persona={
    nombre:"Darren",
    edad: 25,
    saludo:()=> console.log("Hola")
}

//const frutas:Array<String> = ["fresa","pera","manzana"] // Tipado con Generics
const frutas: string[]= ["fresa","pera","manzana"]

//Tuplas
const alumnos:[string,string,string,string]=["Asier","Marcial","Mikel","Imanol"]
