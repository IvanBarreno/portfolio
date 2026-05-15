# SOLID Principles

> Five principles for writing software that is easy to maintain, extend, and understand.

## What is it?

SOLID is an acronym for five object-oriented design principles introduced by Robert C. Martin ("Uncle Bob") in the early 2000s. These principles guide developers toward writing code that is modular, flexible, and resistant to the kinds of rot that make codebases painful to work with over time.

SOLID is language-agnostic — while the examples typically use OOP languages, the underlying ideas apply to any codebase.

## Why it matters

Software that violates SOLID principles becomes increasingly painful over time:
- A change in one place breaks unrelated things
- Adding a feature requires touching dozens of files
- Testing requires complex setup because everything is coupled
- New developers can't understand the system

SOLID principles prevent this by defining clear responsibilities and keeping components loosely coupled.

---

## S — Single Responsibility Principle (SRP)

> A class should have one and only one reason to change.

Each class/module should do one thing. If a class handles user authentication AND sends emails AND logs to a file, it has three reasons to change — break it into three classes.

```typescript
// Bad: one class doing too much
class UserService {
  saveUser(user: User) { /* DB logic */ }
  sendWelcomeEmail(user: User) { /* email logic */ }
  logActivity(action: string) { /* logging logic */ }
}

// Good: each class has one responsibility
class UserRepository { save(user: User) {} }
class EmailService { sendWelcome(user: User) {} }
class Logger { log(action: string) {} }
```

---

## O — Open/Closed Principle (OCP)

> Software entities should be open for extension but closed for modification.

Add new behavior by adding new code, not by changing existing code. Use abstractions (interfaces) to extend behavior without touching what already works.

```typescript
interface PaymentProcessor {
  process(amount: number): void;
}
class StripeProcessor implements PaymentProcessor { ... }
class PayPalProcessor implements PaymentProcessor { ... }
// Adding a new payment method = new class, zero existing code changed
```

---

## L — Liskov Substitution Principle (LSP)

> Objects of a subclass should be replaceable for objects of the parent class without breaking the program.

If `Bird` has a `fly()` method and `Penguin` extends `Bird` but can't fly, that's a violation — substituting a `Penguin` where a `Bird` is expected breaks things.

---

## I — Interface Segregation Principle (ISP)

> Clients should not be forced to depend on interfaces they do not use.

Many small, specific interfaces are better than one large "fat" interface. If a class only needs `read()`, it shouldn't be forced to implement `write()` and `delete()` just because they're on the same interface.

---

## D — Dependency Inversion Principle (DIP)

> High-level modules should not depend on low-level modules. Both should depend on abstractions.

Don't hardcode concrete implementations — depend on interfaces. This is the foundation of dependency injection frameworks (NestJS, Spring, Angular).

```typescript
// Bad: high-level module depends on concrete low-level module
class OrderService {
  private db = new MySQLDatabase(); // tightly coupled
}

// Good: depends on abstraction
class OrderService {
  constructor(private db: DatabaseInterface) {} // injected, swappable
}
```

## Related Technologies

OOP · Design Patterns · NestJS · Angular · Spring Boot · Clean Architecture
