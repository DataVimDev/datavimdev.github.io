---
cover: /assets/images/forest-ocean-sunset.png
icon: pen
date: 2026-05-13
category:
  - python
tag:
  - engineering
  - data
star: true
sticky: true
---

# Pydantic v2 Models or dataclasses?

Python dataclasses (introduced in PEP 557) are excellent for reducing boilerplate in classes that primarily exist to store data. However, they are essentially "dumb" containers without validation or advanced serialization functionality built in.

Pydantic models, especially with the performance leaps in version 2, transform data models into active gatekeepers. They don't just store data; they ensure the data is correct, coerced, ready for use, and able to transfer the data to other formats for interoperability.

## Runtime Validation: The Missing Piece
The most significant difference is when and how data is verified. Dataclasses assume you are providing the correct types while Pydantic enforces them (possibly by coercion).

### The Dataclass Approach:
```python
from dataclasses import dataclass

@dataclass
class User:
    id: int
    email: str

user = User(id="not-an-int", email=123)
# this should be an error, but isn't without custom validation
```

### The Pydantic v2 Approach:
```python
from pydantic import BaseModel, ValidationError

class User(BaseModel):
    id: int
    email: str

try:
    # This will raise a ValidationError immediately
    user = User(id="not-an-int", email=123)
except ValidationError as e:
    print(e.errors())
```
I've added the try/except so we can see the errors more cleanly.

What if we had the correct type for the email, but an email is a specifically structured string? Pydantic allows us to add field validators (and model validators) that can run before or after built-in validation - so we could add a custom validator on the email. As you can image, this common problem has a solution by installing `pydantic[email]` extras:

```python
from pydantic import BaseModel, EmailStr, ValidationError

class User(BaseModel):
    id: int
    email: EmailStr

try:
    user = User(id=123, email="do not email me")
    print(user1)
except ValidationError as e:
    print(e.errors())

try;
    user2 = User(id=321, email="null@datavim")
    print(user2)
except ValidationError as e:
    print(e.errors())

try:
    user3 = User(id=121, email="null@datavim.dev")
    print(user3)
except ValidationError as e:
    print(e.errors())

```

Here we can see not just the more advanced validation from the `EmailStr` type, but also the clear error messages that address the first issue encountered. We can see how production ready pydantic is - validation and informative error messages are included unlike dataclasses.

## Type Coercion: Intelligence over Rigidity
Pydantic doesn't just fail on wrong types; it attempts to resolve them. This is particularly useful when dealing with data from environment variables, JSON payloads, or databases where types might arrive as strings.

Pydantic: If you pass a string "123" to a field typed as an int, Pydantic v2 will automatically coerce it to the integer 123. This is very helpful timestamps which may come in as strings in a wide array of formats but can be coerced to datetime objects.

Dataclass: A dataclass will simply store the string "123", potentially causing a TypeError much later in your business logic.

## Serialization and Performance
In Pydantic v1, performance was sometimes a concern. Pydantic v2 moved its core logic to Rust, making it significantly faster than standard library solutions for serialization and validation.

Serialization Comparison:

Dataclasses: Requires the `asdict()` utility. It is recursive but can be slow and lacks fine-grained control over naming conventions (e.g., converting snake_case to camelCase for an API). Writing complex dataclasses to JSON often requires writing a custom JSON encoder in my experience.

Pydantic v2: Uses model_dump() and model_dump_json() which provide built-in support for aliases, exclusions, and custom encoders.

```python
class Configuration(BaseModel):
    password: str
    api_key: str = Field(serialization_alias="apiKey")
    timeout: int = 30
    call_back_url: str | None = None


config = Configuration(api_key="secret", password="1234")
print(config.model_dump(by_alias=True, exclude="password", exclude_none=True)) 
# Output: {'apiKey': 'secret', 'timeout': 30}
```

## Complex Types and Ecosystem Integration
Pydantic shines when models become nested or require complex validation (like Union types, Literal, or datetime).

Nested Models: Pydantic handles nested JSON structures natively, validating every level of the tree.

Ecosystem: Tools like FastAPI, SQLModel, and LangChain are built on Pydantic. Using Pydantic in your own modules ensures seamless compatibility with the modern Python data stack.

## When to Use Dataclasses?
While Pydantic is the winner for most applications, dataclasses remain relevant for:
1. Zero-dependency environments: When you cannot add external packages.
2. Internal state management: For simple objects that never touch an external API or user input.

Pydantic is a dependency of tools like FastAPI, LangChain, and many others. If it's already included in your environment then it doesn't make much sense to not take advantage of it. 

For any application that interacts with external data, such as: web API, a database, or a configuration file - Pydantic v2 is the clear choice. It provides a "parse, don't validate" philosophy that catches bugs at the boundary of your system rather than in the middle of your execution and can be easily customised when needed.
