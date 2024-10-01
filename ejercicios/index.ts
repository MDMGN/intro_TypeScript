/* 
    Ejercicio 1:
Crea un archivo index.ts que imprima "Hola, TypeScript". Compílalo a JavaScript usando tsc y ejecuta el archivo JavaScript.
*/

console.log("Hola, TypeScript")



/* 
    Ejercicio 3:
Define variables para cada uno de los tipos básicos (number, string, boolean) y asigna valores. Luego crea una función que reciba como parámetros estos valores y los imprima.

*/




const devolverValores =(number:number,string:string,boolean:boolean)=> console.log({number,string,boolean})

devolverValores(25,"Darren",true)


/* 
    Ejercicio 4:
Crea un enum para representar los días de la semana y escribe una función que reciba un día (como enum) e imprima un mensaje especial para los fines de semana.
*/

enum DIAS_SEMANA{
    LUNES,
    MARTES,
    MIERCOLES,
    JUEVES,
    VIERNES,
    SABADO,
    DOMINGO
}


function mensajeEspcial(dia:DIAS_SEMANA){

    const mensaje= (dia === DIAS_SEMANA.SABADO || dia === DIAS_SEMANA.DOMINGO) ? "Ya es fin de semana!" : DIAS_SEMANA[dia]
    console.log(mensaje)
}

mensajeEspcial(DIAS_SEMANA.MIERCOLES)

/* 
    Ejercicio 5:
Escribe una función que reciba dos números y devuelva su suma. Define correctamente los tipos de los parámetros y el tipo de retorno.
*/

const suma=(n:number,n2:number) => n + n2

console.log(suma(2,5))


/* 
Ejercicio 6:
Escribe una función que use sobrecarga para aceptar tanto dos números como dos strings y devuelva el resultado apropiado (la suma o la concatenación).
*/


// DEfinición de los prototipos
function combine(n:string, n2:string): string;
function combine(n:number, n2:number): number;

//Implementación de la función
function combine(val:any,val2:any):any{
    return val + val2
}

console.log(combine("2","2"))



/* function combine(val:any,val2:any):any{
    return isNaN(+val) ?  val + val2 :  (+val) + (+val2)
} */

console.log(combine("2","5"))



/* ## Módulo 4: Interfaces y Clases
### Ejercicio 7:
Define una interfaz `Car` que contenga las propiedades `marca`, `modelo` y un método `acelerar()`. Crea una clase `Deportivo` que implemente esta interfaz.
 */

interface Car{
    marca: string
    modelo: string
    acelerar: ()=> void
}

class Deportivo implements Car{
    constructor(public marca:string, public modelo:string){}
    acelerar(){
        console.log("Acelerando...")
    }

}
const car= new Deportivo("BMV","")

car.acelerar()

/* ### Ejercicio 8:
Crea una clase `Persona` con propiedades privadas `nombre` y `edad`. Incluye métodos para obtener y cambiar estos valores.

---
 */

class  Persona{
    constructor(private nombre:string, private edad:number){}
    
    getNombre(){
        return this.nombre
    }

    getEdad(){
        return this.edad
    }

    setNombre(nombre:string){
        this.nombre=nombre
    }

    setEdad(edad:number){
        this.edad=edad
    }

}


const darren=new Persona("Darren",25)

darren.setEdad(30)
darren.setNombre("Michael")

console.log(darren)


/* ### Ejercicio 1: Usando `map`, `filter`, `reduce`

Dado un array de objetos que representan productos con nombre y precio, realiza las siguientes operaciones:

1. Usa `filter` para obtener solo los productos cuyo precio sea mayor a 50.
2. Usa `map` para crear un array de nombres de productos en mayúsculas.
3. Usa `reduce` para obtener el total de los precios de todos los productos.

 */
type Product = {
    name: string;
    price: number;
};

const products: Product[] = [
    { name: "Phone", price: 120 },
    { name: "Laptop", price: 999 },
    { name: "Book", price: 25 },
    { name: "Headphones", price: 50 }
];

// 1. Filtrar productos con precio mayor a 50
const expensiveProducts = products.filter((producto)=> producto.price > 50)

/// 2. Mapear a nombres de productos en mayúsculas
const productNamesUppercase = products.map(({name,price}) => ( { name: name.toLocaleUpperCase(), price } ))

// 3. Reducir a la suma total de los precios de todos los productos
const totalPrice = products.reduce((acc, product)=>  acc+=product.price ,0)

console.log(expensiveProducts);
console.log(productNamesUppercase);
console.log(totalPrice);


/* ### Ejercicio 2: Union Types y métodos de arrays

Dado un array que puede contener tanto números como strings, realiza las siguientes operaciones:

1. Usa `filter` para obtener solo los números.
2. Usa `map` para convertir los números en su forma cuadrada.
3. Usa `some` para comprobar si algún número es mayor que 100.
 */
const mixedArray: (number | string)[] = [10, "hello", 25, "world", 50, 5];

// 1. Filtrar solo los números de "mixedArray" y hacer el tipado respectivo
const numbers:number[]=  mixedArray.filter(  (el)=> typeof el === "number" )

// 2. Mapear para obtener el cuadrado de cada número y hacer el tipado respectivo
const squaredNumbers:number[] = numbers.map(num => num**2 )
// 3. Verificar si alguno de los números es mayor a 100 (Devolver true o false)
const hasNumberGreaterThan100:boolean = squaredNumbers.some((el)=> el > 100 )

console.log(numbers);
console.log(squaredNumbers);
console.log(hasNumberGreaterThan100);



/* ### Ejercicio 3: Intersection Types y Optional Properties

Define dos tipos que se intersectan, uno que representa una persona y otro que representa un trabajador con alguna propiedad opcional:
 */
//Defenir los tipos

type Person={
    nombre: string
    age: number
}

type Worker1={
    company?:string
}

type Employee = Person & Worker1 // Itersección de los tipos

const employee1: Employee ={
    nombre: "Darren",
    age: 25
}

const employee2: Employee = {
    nombre: "Michael",
    age: 30,
    company: "LiquidArts"
}

console.log(employee1);
console.log(employee2);