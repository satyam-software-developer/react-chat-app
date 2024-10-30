// Import React library for creating the component
import React from "react";
// Import the ContactTab component to display each contact
import ContactTab from "./ContactTab";

// Define a functional component named NewConversationTab
function NewConversationTab({ contacts, showNewConvoTab }) {
  // Define a function to handle closing the new conversation tab
  let handleClose = () => {
    // Call the showNewConvoTab prop function with 'false' to indicate the tab should be closed
    showNewConvoTab(false);
  };

  return (
    <>
      {/* Wrapper div for the new conversation tab */}
      <div className="new-convo-tab">
        {/* Header for the new conversation tab */}
        <div className="nct-header">
          <p>Select contact</p> {/* Title indicating the purpose of this tab */}
          {/* Clickable span to close the tab */}
          <span onClick={handleClose}>
            {/* Font Awesome icon (times circle) for closing the tab */}
            <i className="fas fa-2x fa-times-circle"></i>
          </span>
        </div>
        {/* List of contacts; clicking anywhere in this area will close the tab */}
        <div className="nct-list" onClick={handleClose}>
          {/* Map through the contacts array and render a ContactTab for each contact */}
          {contacts.map((contact, index) => (
            <ContactTab contact={contact} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

// Export the NewConversationTab component for use in other parts of the app
export default NewConversationTab;
