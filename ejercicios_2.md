### Ejercicio 1: Usando `map`, `filter`, `reduce`

Dado un array de objetos que representan productos con nombre y precio, realiza las siguientes operaciones:

1. Usa `filter` para obtener solo los productos cuyo precio sea mayor a 50.
2. Usa `map` para crear un array de nombres de productos en mayúsculas.
3. Usa `reduce` para obtener el total de los precios de todos los productos.

```typescript
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
const expensiveProducts = //Implementación

// 2. Mapear a nombres de productos en mayúsculas
const productNamesUppercase = // Implementacion

// 3. Reducir a la suma total de los precios de todos los productos
const totalPrice = // Implementación

console.log(expensiveProducts);
console.log(productNamesUppercase);
console.log(totalPrice);
```

### Ejercicio 2: Union Types y métodos de arrays

Dado un array que puede contener tanto números como strings, realiza las siguientes operaciones:

1. Usa `filter` para obtener solo los números.
2. Usa `map` para convertir los números en su forma cuadrada.
3. Usa `some` para comprobar si algún número es mayor que 100.

```typescript
const mixedArray: (number | string)[] = [10, "hello", 25, "world", 50, 5];

// 1. Filtrar solo los números de "mixedArray" y hacer el tipado respectivo
const numbers= //Implementación

// 2. Mapear para obtener el cuadrado de cada número y hacer el tipado respectivo
const squaredNumbers = //Implementación

// 3. Verificar si alguno de los números es mayor a 100 (Devolver true o false)
const hasNumberGreaterThan100 = //Implemetación

console.log(numbers);
console.log(squaredNumbers);
console.log(hasNumberGreaterThan100);
```


### Ejercicio 3: Intersection Types y Optional Properties

Define dos tipos que se intersectan, uno que representa una persona y otro que representa un trabajador con alguna propiedad opcional:

```typescript
//Defenir los tipos

type Employee = // Itersección de los tipos

const employee1: Employee =  //Implementación

const employee2: Employee =  // Implemetación

console.log(employee1);
console.log(employee2);
```


### Ejercicio 4: Mapped Types

Usa un **Mapped Type** para transformar todas las propiedades de un tipo en propiedades opcionales, o cambiar su tipo a booleanos.

```typescript
type User = {
    name: string;
    email: string;
    active: boolean;
};

// Cambiar todas las propiedades a opcionales
type OptionalUser = {
    ////Implementación
};

// Cambiar todas las propiedades a booleanos
type BooleanUser = {
    //Implementación
};

const optionalUser: OptionalUser = {
    name: "Alice"
};

const booleanUser: BooleanUser = {
    name: true,
    email: false,
    active: true
};

console.log(optionalUser);
console.log(booleanUser);
```

### Ejercicio 5: Type Assertions

Corrige el tipo de una variable usando **type assertions** (aserciones de tipo).

```typescript
const unknownValue: unknown = "Hello, TypeScript";

// Aserción de tipo
const strValue = unknownValue
