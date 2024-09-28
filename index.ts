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
let alumnos: readonly[string,string,string,string]=["Asier","Marcial","Mikel","Imanol"]

alumnos=["a","b","c","d"]

/* alumnos.push("Darren") */


let arr: number[] | string [] = ["Darren","T"]
arr = [6,7,8]

let arr2: (number|string|boolean) []= ["Darren",8,true]

// Enumeraciones

enum DIAS_SEMANA{
 LUNES,
 MARTES,
 MIERCOLES,
 JUEVES,
 VIERNES,
 SABADOS,
 DOMINGO
}

const hoy:DIAS_SEMANA= DIAS_SEMANA.JUEVES

type UUID=`${string}-${string}-${string}-${string}-${string}`;

type OnlyNames = "Imanol" | "Mikel"

const id: UUID = crypto.randomUUID()

const name: OnlyNames= "Imanol"



// Funciones en TypeScript

/* function saludar():void{
    console.log("Hello!!")
} */


function saludar(name?: string):void{
    console.log(`Hello ${name ?? 'MD'}`)
}

saludar("Darren")

function combine(val:string,val2:string):string;
function combine(val:number,val2:number):number;

function combine(val:any,val2:any){
    return val + val2
}

//console.log(combine(2,2))  // 4 number
//console.log(combine("s","a")) // "sa"  string
//console.log(combine("s",true)) // error: No sobrecargada en su prototipo

const sumar=(n: any ,n2: any):number | any =>{
            return n + n2
}

/* const fn=(n: any ,n2: any): never=>{
    console.log({n,n2})
} */

/* const fn2 = (val: readonly number,val2: readonly number)=>{
    val2 = 5
} */

// Union Types && Intersection Types


type animal ={
    nombre: string,
    color : string
}

type caballo ={
    correr: ()=> void
}


/* const simba: animal | caballo ={
    correr: ()=> console.log("Corriendo"),
    color: "negro" // No se puede
} */

const simba: animal & caballo ={
    correr: ()=> console.log("s"),
    color: "negro", // No se puede,
    nombre: "Simba"
}
//Utils Type

const bambi: Pick<animal,"color">={
    color: "azul",
}

/* const bambi: Partial<animal> = simba
 */

//Record: Primer valor para tipo en las claves y el segundo para el tipado en sus valores
/* const bambi: Record<keyof animal,string>={
    color: "negro",
    nombre: "bambi"
} */

// POO

class Animal{
    
    constructor(private nombre: string, private color:string){}

    getColor():string{
        return this.color
    }
}

const animal=new Animal("Bambi","Azul")

console.log(animal.getColor())



//Mappes Types
