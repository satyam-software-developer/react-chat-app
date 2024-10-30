// Import React library for creating the component
import React from "react";

// Define a functional component named ProfileHeader
// It accepts a "user" prop, which contains the user's profile information
function ProfileHeader({ user }) {
  return (
    <>
      {/* Wrapper div for the profile header section */}
      <div className="header">
        {/* Display the user's avatar image */}
        {/* The "src" is set to the user's image URL, and "alt" provides alternative text for accessibility */}
        <img className="avatar" src={user.image} alt="profile-pic" />
        {/* Display the user's name */}
        <p>{user.name}</p>
      </div>
    </>
  );
}

// Export the ProfileHeader component for use in other parts of the app
export default ProfileHeader;
