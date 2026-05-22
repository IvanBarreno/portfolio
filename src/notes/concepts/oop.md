# OOP (Object-Oriented Programming)

> A programming paradigm that organizes code around objects — data and behavior bundled together.

## What is it?

Object-Oriented Programming (OOP) is a programming paradigm that structures code around **objects** — instances of **classes** that combine data (attributes/fields) and behavior (methods). OOP emerged in the 1960s with Simula, was popularized by Smalltalk and C++, and is the dominant paradigm in languages like Java, C#, Python, PHP, and TypeScript.

OOP is not just a coding style — it is a way of modeling the real world in code.

## Why it matters

OOP is the foundation of most enterprise software, web frameworks, and application architecture. Understanding OOP deeply means understanding:
- How frameworks like Angular, NestJS, Django, and Laravel are built
- How to write code that other developers can extend without reading your implementation
- How to structure large codebases so they remain maintainable as they grow

## The Four Pillars

### 1. Encapsulation
Bundle data and methods together, and control access with visibility modifiers (`public`, `private`, `protected`). Hide the internal implementation — expose only what the user of a class needs to know.

```typescript
class BankAccount {
  private balance: number = 0; // hidden — can't be set directly from outside

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.balance += amount;
  }

  getBalance() { return this.balance; } // controlled read access
}
```

### 2. Inheritance
A class can **inherit** properties and methods from a parent class, extending or overriding its behavior. Promotes code reuse.

```typescript
class Animal {
  speak() { return "..."; }
}
class Dog extends Animal {
  speak() { return "Woof!"; } // override
}
```

### 3. Polymorphism
The same interface behaves differently depending on the concrete type. A `Dog` and a `Cat` both `speak()`, but produce different sounds. Code that calls `animal.speak()` doesn't need to know which type it's dealing with.

### 4. Abstraction
Hide complex implementation details behind a simple interface. A `Car` class has a `start()` method — the driver doesn't need to know about fuel injection and ignition timing.

## Key Concepts

- **Class** — a blueprint defining the structure and behavior of objects
- **Object/Instance** — a concrete realization of a class, created with `new`
- **Constructor** — a special method called when an object is created; used for initialization
- **Interface** — defines a contract (what methods a class must implement) without providing the implementation
- **Abstract class** — a class that can't be instantiated; defines shared behavior and forces subclasses to implement abstract methods
- **Composition over inheritance** — prefer building objects from smaller objects rather than deep inheritance hierarchies

## Related Technologies

SOLID · Design Patterns · Java · TypeScript · Python · C# · NestJS · Angular
