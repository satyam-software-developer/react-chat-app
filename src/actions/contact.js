// Import the action type constants from the "actionTypes" file
import { FETCH_CONTACTS, ADD_MESSAGE } from "./actionTypes";

// Action creator for updating the contact list
// Accepts "contacts" as a parameter and returns an action object
export function updateContacts(contacts) {
  return {
    // Action type for fetching contacts
    type: FETCH_CONTACTS,

    // Payload: The new contact list to update in the state
    contacts: contacts,
  };
}

// Action creator for adding a new message to a conversation
// Accepts "message" and "userId" as parameters and returns an action object
export function addNewMessage(message, userId) {
  return {
    // Action type for adding a new message
    type: ADD_MESSAGE,

    // Payload: The message content to add
    message,

    // Payload: The ID of the user (contact) to whom the message is sent
    userId,
  };
}
