# Better-Habits

Better-Habits is a JavaScript application designed to help users develop better habits and track their progress. This readme provides an overview of the project structure, key components, installation instructions, usage guidelines, and an overview of the project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Overview](#project-overview)
- [Scripts](#scripts)
- [Tech Stack](#tech-stack)
- [About.jsx](#aboutjsx)
- [DashboardContainer.jsx](#dashboardcontainerjsx)
- [HabitPost.jsx](#habitpostjsx)
- [Home.jsx](#homejsx)
- [Login.jsx](#loginjsx)
- [Navbar.jsx](#navbarjsx)
- [Sidebar.jsx](#sidebarjsx)
- [Signup.jsx](#signupjsx)
- [App.jsx](#appjsx)
- [index.js](#indexjs)
- [server.js](#serverjs)
- [userRouter.js](#userrouterjs)
- [habitRouter.js](#habitrouterjs)
- [Models.js](#modelsjs)
- [habitController.js](#habitcontrollerjs)
- [userController.js](#usercontrollerjs)
- [index.html](#indexhtml)
- [File Structure](#file-structure)

## Project Overview

The Better-Habits project aims to provide users with a platform to develop better habits and track their progress. It utilizes a client-server architecture, with the client-side built using React and the server-side implemented using Express.js and MongoDB.

The application allows users to create new habits, set levels, define alternatives, and receive feedback and scores based on their progress. The dashboard provides an overview of the user's habits and scores, allowing them to track their performance over time.

## Installation

To run the Better-Habits application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/better-habits.git`
2. Navigate to the project directory: `cd better-habits`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`
5. Open your web browser and visit `http://localhost:3000` to access the application.

## Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the server and runs the client-side application in development mode.
- `npm run build`: Builds the client-side application for production deployment.

## Usage

To use the Better-Habits application, follow these steps:

1. Sign up for a new account or log in to an existing account.
2. Navigate to the dashboard to view your habits and scores.
3. Create new habits and track your progress.
4. Interact with the habits to update scores and receive feedback.
5. Explore other features of the application, such as the about page and navigation menu.

##Tech Stack

Front-end:
React
HTML
CSS
JavaScript

Back-end:
Node.js
Express.js
MongoDB

Additional Tools and Libraries:
Bcrypt.js
Cors
Axios
Webpack
Babel


## About.jsx

The About component provides information about the application. It is responsible for rendering the about page and displaying relevant details.

## DashboardContainer.jsx

The DashboardContainer component is responsible for rendering the user's dashboard. It contains various sub-components and handles the logic for displaying the user's habits and scores.

## HabitPost.jsx

The HabitPost component represents a single habit entry. It displays the details of a habit, including its name, levels, alternatives, message, and type. It allows users to interact with the habit by updating scores and tracking progress.

## Home.jsx

The Home component represents the home page of the application. It provides a brief introduction to the Better-Habits project and encourages users to sign up or log in.

## Login.jsx

The Login component handles user authentication and login functionality. It displays a login form and allows users to enter their credentials to access their account.

## Navbar.jsx

The Navbar component represents the navigation bar of the application. It displays the application logo and provides links to different pages, including the home page, about page, dashboard, and friends page.

## Sidebar.jsx

The Sidebar component displays the score board, showing the user's daily score and total score. It is typically used in the dashboard or other relevant pages.

## Signup.jsx

The Signup component handles user registration and sign-up functionality. It displays a sign-up form and allows users to create a new account by providing a username and password.

## App.jsx

The App component is the root component of the application. It sets up the application routing using React Router and defines the routes for different pages.

## index.js

The index.js file is the entry point of the client-side application. It sets up the React app, establishes the browser router for routing, and renders the App component.

## server.js

The server.js file is the main server file for the Better-Habits application. It sets up the Express server, configures middleware, defines routes, and starts the server to listen on a specific port.

## userRouter.js

The userRouter.js file defines the routes related to user management. It handles user sign-up and login functionality, making use of the userController for processing the requests.

## habitRouter.js

The habitRouter.js file defines the routes related to habit management. It handles habit creation, scoring, and retrieving user information, utilizing the habitController for processing the requests.

## Models

.js

The Models.js file defines the Mongoose models for the application. It includes the User and Session models, which are used for storing user information and session data in the MongoDB database.

## habitController.js

The habitController.js file contains the controller functions for handling habit-related operations. It includes functions for creating a new habit, updating scores, and retrieving user information.

## userController.js

The userController.js file contains the controller functions for handling user-related operations. It includes functions for user registration, login, setting session cookies, and checking user authentication.

## index.html

The index.html file represents the main HTML file for the Better-Habits application. It provides the basic structure of the web page and includes the necessary script and link tags to load the client-side JavaScript and CSS files.

## File Structure

The file structure of the Better-Habits project is organized as follows:

```
├── client
│   ├── components
│   │   ├── About.jsx
│   │   ├── DashboardContainer.jsx
│   │   ├── HabitPost.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.html
└── server
    ├── server.js
    ├── routes
    │   ├── userRouter.js
    │   └── habitRouter.js
    ├── models
    │   └── Models.js
    └── controllers
        ├── habitController.js
        └── userController.js
```

The `client` directory contains the client-side code, including the React components and the main entry point (`index.js`).

The `server` directory contains the server-side code, including the server configuration (`server.js`), routes (`userRouter.js` and `habitRouter.js`), models (`Models.js`), and controllers (`habitController.js` and `userController.js`).

Please note that this is a general representation of the file structure and

 may vary depending on the specific implementation of the project.

That's it! You now have a comprehensive readme for the Better-Habits project, following best practices for a JavaScript application.

Better Habits is an application that aims to help people establish long sustainable habits with a novel habit building system.
Paired with a habit tracking social media (feature to come soon), better habits helps you build life-long changes with friends and family.
No more failing New Years Resolutions!

FEATURES TO COMPLETE
- [] ensuring buttons for point incrementation work correctly
- [] ensuring that adding new habits works correctly
- [] Homepage to have more content and have nicer UI
- [] About page styling to have nicer UI
- [] Login and Signup needs to be improved
- [] Cookies
- [] OAuth

- [] BIG: Social media CRUD
