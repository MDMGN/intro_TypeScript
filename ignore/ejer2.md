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
const expensiveProducts = products.filter(product => product.price > 50);

// 2. Mapear a nombres de productos en mayúsculas
const productNamesUppercase = products.map(product => product.name.toUpperCase());

// 3. Reducir a la suma total de los precios de todos los productos
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

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

// 1. Filtrar solo los números
const numbers = mixedArray.filter(item => typeof item === "number") as number[];

// 2. Mapear para obtener el cuadrado de cada número
const squaredNumbers = numbers.map(num => num ** 2);

// 3. Verificar si alguno de los números es mayor a 100
const hasNumberGreaterThan100 = numbers.some(num => num > 100);

console.log(numbers);
console.log(squaredNumbers);
console.log(hasNumberGreaterThan100);
```

### Ejercicio 3: Intersection Types y Optional Properties

Define dos tipos que se intersectan, uno que representa una persona y otro que representa un trabajador opcionalmente:

```typescript
type Person = {
    name: string;
    age: number;
};

type Worker = {
    company?: string;
    position: string;
};

type Employee = Person & Worker;

const employee1: Employee = {
    name: "Alice",
    age: 30,
    position: "Engineer",
    company: "Tech Inc"
};

const employee2: Employee = {
    name: "Bob",
    age: 25,
    position: "Intern" // No tiene empresa
};

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

### Ejercicio 5: Propiedades computadas

Usa **propiedades computadas** en un objeto de TypeScript.

```typescript
type Feature = "darkMode" | "newUserProfile";

type FeatureFlags = {
    [Property in Feature as `is${Capitalize<Property>}`]: boolean;
};

const featureFlags: FeatureFlags = {
    isDarkMode: true,
    isNewUserProfile: false
};

console.log(featureFlags);
```

### Ejercicio 6: Type Assertions

Corrige el tipo de una variable usando **type assertions** (aserciones de tipo).

```typescript
const unknownValue: unknown = "Hello, TypeScript";

// Aserción de tipo
const strValue = unknownValue

console.log(strValue.length); // Ahora podemos acceder a 'length' sin error
```

### Ejercicio 7: Intersection Types y Optional Properties

Crea un tipo que sea la intersección de dos tipos con propiedades opcionales. Luego, define una variable que implemente este tipo.

```typescript
type Address = {
    street?: string;
    city?: string;
};

type Contact = {
    phone?: string;
    email?: string;
};

type PersonWithContact = Address & Contact;

const person1: PersonWithContact = {
    street: "Main St",
    phone: "123456789"
};

console.log(person1);
```

### Ejercicio 8: Union Types

Dado un array de objetos que puede contener diferentes tipos, utiliza un **Union Type** para manejar correctamente los diferentes tipos.

```typescript
type Dog = {
    name: string;
    breed: string;
};

type Cat = {
    name: string;
    livesLeft: number;
};

const pets: (Dog | Cat)[] = [
    { name: "Fido", breed: "Labrador" },
    { name: "Whiskers", livesLeft: 9 }
];

pets.forEach(pet => {
    if ('breed' in pet) {
        console.log(`${pet.name} is a ${pet.breed}`);
    } else {
        console.log(`${pet.name} has ${pet.livesLeft} lives left`);
    }
});
```

Estos ejercicios te ayudarán a practicar diferentes aspectos de TypeScript, desde los métodos de arrays y propiedades computadas, hasta los tipos de unión, intersección, propiedades opcionales, mapeadas y aserciones. ¡Espero que te sean útiles!


Aquí tienes una lista de ejercicios en TypeScript utilizando métodos de arrays como `map`, `reduce`, `filter`, `some`, `every`, propiedades computadas y tipos mapeados. Los ejercicios están diseñados para combinar estos conceptos de manera práctica.

### Ejercicio 1: Mapear propiedades computadas

**Descripción:** Dado un array de objetos que representan productos, queremos crear un nuevo array donde los nombres de los productos están en mayúsculas y sus precios están con un 10% de descuento.

```typescript
interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

// Usa el método map para transformar los productos
const discountedProducts = products.map(product => ({
  name: product.name.toUpperCase(),
  price: product.price * 0.9
}));

console.log(discountedProducts);
```

### Ejercicio 2: Filtrar elementos

**Descripción:** Dado un array de objetos que representan usuarios, filtrar solo aquellos usuarios mayores de 18 años.

