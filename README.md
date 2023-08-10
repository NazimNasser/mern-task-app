# Task Management Application (MERN Stack)

This is a Task Management Application developed using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to manage tasks by adding, editing, and deleting them. Each task includes a title, description, due date, and completion status.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Up the Database](#setting-up-the-database)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-task-app.git
   cd mern-task-app

1. Install backend dependencies:
    cd backend
    npm install

2. Install frontend dependencies:
    cd /frontend
    npm install

## Setting Up the Backend

Configure the backend environment:

1. Create a .env file in the backend directory.

2. Add your MongoDB connection URI to the .env file:
    MONGO_URI='mongodb+srv://NazimNasser:portfolio@cluster0.v2ooh.mongodb.net/taskManagement?retryWrites=true&w=majority'

## Running the Application

Start the backend and frontend servers:

1. Start the backend server:

    cd backend

    npm start

    The backend server will be running at http://localhost:5000.

2. In a separate terminal, start the frontend development server:

    cd frontend

    npm run dev

The frontend development server will be running at http://localhost:3000.

3. Open your web browser and go to http://localhost:3000 to access the Task Management Application.

