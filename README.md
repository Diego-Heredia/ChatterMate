# Chatter-mate

## Introduction

Chatter-mate is a social media application inspired by Instagram, but with a simpler and more focused design. Built using React.js, Appwrite for backend and database management, Tailwind CSS for styling, and React Query for efficient data fetching, this project showcases my skills in full-stack development and my passion for creating engaging user experiences.

## Screenshots

### Sign-In Page

![Sign-In Page](/public/assets/screenshots/chatter-mate.vercel.app_sign-in.png)

### Home Page

![Home Page](/public/assets/screenshots/chatter-mate.vercel.app_home.png)

### Explore Page

![Explore Page](/public/assets/screenshots/chatter-mate.vercel.app_explore.png)

### Profile Page

![Profile Page](/public/assets/screenshots/chatter-mate.vercel.app_profile.png)

### All Users

![All Users](/public/assets/screenshots/chatter-mate.vercel.app_all_users.png)

## Features

- **User Authentication**: Secure login and registration system.
- **Post Creation**: Users can create, edit, and delete posts.
- **Real-time Updates**: Leveraging React Query for real-time data fetching and updates.
- **Responsive Design**: Tailwind CSS ensures a smooth, responsive layout across various devices.
- **Interactive UI**: A user-friendly interface that's easy to navigate.

## Technologies Used

- **Frontend**: React.js
- **Backend & Database**: Appwrite
- **Styling**: Tailwind CSS
- **Data Management**: React Query

## Installation and Setup

To get Chatter-mate up and running on your local machine, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Diego-Heredia/ChatterMate
   cd Chatter-mate
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Appwrite**

   - Ensure you have Appwrite installed and running on your system.
   - Configure your Appwrite project and obtain your project ID and API endpoint.

4. **Environment Variables**

   - Create a `.env` file in the project root.
   - Be sure you have all these variables in your `.env`:
     ```
     VITE_APPWRITE_PROJECT_ID=your_project_id
     VITE_APPWRITE_URL=your_appwrite_endpoint
     VITE_APPWRITE_STORAGE_ID=your_storage_id
     VITE_APPWRITE_DATABASE_ID=your_database_id
     VITE_APPWRITE_SAVES_COLLECTION_ID=your_SAVES_COLLECTION_id
     VITE_APPWRITE_POST_COLLECTION_ID=your_POST_COLLECTION_id
     VITE_APPWRITE_USER_COLLECTION_ID=your_USER_COLLECTION_id
     ```

5. **Run the Application**
   ```bash
   npm start
   ```

## Important Setup Notes

Before running the application, ensure the following are properly set up in your Appwrite console:

- **Collections Creation**: Create the necessary collections for Users, Posts, and Saves in your Appwrite database. Each collection should have the required fields and data types as per your application's data structure.

- **Relations Setup**: Establish the appropriate relations between these collections. This includes linking user data with their posts, saves, and any other relational data your application requires.

- **Media Bucket**: Set up a storage bucket in Appwrite for handling media uploads. This is crucial for the post creation feature where users can upload images or other media.

Make sure these configurations are done correctly to ensure smooth operation and data management in your Chatter-mate application.
