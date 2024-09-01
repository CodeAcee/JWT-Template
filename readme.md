# 🔐 JWT Authentication Project

Welcome to the JWT Authentication project! This repository contains a secure and scalable implementation of authentication using JSON Web Tokens (JWT). The project is built with modern technologies and follows best practices for user authentication and session management.

## 🛠 Technologies Used

- ![Node.js](https://lucide.dev/icons/node.svg) **Node.js** - The runtime environment used for the server.
- ![Express.js](https://lucide.dev/icons/server.svg) **Express.js** - A fast and minimalistic web framework for Node.js.
- ![JWT](https://lucide.dev/icons/key.svg) **JSON Web Tokens** - Secure token-based authentication mechanism.
- ![MongoDB](https://lucide.dev/icons/database.svg) **MongoDB** - The database used to store user credentials and session information.
- ![Mongoose](https://lucide.dev/icons/box.svg) **Mongoose** - A MongoDB object modeling tool.
- ![Bcrypt](https://lucide.dev/icons/shield.svg) **Bcrypt** - Password hashing library for secure storage.
- ![dotenv](https://lucide.dev/icons/file-lock.svg) **dotenv** - Environment variable management.

## 📚 Features

- **🔒 Secure Authentication**: Users can securely log in using JWTs, with tokens signed and verified using a secret or public/private key pair.
- **🔑 Token Management**: Access tokens are provided for user authentication, with refresh tokens available to renew access.
- **🔏 Password Encryption**: User passwords are hashed and stored securely using Bcrypt.
- **💾 Persistent Sessions**: User sessions are maintained in MongoDB, allowing for token revocation and session expiration.
- **🛡️ Protected Routes**: Certain routes are protected and require valid JWTs for access, ensuring secure endpoint communication.