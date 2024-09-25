
### **Módulo 1: Introducción a TypeScript**
```typescript
// Ejemplo básico de TypeScript
let message: string = "Hello, TypeScript!";
console.log(message);

// Compilar este archivo (index.ts) con: tsc index.ts
```

---

### **Módulo 2: Tipos en TypeScript**
```typescript
// Tipos básicos
let age: number = 30;
let isStudent: boolean = false;
let name: string = "Alice";

// Tipos especiales
let notSure: any = 4; // Evitar usar 'any' cuando sea posible
notSure = "could be a string";
notSure = true;

// Arrays y Tuplas
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["Alice", 30];

// Enums
enum Color { Red, Green, Blue }
let color: Color = Color.Green;
console.log(color);  // Output: 1
```

---

### **Módulo 3: Funciones en TypeScript**
```typescript
// Función tipada
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Parámetros opcionales y predeterminados
function logMessage(message: string, userId?: string): void {
    console.log(`Message: ${message}`);
    if (userId) {
        console.log(`User ID: ${userId}`);
    }
}
logMessage("Welcome"); // Parámetro opcional omitido

// Función con sobrecarga
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
    return x + y;
}
console.log(add(10, 20));   // Output: 30
console.log(add("Hello, ", "TypeScript")); // Output: Hello, TypeScript
```

---

### **Módulo 4: Interfaces y Clases**

#### **Interfaces**
```typescript
interface Person {
    name: string;
    age: number;
    greet(): string;
}

const person: Person = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};

console.log(person.greet());
```

#### **Clases**
```typescript
class Animal {
    constructor(public name: string) {}

    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog("Buddy");
dog.bark();         // Output: Woof! Woof!
dog.move(10);       // Output: Buddy moved 10 meters.
```

---

### **Módulo 5: Módulos y Namespaces**

#### **Módulos**
```typescript
// mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

// main.ts
import { add } from './mathUtils';
console.log(add(5, 10)); // Output: 15
```

#### **Namespaces**
```typescript
namespace Utils {
    export function log(message: string): void {
        console.log(message);
    }
}

Utils.log("Hello from namespace!"); // Output: Hello from namespace!
```

---

### **Módulo 6: Tipos Genéricos**
```typescript
// Función genérica
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(42));    // Output: 42
console.log(identity<string>("Hello")); // Output: Hello

// Clase genérica
class Box<T> {
    constructor(public contents: T) {}

    open(): T {
        return this.contents;
    }
}

const stringBox = new Box<string>("A message");
console.log(stringBox.open()); // Output: A message
```

---

### **Módulo 7: Manejo de Errores y Debugging**
```typescript
function parseJson(jsonString: string): unknown {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
}

const data = parseJson('{"name":"Alice"}');
console.log(data); // Output: { name: 'Alice' }
```

---

### **Módulo 8: TypeScript Avanzado**

#### **Tipos condicionales**
```typescript
type IsNumber<T> = T extends number ? "Yes" : "No";

let result1: IsNumber<number>;  // Yes
let result2: IsNumber<string>;  // No
```

#### **Mapped Types**
```typescript
type Person = {
    name: string;
    age: number;
};

type ReadOnlyPerson = {
    readonly [K in keyof Person]: Person[K];
};

const person: ReadOnlyPerson = { name: "Alice", age: 30 };
// person.age = 31; // Error: Cannot assign to 'age' because it is a read-only property
```

#### **Decoradores**
```typescript
function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyName} with arguments:`, args);
        return originalMethod.apply(this, args);
    };
}

class Person {
    constructor(public name: string) {}

    @logMethod
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const person = new Person("Alice");
person.greet();
// Output:
// Calling greet with arguments: []
// Hello, my name is Alice.
```

---

### **Módulo 9: Integración con Herramientas y Frameworks**

#### **TypeScript con Node.js**
```typescript
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Node.js!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

#### **TypeScript con React (Componentes Funcionales)**
```typescript
import React from 'react';

type GreetingProps = {
    name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

---

### **Módulo 10: Buenas Prácticas y Patrones**

#### **Uso de `Partial`**
```