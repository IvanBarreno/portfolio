# NestJS

> A progressive Node.js framework for building scalable, enterprise-grade server-side applications.

## What is it?

NestJS is a TypeScript-first Node.js framework released in 2017 by Kamil Myśliwiec. It is built on top of Express (or optionally Fastify) and borrows heavily from Angular's architecture — modules, decorators, dependency injection, guards, interceptors. If you know Angular, NestJS will feel immediately familiar.

NestJS fills the gap between Express's minimalism and the need for structure in large applications. It enforces conventions while remaining flexible enough for most use cases.

## Why it matters

Express is powerful but unstructured — every team organizes their Express app differently. NestJS provides:

- A **consistent, opinionated structure** that scales as the team grows
- **Built-in TypeScript** — no configuration needed, everything is typed
- **Dependency Injection** — testable, loosely coupled code by default
- **First-class support** for REST APIs, GraphQL, WebSockets, microservices, gRPC
- **Modularity** — features are organized into modules that can be shared or lazy-loaded

## Key Concepts

- **Modules** — the organizing unit of a NestJS app; each feature (users, auth, products) lives in its own module
- **Controllers** — handle incoming HTTP requests and return responses; decorated with `@Controller`, `@Get`, `@Post`, etc.
- **Services** — contain the business logic; injected into controllers via DI; decorated with `@Injectable`
- **Dependency Injection** — NestJS's DI container automatically provides service instances to classes that declare them
- **Guards** — decide if a request should be handled (authentication, authorization): `@UseGuards(AuthGuard)`
- **Interceptors** — transform response data, add logging, cache results: `@UseInterceptors(LoggingInterceptor)`
- **Pipes** — validate and transform incoming data: `@Body(ValidationPipe)`
- **DTOs (Data Transfer Objects)** — classes that define the shape of request/response data, used with `class-validator`

## Quick Example

```typescript
// users.controller.ts
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // DI

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```

## Related Technologies

Node.js · Express · TypeScript · TypeORM · Prisma · JWT · GraphQL · Docker
