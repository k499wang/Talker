# In Front End
# Project Setup

## Frontend

1. **Create Vite Project**
    ```sh
    npm create vite@latest
    ```
    - Choose `react` and `javascript` when prompted.

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Run Development Server**
    ```sh
    npm run dev
    ```

## Backend

1. **Initialize Node.js Project**
    ```sh
    npm init -y
    ```
    - Update `package.json` to set `"main": "server.js"`.

2. **Install Dependencies**
    ```sh
    npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken
    ```

3. **Run Server**
    ```sh
    npm run server
    ```

4. **Install Nodemon for Development**
    ```sh
    npm install nodemon --save-dev
    ```
    - Use `nodemon` to automatically restart the server on file changes:
      ```sh
      nodemon backend/server.js
      ```

## Additional Tools

- **Postman**: Install for API testing.
- **MongoDB**: Create a new project on the cloud with the free tier.

## Miscellaneous

- **Generate JWT Token**
  ```sh
  openssl rand -base64 32
  ```

- **React Router**
  ```sh
  npm install react-router-dom
  ```

- **State Management**
  ```sh
  npm install zustand
  ```