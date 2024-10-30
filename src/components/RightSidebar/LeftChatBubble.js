// Import React library for creating the component
import React from "react";

// Define a functional component named LeftChatBubble
// It accepts props: message, name, and image
function LeftChatBubble({ message, name, image }) {
  return (
    <>
      {/* Wrapper div for the left chat bubble */}
      <div className="message-bubble mbl">
        {/* Display the sender's avatar image */}
        {/* The "src" is set to the provided image URL, and "alt" provides alternative text for accessibility */}
        <img src={image} style={styles.avatar} alt="sender-pic" />{" "}
        {/* Inner div for the chat bubble content */}
        <div className="left-bubble ">
          <div className="text-message">
            {/* Display the sender's name */}
            <p className="name">{name}</p>
            {/* Display the message text */}
            <p className="message">{message.text}</p>
            {/* Display the timestamp of the message */}
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
          {/* Div for the arrow pointing to the chat bubble */}
          <div className="bubble-arrow "></div>
        </div>
      </div>
    </>
  );
}

// Define styles for the avatar image using a JavaScript object
const styles = {
  avatar: {
    width: "49px", // Set width of the avatar image
    height: "49px", // Set height of the avatar image
    borderRadius: "50%", // Make the avatar circular
    margin: "0 15px", // Add horizontal margin for spacing
  },
};

// Export the LeftChatBubble component for use in other parts of the app
export default LeftChatBubble;
