# Find Walkthrough at https://youtu.be/Z9iotVuZYkQ

# User-Based React Application Guide

This README provides an overview of a user-based React application that uses Firebase for authentication, React Router for routing, and Tailwind CSS with Flowbite for styling. It is designed to be accessible for developers of all levels, giving you a clear picture of what each file in the project does.

## Overview

This project demonstrates how to build a React application with user authentication. It includes login, dashboard, and user settings components, with route protection to ensure that certain pages are accessible only to authenticated users.

## File Descriptions

### `src/App.js`

The entry point for the React application. It sets up the React Router for navigation between the different pages of the app (Login, Dashboard, and User Settings). It demonstrates how to use routes to manage application views.

### `src/firebase.js`

Contains the Firebase configuration and initialization code. This file sets up Firebase in your project, enabling authentication and other Firebase services.

### `src/Components/Login.js`

Defines the Login component. This component handles user login, including input fields for email and password, and a submit button to log in. It integrates with Firebase to authenticate users.

### `src/Components/Dashboard.js`

Implements the Dashboard component, which is accessible only to users who are logged in. It showcases a simple welcome message and a button to navigate to the User Settings page.

### `src/Components/UserSettings.js`

Contains the User Settings component, allowing users to log out. This component demonstrates how to use Firebase to sign out a user and redirect them to the login page.

### `src/Components/AccessOnAuth.js`

A higher-order component used to protect routes that should be accessible only to authenticated users. It checks the user's authentication status and redirects unauthenticated users to the login page.

### `tailwind.config.js`

The configuration file for Tailwind CSS. It includes paths to all your template files and sets up the Flowbite plugin, ensuring that Tailwind and Flowbite styles are applied correctly in your project.

## Getting Started

To use this application:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Start the development server with `npm start`. Your application will be available at `http://localhost:3000`.

## Prerequisites

- Node.js and npm installed on your machine.
- Basic knowledge of React and JavaScript.

This guide aims to be a starting point for developers looking to understand user authentication and routing in React applications. Feel free to explore and modify the code to suit your needs.
