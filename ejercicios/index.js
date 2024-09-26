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
/* //Implementación de la función
function combine(val:any,val2:any):any{
    return val + val2
} */
console.log(combine("2", "2"));
function combine(val, val2) {
    return isNaN(+val) ? val + val2 : (+val) + (+val2);
}
console.log(combine("2", "5"));
