### React + Vite

📞 [Phonebook](https://goit-react-hw-08-smoky-ten.vercel.app/)
A web application for convenient management of your personal contacts. The project features registration, authentication, and working with a private collection of contacts.

✨ Main Features

- User Registration: Create a new account to access the app's features.
- Authentication (Login/Logout): Secure login and logout with automatic session restoration after page reload.
- Private Contacts Collection: Each user has their own protected collection of contacts.
- Add/Delete Contacts: Easily manage your records.
- Contact Filtering: Quickly search contacts by name or phone number.
- Responsive Design: User-friendly interface on any device.

🛠️ Technologies

- Frontend:
  React.js, Redux Toolkit (with Redux Persist for auth state), React Router (for routing), Formik (for registration and login forms), JavaScript
  HTML5, CSS3, Toast (for notifications)
- Backend:
  REST API: https://connections-api.goit.global/

📂 Project Structure (Redux)
The project uses a modular Redux structure for state management, ensuring clean and maintainable code.

👣 Routing
Implemented with React Router. Components PrivateRoute and RestrictedRoute are used to wrap public and private pages.
The app includes the following routes:
/ - Home page route.
/register - Public route for new user registration.
/login - Public route for existing user login.
/contacts - Private route for managing the user's contact list.

=====
###🌍Live Demo https://goit-react-hw-08-smoky-ten.vercel.app/
