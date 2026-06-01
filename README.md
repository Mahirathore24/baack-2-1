# Feedback Tracker API

A beginner-friendly REST API built with Node.js, Express, MongoDB, and JWT authentication. This project supports user registration/login and full CRUD for feedback.

## Features

- User registration and login with JWT
- Feedback CRUD (create, read, update, delete)
- Password hashing with bcryptjs
- CORS support
- Logging and error handling middleware

## Folder Structure

- config
- controllers
- middleware
- models
- routes

## Setup

1. Install dependencies:

```
npm install
```

2. Create a .env file based on .env.example.

3. Start the server:

```
npm run dev
```

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- POST /api/feedback
- GET /api/feedback
- PUT /api/feedback/:id
- DELETE /api/feedback/:id

## Postman Examples

### Register

POST /api/auth/register

```
{
  "name": "Asha",
  "email": "asha@example.com",
  "password": "password123"
}
```

### Login

POST /api/auth/login

```
{
  "email": "asha@example.com",
  "password": "password123"
}
```

### Create Feedback

POST /api/feedback

Headers:

Authorization: Bearer <token>

```
{
  "message": "Great app!",
  "rating": 5
}
```

### Get Feedback

GET /api/feedback

Headers:

Authorization: Bearer <token>

### Update Feedback

PUT /api/feedback/:id

Headers:

Authorization: Bearer <token>

```
{
  "message": "Updated message",
  "rating": 4
}
```

### Delete Feedback

DELETE /api/feedback/:id

Headers:

Authorization: Bearer <token>

## Deployment (Render or Heroku)

1. Set environment variables on the platform:
   - PORT
   - MONGO_URI
   - JWT_SECRET
   - JWT_EXPIRES_IN
   - NODE_ENV
2. Use the start command: `npm start`
3. Ensure the MongoDB Atlas IP access allows your server.

## Viva Explanation (Simple)

- Express creates the server and routes.
- Mongoose connects to MongoDB and defines schemas.
- bcryptjs hashes passwords before saving.
- JWT tokens are created on login and protect private routes.
- Middleware handles logging, authentication, and errors.
- CRUD operations manage feedback for each user.
# baack-2-1
