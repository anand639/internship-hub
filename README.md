# Internship Portal - MERN Stack

Welcome to the Internship Portal! This project is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and allows users to apply for internship opportunities.

## Features

- **User Authentication**: Secure registration, login, and logout using JWT (JSON Web Tokens).
- **Opportunities Page**: 
  - Viewable by both logged-in and logged-out users.
  - Only logged-in users can apply to opportunities.
  - Users can see the opportunities they have applied to.
  - Logged-out users will be redirected to the login page if they try to apply.

## Pages

1. **Login & Registration Page**:
   - Register new users.
   - Secure user login and logout functionality.

2. **Opportunities Page**:
   - Fetch opportunities from a specified link and store them in a local MongoDB database.
   - Display opportunities with the following details:
     - Profile name
     - Company name
     - Stipend
     - Location
     - Duration
     - Start date

## Database

- **MongoDB**: Used to store user and opportunity information.

## Deployment

- Deploy the application on a cloud platform like AWS for online accessibility.

## Constraints

- Prioritize functionality over advanced features or extensive styling.
- Ensure code quality and readability.
