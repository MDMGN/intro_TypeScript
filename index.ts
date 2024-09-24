// Tipos de datos primitivos

let nombre:string = "Darren" // String
let edad:number = 20 // Number
let masculino:boolean=true // Boolean
// Tipo any
let mensaje:any="mesage" // any: Cualquier tipo de dato

//console.log(mensaje)

let obj:unknown = "obj"

// Asersiones de tipos

if( typeof obj === "string"){
    obj.split("_")
}

(obj as string).split("_") 

//Tipos de datos compuestos e inferencia de tipos

const persona:Persona={
    nombre:"Darren",
    edad: 25,
    saludo:()=> console.log("Hola")
}

//const frutas:Array<String> = ["fresa","pera","manzana"]
const frutas: string[]  = ["fresa","pera","manzana"]

frutas.push("sandia")
//Tuplas
const alumnos:[string,string,string,string]=["Asier","Marcial","Mikel","Imanol"]


let elementos: string [] | number[] = ["sandia"]
elementos = [8]
