# Event Management Platform

## Overview

The Event Management Platform is a web application designed to help users manage and organize events efficiently. This platform allows users to create, update, and delete events, as well as view event details. The project is built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User authentication and authorization
- Create, update, and delete events
- View event details
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone 
    cd event-management-platform
    ```

2. **Install dependencies**:
    - For the backend:
        ```bash
        cd backend
        npm install
        ```
    - For the frontend:
        ```bash
        cd ../frontend
        npm install
        ```

3. **Set up environment variables**:
    - Create a `.env` file in the [backend](http://_vscodecontentref_/0) directory and add the following variables:
        ```env
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```

4. **Run the application**:
    - Start the backend server:
        ```bash
        cd backend
        npm start
        ```
    - Start the frontend development server:
        ```bash
        cd ../frontend
        npm start
        ```

5. **Open the application**:
    - Open your browser and navigate to `http://localhost:3000`


###Or 
## Online Preview

You can preview the application online at the following link:

[Event Management Platform](https://your-deployment-url.com)


