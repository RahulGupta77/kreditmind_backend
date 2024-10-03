# Backend Documentation

## Deployed Link
[Backend API](https://kreditmind-backend.onrender.com/v1)

## Tools
- **Node.js**
- **Express**
- **MongoDB**

## Approach
- Followed best industry standards coding practices by organizing the project structure into separate folders for routes, middlewares, controllers, and models.
- Implemented **JSON Web Tokens (JWT)** for user authentication and authorization, utilizing cookies to send the JWT token.
- Used **Bcrypt** to encrypt user passwords, enhancing security.
- Employed **MongoDB** and **Mongoose ORM** to store incoming data and design the database schema.

## Challenges
- Resolved CORS errors in the frontend when making API calls.

## How to Run the Code
1. Clone the repository.
2. Navigate to the root folder of the project.
3. In the terminal, execute the following commands:
   ```bash
   npm install
   npm run dev