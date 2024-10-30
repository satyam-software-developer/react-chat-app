import React, { useEffect, useState } from "react"; // Import necessary React libraries and hooks
import { Row, Col, Alert } from "react-bootstrap"; // Import Row, Col, and Alert components from react-bootstrap

// Define the MessageInput functional component
function MessageInput(props) {
  const { newMessageHandler } = props; // Destructure newMessageHandler from props for sending messages
  const [message, setMessage] = useState(""); // State variable to hold the current message input
  const [notification, setNotification] = useState(""); // State for holding the notification message
  const [notificationType, setNotificationType] = useState(""); // State for determining notification type (success or error)

  // useEffect to reset the input value when the contact component changes
  useEffect(() => {
    setMessage(""); // Reset message state to an empty string
  }, [setMessage, props]); // Depend on props to trigger this effect

  // Function to show notifications with a message and type for a brief duration
  const showNotification = (message, type) => {
    setNotification(message); // Set the notification message
    setNotificationType(type); // Set the notification type (success or error)
    setTimeout(() => setNotification(""), 3000); // Clear the notification after 3 seconds
  };

  // Handle changes in the message input field
  let handleInputChange = (e) => {
    e.preventDefault(); // Prevent default form submission
    setMessage(e.target.value); // Update the message state with the input field's value
  };

  // Handle the submit action when sending a message
  let handleSubmit = () => {
    if (message) { // Check if message is not empty
      newMessageHandler(message); // Call the passed handler function with the message
      showNotification("Message sent successfully!", "success"); // Show success notification
    } else {
      showNotification("Type some message text before submitting", "error"); // Show error notification if empty
    }
    setMessage(""); // Clear the input field after submission
    // scroll to the bottom (comment indicating intended functionality not implemented here)
  };

  return (
    <>
      {/* Notification Alert positioned in the top-right corner */}
      {notification && (
        <Alert
          variant={notificationType === "success" ? "success" : "danger"} // Use variant based on notification type
          className="notification-alert" // Apply custom CSS class for positioning
        >
          {notification} {/* Display notification message */}
        </Alert>
      )}

      {/* Layout for message input and send button using react-bootstrap */}
      <Row className="message-input">
        <Col xs={5} lg={5}> {/* Column for the message input field */}
          <input
            type="text" // Input type is text
            placeholder="Message" // Placeholder text for the input field
            value={message} // Bind input value to message state
            onChange={handleInputChange} // Handle input changes with defined function
          />
        </Col>
        <Col xs={3} lg={4}> {/* Column for the send button */}
          <button className="send-button" onClick={handleSubmit}> {/* Button triggers message submission */}
            Send
          </button>
        </Col>
      </Row>

      {/* Inline style for positioning the notification alert */}
      <style jsx>{`
        .notification-alert {
          position: fixed; /* Fixes position on screen */
          top: 10px; /* Positions at the top */
          right: 10px; /* Positions in the right corner */
          z-index: 1050; /* Places above other elements */
          min-width: 200px; /* Sets minimum width for readability */
          text-align: center; /* Centers text within the alert */
        }
      `}</style>
    </>
  );
}

export default MessageInput; // Export MessageInput component for use in other parts of the application
