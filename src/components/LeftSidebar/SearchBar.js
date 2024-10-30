// Import React library for creating the component
import React from "react";

// Define a functional component named SearchBar
// It accepts a "searchChange" prop, which is a function to handle input changes
function SearchBar({ searchChange }) {
  return (
    <>
      {/* Input field for searching conversations */}
      <input
        style={styles.input} // Apply styles from the styles object
        className="mb-3" // Bootstrap class for margin-bottom
        placeholder="Search for conversation" // Placeholder text for the input field
        onChange={searchChange} // Attach the searchChange function to handle input changes
      />
    </>
  );
}

// Define styles for the input field using a JavaScript object
const styles = {
  input: {
    borderRadius: "18px", // Rounded corners for a softer appearance
    width: "100%", // Make the input field take the full width of its container
    backgroundColor: "#1a1a2e", // Set a dark background color for the input
    color: "#fff", // Set the text color to white for contrast
    outline: "none", // Remove the default outline on focus
    margin: "auto", // Center the input field horizontally
    padding: "10px", // Add padding for better spacing inside the input
    border: "1px solid #cccccc", // Light gray border for a subtle look
    boxSizing: "border-box", // Ensure padding is included in the total width and height
  },
};

// Export the SearchBar component for use in other parts of the app
export default SearchBar;
