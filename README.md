# User-Management-App

This is a user management app built with React. It allows users to sign up, log in, and view their profile information. The app utilizes Redux for state management and React Router for handling routing between different pages.

Live Link :

## Routes

The app has the following routes:

`/signup`: This is the page for user registration. It includes a form with the following fields:

    Name: Required, minimum 15 characters
    Email: Required, valid email format
    Phone Number: Required, valid Indian phone number format
    Password: Required
    Confirm Password: Required, must match the password
    Profile Picture: Required, must be a JPG or PNG image file less than 2MB

`/login`: This is the page for user login. Users can enter their credentials to log in to the app and access the home page.

    Email: Required, valid email format
    Password: Required

`/home`: This is the page after the user logs in. It displays the user's profile picture, name, email, and phone number. At the top right corner, there is a logout button. Clicking on the logout button will reset the user data and redirect the user back to the login page.

`/404`: This is the page that is displayed when a user manually enters an incorrect or non-existent route. It notifies the user that the requested page does not exist.

## Form Validation

The app utilizes the Formik library for handling form validations. The following validations are implemented:

    Name: Required, minimum 15 characters
    Email: Required, valid email format
    Phone Number: Required, valid Indian phone number format
    Password and Confirm Password: Must match
    Profile Picture: Required, must be a JPG or PNG image file less than 2MB

## Redux

The app uses Redux for state management. After successful login or form submission, the user data is saved to the Redux store. This allows the user's information to persist across different components.

## Storage

The app uses local storage to store and retrive information about users
