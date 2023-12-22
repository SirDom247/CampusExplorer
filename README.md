# CampusExplorer

## Author: Dominic Udousoro <dominicudousoro@live.com>

## Project Description: 
This project is an effort to solve a major challenge commonly encountered by prospective scholars searching for tertiary institutions in each of the States in Nigeria. Consequently, the project provides solution by creating a web application where users can access through a URL and simply input the name of their desired State, and a  list of names and other necessary details  of all tertiary institutions in the State is  displayed on the browser.

The project uses a tech stack comprising of  Flask - a Python framework for the backend logic; MongoDB - a NoSQL database to store users and institutions data; React - a JavaScript framework for frontend, and RESTful API with diffrent endpoints that handleusers registration, authentication and login; retrieve data from a json file containing the institutions data inserting it into MongoDB database, and send query results to the web browser.

## CampusExplorer Web Application File Structure

/CampusExplorer
|-- /findschlapp
|   |-- /backend
|   |   |-- app.py
|   |   |-- /templates
|   |   |   |-- index.html
|   |   |   |-- register.html
|   |   |   |-- login.html
|   |   |   |-- comments.html
|   |   |-- /static
|   |   |   |-- /css
|   |   |   |   |-- styles.css
|   |   |   |-- /js
|   |   |   |   |-- main.js
|   |   |-- /venv (virtual environment)
|-- /frontend
|   |-- /public
|   |   |-- index.html
|   |-- /src
|   |   |-- /components
|   |   |   |-- CommentForm.js
|   |   |   |-- LoginForm.js
|   |   |   |-- RegistrationForm.js
|   |   |   |-- CommentList.js
|   |   |-- App.js
|   |   |-- index.js
|-- .gitignore
|-- requirements.txt

# Backend Files:
*app.py:*  Main Flask application file. Defines routes, interacts with the database, and serves as the backend server.
*institutions_data.json:*  JSON file containing data about institutions that can be inserted into the MongoDB database.
*requirements.txt:*  Lists the Python packages required for the Flask application (Flask, Flask-PyMongo, Flask-Bcrypt).

# Frontend Files:
*App.js:*  Main React component that serves as the entry point for the frontend application.
*index.js:* Renders the App component into the HTML root element.
*components/:*  Directory containing React component files.
*CommentForm.js:* Component for adding comments.
*LoginForm.js:* Component for user login.
*RegistrationForm.js:* Component for user registration.
*CommentList.js:* Component for displaying a list of comments.

# Git and Environment Files:
*.gitignore:* Specifies files and directories to be ignored by Git during version control.
*.env:* Environment file (for sensitive information, not included in the provided structure).

# Node.js and React Files:
*node_modules/:* Directory containing Node.js modules (created when you run npm install).
*public/:* Directory containing static assets like HTML and favicon.
*src/:* Directory containing the source code for the React application.
*App.css:* CSS file for styling the React components.
*App.js:* Main React component.
*index.js:* Renders the main React component into the HTML root element.
*components/:* Directory containing React component files.

These files collectively form the structure of a full-stack web application with a Flask backend and a React frontend. The backend handles server-side logic, database interactions, and API routes, while the frontend provides a user interface with components for comments, login, registration, and comment listing

Thank you for reading and feel free to contact me for inputs, partnership, deals, and projects through:
Email: dominicudosoro@gmail.com
Mobile: +2348027000555.

## CampusExplorer 
**(C)**
