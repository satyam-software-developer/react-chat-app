import React, { useEffect, useState } from "react"; // Import React and hooks
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks for state management
import { Col, Container, Row } from "react-bootstrap"; // Import layout components from react-bootstrap
import { Route, Routes } from "react-router-dom"; // Import routing components from react-router

import { data } from "../Data/users"; // Import user data
import { updateContacts } from "../actions/contact"; // Import action to update contacts

import "./stylesheets/App.css"; // Import CSS styles for the app
import "./stylesheets/leftSidebar.css"; // Import CSS styles for the left sidebar
import SearchBar from "./LeftSidebar/SearchBar"; // Import SearchBar component
import ContactList from "./LeftSidebar/ContactList"; // Import ContactList component
import ConversationList from "./RightSidebar/ConversationList"; // Import ConversationList component
import NoConvo from "./RightSidebar/NoConvo"; // Import NoConvo component for when there are no conversations
import ProfileHeader from "./LeftSidebar/ProfileHeader"; // Import ProfileHeader component
import NewConversation from "./LeftSidebar/NewConversation"; // Import NewConversation component
import NewConversationTab from "./LeftSidebar/NewConversationTab"; // Import NewConversationTab component

function App() {
  const [contacts, setContacts] = useState([]); // State to hold the list of contacts
  const [searchfield, setSearchField] = useState(""); // State to hold the search input
  const [newConvoTab, showNewConvoTab] = useState(false); // State to control visibility of the new conversation tab
  const user = useSelector((state) => state.user); // Get user data from Redux state
  const stateContacts = useSelector((state) => state.contacts); // Get contacts from Redux state

  const dispatch = useDispatch(); // Initialize Redux dispatch function

  useEffect(() => {
    // Dispatch action to store contacts in Redux state when component mounts
    dispatch(updateContacts(data.profile.contacts));
    setContacts(stateContacts.contacts); // Update local contacts state with Redux contacts
  }, [dispatch, stateContacts.contacts]); // Dependencies for useEffect

  // Handle search input changes
  const onSearchChange = (event) => {
    setSearchField(event.target.value); // Update searchfield state with the new input value
  };

  // Filter contacts based on search input
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchfield.toLowerCase()); // Filter contacts whose names include the search input
  });

  return (
    <Container fluid>
      {" "}
      {/* Use Bootstrap's fluid container for full width */}
      <Row>
        {" "}
        {/* Create a row layout */}
        <Col className="left-sidebar" xs={6} sm={5} md={4} lg={5} xl={4}>
          {" "}
          {/* Define the left sidebar with responsive column sizes */}
          <Row className="left-sidebar-header">
            {" "}
            {/* Row for the sidebar header */}
            <Row className="d-flex align-items-center">
              {" "}
              {/* Inner row to align profile and new conversation button */}
              <Col>
                <ProfileHeader user={user} />{" "}
                {/* Display user's profile header */}
              </Col>
              <Col>
                <NewConversation showNewConvoTab={showNewConvoTab} />{" "}
                {/* Button to create a new conversation */}
              </Col>
            </Row>
            <Row style={{ margin: "auto", paddingTop: "px" }}>
              {" "}
              {/* Row for search bar */}
              <SearchBar searchChange={onSearchChange} />{" "}
              {/* Render the search bar */}
            </Row>
          </Row>
          <Row>
            <ContactList contacts={filteredContacts} />{" "}
            {/* Render filtered contacts list */}
          </Row>
        </Col>
        <Col className="right-sidebar" xs={6} sm={7} md={8} lg={7} xl={8}>
          {" "}
          {/* Define the right sidebar with responsive column sizes */}
          <Routes>
            {" "}
            {/* Define routes for conversation views */}
            <Route
              path="/conversations/:id" // Route for individual conversation
              element={<ConversationList contacts={contacts} />} // Render ConversationList component with contacts
            />
            <Route path="*" element={<NoConvo />} />{" "}
            {/* Route for no conversations found */}
          </Routes>
          {newConvoTab && ( // Conditional rendering for the new conversation tab
            <NewConversationTab
              contacts={contacts} // Pass contacts to NewConversationTab
              showNewConvoTab={showNewConvoTab} // Function to control the visibility of the tab
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App; // Export the App component
