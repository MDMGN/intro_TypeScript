/*
    Ejercicio 1:
Crea un archivo index.ts que imprima "Hola, TypeScript". Compílalo a JavaScript usando tsc y ejecuta el archivo JavaScript.
*/
console.log("Hola, TypeScript");
/*
    Ejercicio 3:
Define variables para cada uno de los tipos básicos (number, string, boolean) y asigna valores. Luego crea una función que reciba como parámetros estos valores y los imprima.

*/
var devolverValores = function (number, string, boolean) { return console.log({ number: number, string: string, boolean: boolean }); };
devolverValores(25, "Darren", true);
/*
    Ejercicio 4:
Crea un enum para representar los días de la semana y escribe una función que reciba un día (como enum) e imprima un mensaje especial para los fines de semana.
*/
var DIAS_SEMANA;
(function (DIAS_SEMANA) {
    DIAS_SEMANA[DIAS_SEMANA["LUNES"] = 0] = "LUNES";
    DIAS_SEMANA[DIAS_SEMANA["MARTES"] = 1] = "MARTES";
    DIAS_SEMANA[DIAS_SEMANA["MIERCOLES"] = 2] = "MIERCOLES";
    DIAS_SEMANA[DIAS_SEMANA["JUEVES"] = 3] = "JUEVES";
    DIAS_SEMANA[DIAS_SEMANA["VIERNES"] = 4] = "VIERNES";
    DIAS_SEMANA[DIAS_SEMANA["SABADO"] = 5] = "SABADO";
    DIAS_SEMANA[DIAS_SEMANA["DOMINGO"] = 6] = "DOMINGO";
})(DIAS_SEMANA || (DIAS_SEMANA = {}));
function mensajeEspcial(dia) {
    var mensaje = (dia === DIAS_SEMANA.SABADO || dia === DIAS_SEMANA.DOMINGO) ? "Ya es fin de semana!" : DIAS_SEMANA[dia];
    console.log(mensaje);
}
mensajeEspcial(DIAS_SEMANA.MIERCOLES);
/*
    Ejercicio 5:
Escribe una función que reciba dos números y devuelva su suma. Define correctamente los tipos de los parámetros y el tipo de retorno.
*/
var suma = function (n, n2) { return n + n2; };
console.log(suma(2, 5));
//Implementación de la función
function combine(val, val2) {
    return val + val2;
}
console.log(combine("2", "2"));
/* function combine(val:any,val2:any):any{
    return isNaN(+val) ?  val + val2 :  (+val) + (+val2)
} */
console.log(combine("2", "5"));
var Deportivo = /** @class */ (function () {
    function Deportivo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Deportivo.prototype.acelerar = function () {
        console.log("Acelerando...");
    };
    return Deportivo;
}());
var car = new Deportivo("BMV", "");
car.acelerar();
/* ### Ejercicio 8:
Crea una clase `Persona` con propiedades privadas `nombre` y `edad`. Incluye métodos para obtener y cambiar estos valores.

---
 */
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    return Persona;
}());
var darren = new Persona("Darren", 25);
darren.setEdad(30);
darren.setNombre("Michael");
console.log(darren);
var products = [
    { name: "Phone", price: 120 },
    { name: "Laptop", price: 999 },
    { name: "Book", price: 25 },
    { name: "Headphones", price: 50 }
];
// 1. Filtrar productos con precio mayor a 50
var expensiveProducts = products.filter(function (producto) { return producto.price > 50; });
/// 2. Mapear a nombres de productos en mayúsculas
var productNamesUppercase = products.map(function (_a) {
    var name = _a.name, price = _a.price;
    return ({ name: name.toLocaleUpperCase(), price: price });
});
// 3. Reducir a la suma total de los precios de todos los productos
var totalPrice = products.reduce(function (acc, product) { return acc += product.price; }, 0);
console.log(expensiveProducts);
console.log(productNamesUppercase);
console.log(totalPrice);
/* ### Ejercicio 2: Union Types y métodos de arrays

Dado un array que puede contener tanto números como strings, realiza las siguientes operaciones:

1. Usa `filter` para obtener solo los números.
2. Usa `map` para convertir los números en su forma cuadrada.
3. Usa `some` para comprobar si algún número es mayor que 100.
 */
var mixedArray = [10, "hello", 25, "world", 50, 5];
// 1. Filtrar solo los números de "mixedArray" y hacer el tipado respectivo
var numbers = mixedArray.filter(function (el) { return typeof el === "number"; });
// 2. Mapear para obtener el cuadrado de cada número y hacer el tipado respectivo
var squaredNumbers = numbers.map(function (num) { return Math.pow(num, 2); });
// 3. Verificar si alguno de los números es mayor a 100 (Devolver true o false)
var hasNumberGreaterThan100 = squaredNumbers.some(function (el) { return el > 100; });
console.log(numbers);
console.log(squaredNumbers);
console.log(hasNumberGreaterThan100);
var employee1 = {
    nombre: "Darren",
    age: 25
};
var employee2 = {
    nombre: "Michael",
    age: 30,
    company: "LiquidArts"
};
console.log(employee1);
console.log(employee2);
