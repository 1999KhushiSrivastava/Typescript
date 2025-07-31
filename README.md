# Typescript

# RESTful API for Author & Book Management

A robust RESTful API built with TypeScript, Node.js, Express, and MongoDB (Mongoose) for managing authors and books. The API supports full CRUD operations for both entities, with clear relationships and modular code structure.

## Features
- CRUD operations for Authors and Books
- Type safety with TypeScript
- MongoDB integration via Mongoose
- Modular MVC architecture
- Input validation and error handling
- Ready for integration with frontend or third-party services

## Technology Stack
- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB** (with **Mongoose** ODM)

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Configure your MongoDB connection string in your environment variables or config file.
4. Start the server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## API Endpoints

### Author Endpoints
| Method | Endpoint                  | Description                |
|--------|---------------------------|----------------------------|
| POST   | `/authors/create`         | Create a new author        |
| GET    | `/authors/get/:authorId`  | Get author by ID           |
| GET    | `/authors/get/`           | Get all authors            |
| PATCH  | `/authors/update/:authorId`| Update author by ID        |
| DELETE | `/authors/delete/:authorId`| Delete author by ID        |

#### Author Example (Create)
```json
POST /authors/create
{
  "name": "J.K. Rowling"
}
```

### Book Endpoints
| Method | Endpoint                  | Description                |
|--------|---------------------------|----------------------------|
| POST   | `/books/create`           | Create a new book          |
| POST   | `/books/get/:bookId`      | Get book by ID             |
| POST   | `/books/get/`             | Get all books              |
| POST   | `/books/update/:bookId`   | Update book by ID          |
| POST   | `/books/delete/:bookId`   | Delete book by ID          |

#### Book Example (Create)
```json
POST /books/create
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "J.K. Rowling",
  "publishedYear": 1997
}
```

## Data Models

### Author
```ts
interface IAuthor {
  name: string;
}
```

### Book
```ts
interface IBook {
  title: string;
  author: string; // Author's name or ID
  publishedYear: number;
}
```

## Project Structure
```
src/
  controllers/   # Route logic for Authors and Books
  models/        # Mongoose schemas and interfaces
  routes/        # Express route definitions
```

## License
MIT