```typescript
interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "John", age: 20 },
  { name: "Jane", age: 17 },
  { name: "Mike", age: 30 }
];

// Filtra los usuarios que tengan más de 18 años
const adults = users.filter(user => user.age > 18);

console.log(adults);
```

### Ejercicio 3: Uso de `reduce` para calcular un total

**Descripción:** Dado un array de números, usa `reduce` para obtener la suma total de todos los números.

```typescript
const numbers: number[] = [10, 20, 30, 40, 50];

// Calcula la suma total usando reduce
const total = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(total); // Output: 150
```

### Ejercicio 4: Verificación de condición con `some` y `every`

**Descripción:** Verifica si al menos un número en el array es mayor a 50 usando `some`, y si todos los números son menores a 100 usando `every`.

```typescript
const nums: number[] = [10, 20, 70, 40, 50];

// Verifica si algún número es mayor a 50
const hasGreaterThanFifty = nums.some(num => num > 50);

// Verifica si todos los números son menores a 100
const allLessThanHundred = nums.every(num => num < 100);

console.log(hasGreaterThanFifty); // Output: true
console.log(allLessThanHundred);  // Output: true
```

### Ejercicio 5: Propiedades computadas con tipos mapeados

**Descripción:** Dado un tipo `Person`, crea un tipo mapeado que convierta todas las propiedades de `Person` en getters usando tipos literales de plantilla.

```typescript
interface Person {
  name: string;
  age: number;
  location: string;
}

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

type LazyPerson = Getters<Person>;

const person: LazyPerson = {
  getName: () => "John",
  getAge: () => 30,
  getLocation: () => "New York"
};

console.log(person.getName()); // Output: John
```

### Ejercicio 6: Modificadores de tipos mapeados

**Descripción:** Crea un tipo que haga todas las propiedades de un objeto opcionales y otro que las haga obligatorias usando tipos mapeados.

```typescript
interface Car {
  brand: string;
  model: string;
  year: number;
}

// Tipo que hace todas las propiedades opcionales
type PartialCar = {
  [Property in keyof Car]?: Car[Property];
};

// Tipo que hace todas las propiedades obligatorias
type RequiredCar = {
  [Property in keyof Car]-?: Car[Property];
};

// Usa los tipos
const optionalCar: PartialCar = { brand: "Toyota" };
const requiredCar: RequiredCar = { brand: "Honda", model: "Civic", year: 2021 };
```

### Ejercicio 7: Eliminar y reasignar claves con tipos mapeados

**Descripción:** Dado un tipo `PersonWithID`, elimina la propiedad `id` del tipo usando tipos mapeados.

```typescript
interface PersonWithID {
  id: string;
  name: string;
  age: number;
}

// Tipo que elimina la propiedad "id"
type WithoutID = {
  [Property in keyof PersonWithID as Exclude<Property, "id">]: PersonWithID[Property];
};

const personWithoutID: WithoutID = {
  name: "Jane",
  age: 25
};

console.log(personWithoutID); // Output: { name: 'Jane', age: 25 }
```

### Ejercicio 8: Tipos condicionales con tipos mapeados

**Descripción:** Dado un tipo `Fields`, crea un tipo que marque como `true` aquellas propiedades que contienen información personal (pii) y `false` las que no.

```typescript
interface Fields {
  username: { pii: true };
  email: { pii: true };
  age: { pii: false };
}

type MarkPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type PIIFlags = MarkPII<Fields>;

const piiFlags: PIIFlags = {
  username: true,
  email: true,
  age: false
};

console.log(piiFlags); // Output: { username: true, email: true, age: false }
```

### Ejercicio 9: Mapear sobre uniones

**Descripción:** Dado un tipo `Event` que puede ser `ClickEvent` o `KeyEvent`, crea un tipo mapeado que agrupe eventos según su tipo (key).

```typescript
type ClickEvent = { type: "click"; x: number; y: number };
type KeyEvent = { type: "key"; key: string };

type EventConfig<Events extends { type: string }> = {
  [E in Events as E["type"]]: (event: E) => void;
};

type AppEvents = EventConfig<ClickEvent | KeyEvent>;

const eventHandlers: AppEvents = {
  click: (event) => console.log(`Clicked at ${event.x}, ${event.y}`),
  key: (event) => console.log(`Key pressed: ${event.key}`)
};
```

Con estos ejercicios puedes practicar el uso de métodos de arrays y tipos mapeados en TypeScript para manipular estructuras de datos y tipos de manera más dinámica y segura.