import React from "react"; // Import React library
import "../stylesheets/rightSidebar.css"; // Import CSS styles for the component

function NoConvo() {
  // Define the NoConvo functional component
  return (
    // Return the JSX to be rendered
    <div className="no-chat-background">
      {" "}
      {/* Wrapper div with a class for styling */}
      <h2 style={{ margin: "5rem" }}>
        {" "}
        {/* Heading to prompt the user to start chatting */}
        Let's start to chat!{" "}
        {/* Display text encouraging users to start chatting */}
      </h2>
    </div>
  );
}

export default NoConvo; // Export the NoConvo component for use in other parts of the application
