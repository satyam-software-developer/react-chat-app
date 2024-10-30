// Import React library for creating the component
import React from "react";

// Define a functional component named ContactName
// It accepts "name" as a prop, which represents the contact's name
function ContactName({ name }) {
  return (
    // A div container to wrap the contact's name
    <div>
      {/* Render a paragraph element to display the contact's name */}
      {/* The style for the paragraph is applied using the styles object defined below */}
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}

// Define styles for the component using a JavaScript object
const styles = {
  contactText: {
    fontSize: "16px", // Set the font size of the contact's name
    color: "#fff", // Set the text color to white for visibility
    marginBottom: "3px", // Add a small margin below the text for spacing
  },
};

// Export the ContactName component for use in other parts of the app
export default ContactName;


