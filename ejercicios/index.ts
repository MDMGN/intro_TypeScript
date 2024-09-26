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

