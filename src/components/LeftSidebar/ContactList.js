// Import React library for creating the component
import React from "react";
// Import the ContactTab component to display each contact
import ContactTab from "./ContactTab";

// Define a functional component named ContactList
// It accepts "contacts" as a prop, which is an array of contact objects
function ContactList({ contacts }) {
  return (
    <>
      {/* Main container for the contact list */}
      <div style={styles.contactList} className="contactscreen">
        {/* Map through the contacts array and render a ContactTab for each contact */}
        {contacts.map((contact, index) => (
          // Render ContactTab component, passing the contact as a prop
          // Each ContactTab needs a unique key; using index as a key here
          <ContactTab
            contact={contact}
            key={index}
            style={styles.contactText}
          />
        ))}
      </div>
    </>
  );
}

// Define styles for the component using a JavaScript object
const styles = {
  contactList: {
    overflowY: "scroll", // Enable vertical scrolling if the list exceeds the height
    height: "80vh", // Set the height of the contact list to 80% of the viewport height
    zIndex: "2", // Set the z-index to ensure it appears above other elements
    backgroundColor: "#1a1a2e", // Dark background color for the contact list
    color: "white", // White text color for visibility
    padding: "10px", // Optional padding for better layout
  },
  contactText: {
    color: "white", // Ensure text color for individual contacts is white
  },
};

// Export the ContactList component for use in other parts of the app
export default ContactList;
