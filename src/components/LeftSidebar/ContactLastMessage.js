// Import React library for creating the component
import React from "react";

// Define a functional component named ContactLastMessage
// It accepts "props" as a parameter, which contains properties passed to the component
function ContactLastMessage(props) {
  return (
    // A div container with a class of "contactText" for styling
    <div className="contactText">
      {/* Render a paragraph element to display the last message text */}
      {/* The message text is accessed from the "chatlog" prop, specifically the "text" property */}
      <p>{props.chatlog.text}</p>
    </div>
  );
}

// Export the ContactLastMessage component for use in other parts of the app
export default ContactLastMessage;
