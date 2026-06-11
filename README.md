# JWT Authentication System

A full-stack authentication system built using React, Node.js, Express.js, MongoDB, JWT, and bcrypt.

## Features

* User Signup
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Protected Routes
* User Profile API
* Logout Functionality
* Auto Login using Stored JWT Token
* MongoDB Database Integration
* Role-Based Authorization Support (Admin/User)

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv
* cors

## Project Structure

jwt-project/

├── auth-frontend/

│   ├── src/

│   │   ├── Login.jsx

│   │   ├── Dashboard.jsx

│   │   └── App.jsx

│   └── package.json

├── middleware/

│   ├── authMiddleware.js

│   └── adminMiddleware.js

├── models/

│   └── User.js

├── routes/

│   └── auth.js

├── .env

├── server.js

├── package.json

└── README.md

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/jwt-auth-project.git
cd jwt-auth-project
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd auth-frontend
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run Backend

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

## Run Frontend

```bash
cd auth-frontend
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Endpoints

### Signup

```http
POST /api/auth/signup
```

Request:

```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

### Login

```http
POST /api/auth/login
```

Request:

```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

### Dashboard (Protected)

```http
GET /api/auth/dashboard
```

Header:

```text
Authorization: Bearer JWT_TOKEN
```

### Profile (Protected)

```http
GET /api/auth/profile
```

Header:

```text
Authorization: Bearer JWT_TOKEN
```

## Security Features

* Passwords are hashed using bcrypt.
* JWT tokens are used for authentication.
* Protected API routes using middleware.
* Environment variables stored in `.env`.
* User passwords are never stored in plain text.

## Future Enhancements

* Refresh Tokens
* Forgot Password
* Email Verification
* Admin Dashboard
* Chatbot Integration with JWT Authentication
* Deployment on Render/Vercel

## Author

Subash

Built as a learning project to understand authentication, authorization, JWT, React, Express, and MongoDB.
