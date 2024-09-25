
# Ejercicios de TypeScript

## Módulo 1: Introducción a TypeScript
### Ejercicio 1:
Crea un archivo `index.ts` que imprima "Hola, TypeScript". Compílalo a JavaScript usando `tsc` y ejecuta el archivo JavaScript.

### Ejercicio 2:
Configura un archivo `tsconfig.json` en tu proyecto y define las opciones básicas de compilación.

---

## Módulo 2: Tipos en TypeScript
### Ejercicio 3:
Define variables para cada uno de los tipos básicos (`number`, `string`, `boolean`) y asigna valores. Luego crea una función que reciba como parámetros estos valores y los imprima.

### Ejercicio 4:
Crea un `enum` para representar los días de la semana y escribe una función que reciba un día (como enum) e imprima un mensaje especial para los fines de semana.

---

## Módulo 3: Funciones en TypeScript
### Ejercicio 5:
Escribe una función que reciba dos números y devuelva su suma. Define correctamente los tipos de los parámetros y el tipo de retorno.

### Ejercicio 6:
Escribe una función que use sobrecarga para aceptar tanto dos números como dos strings y devuelva el resultado apropiado (la suma o la concatenación).

---

## Módulo 4: Interfaces y Clases
### Ejercicio 7:
Define una interfaz `Car` que contenga las propiedades `marca`, `modelo` y un método `acelerar()`. Crea una clase `Deportivo` que implemente esta interfaz.

### Ejercicio 8:
Crea una clase `Persona` con propiedades privadas `nombre` y `edad`. Incluye métodos para obtener y cambiar estos valores.

---

## Módulo 5: Módulos y Namespaces
### Ejercicio 9:
Crea dos módulos: uno que contenga una función para sumar números (`suma.ts`) y otro que importe y use esa función (`main.ts`).

### Ejercicio 10:
Crea un `namespace` llamado `Utils` con una función `log()` que imprima mensajes en la consola. Usa el namespace en un archivo separado.

---

## Módulo 6: Tipos Genéricos
### Ejercicio 11:
Escribe una función genérica `getFirstItem` que tome un array de cualquier tipo y devuelva el primer elemento. Usa esta función con diferentes tipos de arrays.

### Ejercicio 12:
Crea una clase genérica `Caja<T>` que almacene un valor y tenga un método para obtenerlo. Usa esta clase para guardar tanto números como strings.

---

## Módulo 7: Manejo de Errores y Debugging
### Ejercicio 13:
Escribe una función que intente parsear un JSON y maneje los posibles errores de forma segura usando `try-catch`.

### Ejercicio 14:
Configura el `tsconfig.json` para habilitar los `sourceMap` y haz debugging de una pequeña aplicación TypeScript en el navegador.

---

## Módulo 8: TypeScript Avanzado
### Ejercicio 15:
Crea un tipo condicional que verifique si un tipo dado es `string` y devuelva "Es una cadena" o "No es una cadena".

### Ejercicio 16:
Crea un `Mapped Type` que haga todas las propiedades de un objeto `readonly`. Aplica esto a un objeto de ejemplo.

### Ejercicio 17:
Usa decoradores para interceptar la llamada a un método en una clase y loguear los parámetros de entrada antes de ejecutarlo.

---

## Módulo 9: Integración con Herramientas y Frameworks
### Ejercicio 18:
Crea una pequeña API usando Express y TypeScript. Define tipos para las peticiones y respuestas.

### Ejercicio 19:
Crea un componente funcional en React que acepte `props` tipadas con TypeScript. Renderiza el componente en una aplicación simple de React.

---

## Módulo 10: Buenas Prácticas y Patrones
### Ejercicio 20:
Configura ESLint en un proyecto TypeScript y corrige todos los errores que el linter te indique.

### Ejercicio 21:
Implementa un patrón Singleton usando clases en TypeScript.

---

# Conclusión
A lo largo de estos ejercicios, se han cubierto los aspectos fundamentales y avanzados de TypeScript. Esto incluye el manejo de tipos, interfaces, clases, genéricos y decoradores, así como su integración con herramientas y frameworks como Node.js y React.

TypeScript, al agregar tipado estático sobre JavaScript, permite escribir código más robusto, con menos errores y más fácil de mantener. Además, con características avanzadas como los tipos condicionales y genéricos, puedes construir aplicaciones que sean altamente flexibles y seguras.

Estos ejercicios deberían haberte dado una comprensión sólida de cómo usar TypeScript para desarrollar aplicaciones a nivel profesional, aprovechando todas las ventajas que ofrece sobre JavaScript.
