import React from "react"; // Import React library

function RightChatBubble({ message, name, image }) {
  // Define the RightChatBubble functional component
  return (
    <>
      <div className="message-bubble mbr">
        {" "}
        {/* Container for the right chat bubble with styling classes */}
        <img src={image} style={styles.avatar} alt="sender-pic" />{" "}
        {/* Avatar image of the sender */}
        <div className="right-bubble ">
          {" "}
          {/* Container for the bubble content */}
          <div className="text-message">
            {" "}
            {/* Container for the message text and sender name */}
            <p className="name">{name}</p> {/* Display the sender's name */}
            <p className="message">{message.text}</p>{" "}
            {/* Display the message text */}
            <span className="message-timestamp">{message.timestamp}</span>{" "}
            {/* Display the timestamp of the message */}
          </div>
          <div className="bubble-arrow bubble-arrow-alt"></div>{" "}
          {/* Arrow indicating the direction of the bubble */}
        </div>
      </div>
    </>
  );
}

// Styles for the component
const styles = {
  avatar: {
    width: "49px", // Width of the avatar image
    height: "49px", // Height of the avatar image
    borderRadius: "50%", // Make the avatar circular
    margin: "0 10px", // Margin around the avatar for spacing
  },
};

export default RightChatBubble; // Export the RightChatBubble component for use in other parts of the application
