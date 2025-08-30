# Task Manager App

A full-stack Task Manager application built with React (frontend) and Node.js/Express with MongoDB (backend). This app allows users to create, update, delete, and search tasks efficiently.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as done/undone
- Delete tasks
- Search tasks by name
- Responsive UI with React and Vite
- Toast notifications for user feedback

## Tech Stack

- **Frontend:** React, Vite, React Icons, React Toastify
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Other:** dotenv, CORS, body-parser

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or Atlas)

### Backend Setup

1. Navigate to the `Backend` directory:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your `.env` file with your MongoDB URI and desired port:
   ```
   PORT=4444
   db_url="your_mongodb_connection_string"
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the `Frontend` directory:
   ```sh
   cd Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
.
├── Backend
│   ├── Controllers
│   ├── Models
│   ├── Routes
│   ├── .env
│   ├── package.json
│   └── server.js
└── Frontend
    ├── public
    ├── src
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## API Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Get all tasks
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

