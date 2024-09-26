
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
let numbers: number[] = [1, 2, 3]; //Array
let tuple: [string, number] = ["Alice", 30]; // Tuplas
```

### **Conclusión**
- Los **arrays** son ideales para manejar listas dinámicas de elementos donde todos los datos son del mismo tipo o similares.
- Las **tuplas** son útiles cuando necesitas almacenar un conjunto fijo de elementos, cada uno con un tipo específico, como una pareja nombre-edad o coordenadas (x, y).

```ts
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