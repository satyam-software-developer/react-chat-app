// Import React library for creating the component
import React from "react";
// Import sub-components for displaying contact information
import ContactAvatar from "./ContactAvatar";
import ContactLastMessage from "./ContactLastMessage";
import ContactName from "./ContactName";
// Import Link component from react-router-dom for navigation
import { Link } from "react-router-dom";

// Define a functional component named ContactTab
function ContactTab(props) {
  // Destructure the contact object to extract image, name, chatlog, and id
  const { image, name, chatlog, id } = props.contact;

  // Get the length of the chatlog array
  let length = chatlog.length;

  // Define a default message object to show when there are no messages
  const noMessage = {
    text: " 0 message Conversation not initiated",
  };

  return (
    // Link to navigate to the conversation for this contact, using the contact's id
    <Link to={`/conversations/${id}`} className="link-tag">
      {/* Wrapper div for each contact tab */}
      <div className="contact-tab">
        {/* Display the contact's avatar using the ContactAvatar component */}
        <div>
          <ContactAvatar image={image} />
        </div>

        {/* Container for contact name and last message */}
        <div style={{ marginLeft: "16px" }}>
          {/* Display the contact's name using the ContactName component */}
          <ContactName name={name} />

          {/* Display the last message or a default message if there are no messages */}
          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage}
          />
        </div>
      </div>
    </Link>
  );
}

// Export the ContactTab component for use in other parts of the app
export default ContactTab;
