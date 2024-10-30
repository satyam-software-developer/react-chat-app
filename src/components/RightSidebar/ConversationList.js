// Import React library for creating the component
import React from "react";
// Import useParams hook from react-router for accessing route parameters
import { useParams } from "react-router";
// Import the CSS file for styling the right sidebar
import "../stylesheets/rightSidebar.css";
// Import the MessageBox component for displaying messages in a conversation
import MessageBox from "./MessageBox";

// Define a functional component named ConversationList
function ConversationList(props) {
  // Destructure the contacts prop to access the list of contacts
  const { contacts } = props;
  // Use the useParams hook to access the URL parameters
  const { id } = useParams();
  // Convert the id parameter from a string to an integer
  const userId = parseInt(id);
  // Find the user in the contacts array that matches the userId
  const user = contacts.find((contact) => contact.id === userId);

  return (
    <>
      {/* If a user is found, render the MessageBox component with the user's information */}
      {user && <MessageBox user={user} />}
    </>
  );
}

// Export the ConversationList component for use in other parts of the app
export default ConversationList;
