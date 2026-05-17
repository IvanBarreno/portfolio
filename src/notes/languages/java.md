# Java

> Write once, run anywhere — the enterprise language that shaped modern software architecture.

## What is it?

Java is a statically typed, object-oriented, compiled language created by James Gosling at Sun Microsystems in 1995. It compiles to bytecode that runs on the **Java Virtual Machine (JVM)**, which is what makes it platform-independent — the same `.class` file runs on Windows, Linux, and macOS without modification.

For over two decades Java dominated enterprise software, Android development, and large-scale backend systems. Concepts pioneered and popularized by Java — dependency injection, OOP at scale, design patterns — are foundational across all modern languages.

## Why it matters

Java's design decisions heavily influenced how we think about software architecture:

- **Enterprise systems** — banking, insurance, government, healthcare run on Java
- **Android development** — the original Android language (now alongside Kotlin)
- **Spring ecosystem** — Spring Boot is one of the most widely used backend frameworks in the world
- **Big Data** — Hadoop, Kafka, Spark are all JVM-based
- **Microservices** — Spring Boot and Quarkus are dominant in enterprise microservices

## Key Concepts

- **JVM (Java Virtual Machine)** — an abstract machine that runs Java bytecode; handles memory management and garbage collection
- **Garbage collection** — automatic memory management; the JVM frees memory no longer referenced
- **Strong static typing** — every variable has a declared type; checked at compile time
- **Object-Oriented** — everything (almost) is a class; supports encapsulation, inheritance, polymorphism, and abstraction
- **Interfaces & abstract classes** — define contracts and partial implementations
- **Checked exceptions** — Java forces you to handle certain exceptions at compile time
- **Concurrency** — built-in threading model with `synchronized`, `volatile`, and the `java.util.concurrent` package
- **Generics** — type-safe collections and methods (similar concept to TypeScript generics)

## Quick Example

```java
// Generic stack implementation
public class Stack<T> {
    private List<T> items = new ArrayList<>();

    public void push(T item) {
        items.add(item);
    }

    public T pop() {
        if (items.isEmpty()) throw new EmptyStackException();
        return items.remove(items.size() - 1);
    }

    public boolean isEmpty() {
        return items.isEmpty();
    }
}

// Usage
Stack<String> stack = new Stack<>();
stack.push("hello");
String value = stack.pop(); // "hello"
```

## Related Technologies

Spring Boot · Maven · Gradle · Kotlin · JVM · Hibernate · JPA
