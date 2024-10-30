// Import React library for creating the component
import React from "react";

// Define a functional component named ContactAvatar
// It accepts an "image" prop, which represents the URL of the contact's avatar image
function ContactAvatar({ image }) {
  return (
    // A div container to wrap the avatar image
    <div>
      {/* Render an image with the provided "image" URL as the source */}
      {/* "alt" provides alternative text for accessibility if the image cannot load */}
      {/* The class "avatar" can be styled using CSS to define the appearance of the avatar */}
      <img src={image} alt="user-avatar" className="avatar" />
    </div>
  );
}

// Export the ContactAvatar component for use in other parts of the app
export default ContactAvatar;
