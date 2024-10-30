// Import React library for creating the component
import React from "react";

// Define a functional component named NewConversation
function NewConversation(props) {
  // Define a function to handle click events
  let handleClick = () => {
    // Call the showNewConvoTab prop function with 'true' to indicate a new conversation tab should be shown
    props.showNewConvoTab(true);
  };

  return (
    // Wrapper div for the new conversation section
    <div className="new-convo">
      {/* Heading for the conversations section */}
      <p>CONVERSATIONS</p>
      {/* Clickable span that triggers the handleClick function when clicked */}
      <span onClick={handleClick}>
        {/* Font Awesome icon for adding a new conversation (plus icon) */}
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}

// Export the NewConversation component for use in other parts of the app
export default NewConversation;

