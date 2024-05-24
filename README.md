# Workout Tracker - MERN Stack

Welcome to the Workout Tracker! This application allows users to log, track, and manage their workouts efficiently. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides a seamless and interactive user experience.

## Deployed [Link](https://1732-mern-workout.netlify.app/)

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)

## Features

- **Workout Logging**: Add, update, and delete workout logs.
- **Progress Tracking**: Visualize workout progress over time.
- **Responsive Design**: Works on both desktop and mobile devices.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AJ1732/mern_stack.git
    cd mern_stack
    ```

2. **Install server dependencies:**
    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies:**
    ```bash
    cd ../client
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `server` directory and add the following variables:

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

5. **Run the application:**

    Start the server:
    ```bash
    cd server
    npm start
    ```

    Start the client:
    ```bash
    cd ../client
    npm run dev
    ```

    The application should now be running on your localhost.

## Usage

- **Add Workout**: Log a new workout session with details like exercise, reps, and load of weights used.
- **Delete Workout**: Remove any of your logged workouts.

## API Endpoints

### Workouts

- **GET /api/workouts**: Get all workouts for the logged-in user.
- **POST /api/workouts**: Add a new workout.
- **PUT /api/workouts/:id**: Update an existing workout.
- **DELETE /api/workouts/:id**: Delete a workout.

## Technologies Used

- **MongoDB**: Database
- **Express.js**: Backend framework
- **React.js**: Frontend library
- **Node.js**: Server environment
- **TailwindCSS**: For styling

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request.

Please ensure your code follows coding standards and includes appropriate tests.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding! 🚀
