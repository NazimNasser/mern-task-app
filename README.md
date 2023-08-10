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

## Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository for backend from [here](https://github.com/NazimNasser/mern-task-app):

    ```bash
    git clone https://github.com/NazimNasser/mern-task-app.git

    or for SSH:

    git clone git@github.com:NazimNasser/mern-task-app.git
    cd mern-task-app

2. Clone the repository for frontend from [here](https://github.com/NazimNasser/mern-task-app-frontend):

    ```bash
    git clone https://github.com/NazimNasser/mern-task-app-frontend.git

    or for SSH

    ````bash
    git clone git@github.com:NazimNasser/mern-task-app-frontend.git
    cd mern-task-app

3. Install backend dependencies:

    ```bash
    cd backend
    npm install

4. Install frontend dependencies:
    
    ```bash
    cd /frontend
    npm install

## Setting Up the Database

Configure the backend environment:

1. Create a .env file in the backend directory.

2. Add your MongoDB connection URI to the .env file:

    ```bash
    MONGODB_URI='mongodb+srv://NazimNasser:portfolio@cluster0.v2ooh.mongodb.net/taskManagement?retryWrites=true&w=majority'

## Running the Application

Start the backend and frontend servers:

1. Start the backend server:

    ```bash
    cd backend
    npm run dev or npm start

The backend server will be running at http://localhost:5000.

2. In a separate terminal, start the frontend development server:

    ```bash
    cd frontend
    npm run dev

The frontend development server will be running at http://localhost:3000.

3. Open your web browser and go to http://localhost:3000 to access the Task Management Application.

## Usage

- Use the user interface to add, edit, and delete tasks.
- Mark tasks as completed by toggling the checkbox.
- Sort tasks in ascending or descending order by clicking the "Sort" button.
- Show/hide completed tasks using the "Show Completed" button.
- Filter tasks by due date using the date picker.

## Technologies Used

- Frontend: Next.js, React, Redux Toolkit, Yup, Formik, Tailwind CSS
- Backend: Node.js, Express, MongoDB