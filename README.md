# Appointment-Booking-Functionality-with-Vocal-Generative-AI

A web application for booking appointments with doctors, built using React for the frontend and Flask for the backend. The application integrates Firebase for authentication and Firestore for data storage.

## Features

- User authentication with Firebase
- Search and view doctor profiles
- Book appointments with doctors
- View upcoming, completed, and canceled appointments
- Sync appointments with Google Calendar (future implementation)

## Tech Stack

- Frontend: React
- Backend: Flask (Python)
- Database: Firebase Firestore
- Authentication: Firebase Authentication

## Prerequisites

- Node.js and npm
- Python 3.6+
- Firebase account

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/doctor-appointment-booking.git
   cd doctor-appointment-booking/backend


   Create a Firebase project and download the serviceAccountKey.json file from the Firebase console.

Install the required Python packages:

bash
Copy code
pip install flask firebase-admin faker
Replace 'path/to/serviceAccountKey.json' with the actual path to your Firebase service account key in the app.py file.

Run the Flask app:

bash
Copy code
python app.py
Step 2: Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install the required npm packages:

bash
Copy code
npm install
Create a firebase.js file in the src directory with the following content:

javascript
Copy code
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
Replace the placeholders in the firebaseConfig object with your Firebase project credentials.

Start the React app:

bash
Copy code
npm start
Usage
Open your browser and navigate to http://localhost:3000.
Register or log in using Firebase Authentication.
Search for doctors and book appointments.
View your upcoming, completed, and canceled appointments.
Replace placeholders such as yourusername, your-api-key, your-auth-domain, etc., with your actual details. This README provides step-by-step instructions to set up and run the project.
