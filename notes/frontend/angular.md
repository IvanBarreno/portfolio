# Angular

> A fully-featured, opinionated frontend framework built by Google for building large-scale applications.

## What is it?

Angular is a TypeScript-based frontend framework developed and maintained by Google, released in 2016 (as Angular 2+, a complete rewrite of the original AngularJS). Unlike React which is a library, Angular is a **complete framework** — it comes with everything built in: routing, forms, HTTP client, dependency injection, testing utilities, and a CLI.

Angular enforces strong conventions and structure, making it particularly suited for large enterprise teams where consistency matters more than flexibility.

## Why it matters

Angular's opinionated nature is both its strength and its tradeoff. In large teams, having one "correct" way to do things reduces decision fatigue and makes codebases consistent across many developers. This is why Angular dominates in enterprise and corporate environments.

Key characteristics:
- **Everything included** — no need to assemble a stack from separate libraries
- **TypeScript-first** — Angular was built with TypeScript from day one
- **Strong CLI** — `ng generate component`, `ng build`, `ng test` — everything through one tool
- **RxJS integration** — Angular uses reactive programming patterns through RxJS for handling async data streams
- **Dependency Injection** — a built-in DI system makes components and services easily testable

## Key Concepts

- **Modules (NgModules)** — organize the app into cohesive blocks (being phased out in favor of standalone components in Angular 17+)
- **Components** — the UI building blocks; each has a template, styles, and a class
- **Services** — singleton classes injected into components to handle business logic, HTTP calls, and shared state
- **Dependency Injection (DI)** — Angular's DI system automatically provides services to components that declare them
- **Directives** — special markers in templates: `*ngIf`, `*ngFor`, `[ngClass]`
- **Reactive Forms** — programmatic form creation with validation, strongly typed
- **RxJS Observables** — Angular's `HttpClient` returns Observables, not Promises
- **Change detection** — Angular tracks changes in component data and updates the DOM accordingly

## Quick Example

```typescript
// A simple Angular component with a service
@Component({
  selector: "app-user-list",
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `,
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {} // DI in action

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
```

## Related Technologies

TypeScript · RxJS · Node.js · NgRx · Angular Material · Karma · Jasmine
