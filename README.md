# Blood Donation Website

This is a **React-based web application** for blood donation. The platform connects users who wish to donate blood with hospitals that need it, allowing them to register and donate based on their blood group. The website also features an admin dashboard for hospitals to manage blood donation requests and donors.

## Check The Deployed Sites

- **Blood Donation Website**: [https://ircs-user.netlify.app/](https://ircs-user.netlify.app/)
- **Admin Dashboard**: [https://ircs-dashboard.netlify.app/login](https://ircs-dashboard.netlify.app/login)

## Features

### User Features:
- **User Registration**: Donors can register by providing their basic details and blood group.
- **Blood Donation Requests**: Users can select their preferred hospital and donate blood to the respective hospital.
- **Blood Group Matching**: Donors are matched with hospitals needing their blood group.
- **Responsive Design**: The website is mobile-friendly and adapts to different screen sizes.

### Admin Dashboard Features:
- **User Management**: Admins can view, manage, and approve users who wish to donate blood.
- **Donation Tracking**: Admins can track donations, including the number of donors and the status of blood donations.
- **Hospital Management**: Admins can add or remove hospitals from the platform.

## Tech Stack

- **Frontend**: React, JavaScript, HTML, CSS
- **Styling**: Tailwind CSS, DaisyUI, custom CSS for component-specific styles
- **State Management**: React Context API
- **Routing**: React Router
- **Authentication**: Firebase Authentication for user login and signup
- **Backend**: Node.js, Express, MongoDB
- **File Upload**: Cloudinary for image/video uploads
- **Security**: JWT for authentication, bcrypt for password hashing
- **APIs**: Axios for making API requests
- **Icons**: React Icons for UI components

## Installation

### Backend Installation

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install bcrypt cloudinary cookie-parser cors dotenv express mongoose express-fileupload jsonwebtoken validator
   ```

3. Start the backend server:

   ```bash
   npm run dev
   ```

### Frontend Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install axios react-icons react-multi-carousel react-router-dom react-toastify
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   ```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Admin Dashboard Installation

1. Navigate to the dashboard directory:

   ```bash
   cd dashboard
   ```

2. Install dependencies:

   ```bash
   npm install axios react-icons react-router-dom react-toastify
   ```

3. Start the admin dashboard server:

   ```bash
   npm run dev
   ```

The dashboard will be available at [http://localhost:4000](http://localhost:4000) (or another port if specified).

## Usage

- **User Registration**: Users can register and create a profile to begin their blood donation journey.
- **Viewing Available Donations**: After registration, users can view a list of hospitals and blood groups that are currently needed.
- **Donation Confirmation**: After a successful donation, users can track their donation status and see upcoming donation drives.

## Admin Dashboard Usage

- **Login as Admin**: Admins can log in using their credentials on the dashboard to manage donations and users.
- **Manage Donations**: Admins can view all registered donors, approve donations, and manage hospital blood requests.
- **Hospital Management**: Admins can add new hospitals to the platform and update their information.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

### Key Updates:
- **Installation Steps for Backend, Frontend, and Admin Dashboard**: Added detailed instructions for installing dependencies and starting each part of the project (`npm install` for both backend and frontend, with specific packages listed).
- **Backend, Frontend, and Dashboard Directory Structure**: Clearly defined how to navigate to each directory before installing dependencies and starting the respective servers.

This version of the README provides clear, structured instructions for setting up the entire project, from backend to frontend, ensuring that users and contributors can easily follow along.
