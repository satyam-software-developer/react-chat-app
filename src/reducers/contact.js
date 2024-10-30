// Importing action types for fetching contacts and adding messages
import { FETCH_CONTACTS, ADD_MESSAGE } from "../actions/actionTypes";

// Initial state for the contacts reducer, starting with an empty contacts array
const initialState = {
  contacts: [], // Array to hold the contact objects
};

// Default export of the contacts reducer function
export default function contacts(state = initialState, action) {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for fetching contacts
    case FETCH_CONTACTS:
      return {
        ...state, // Spread the current state
        contacts: action.contacts, // Update contacts with the fetched contacts from the action
      };

    // Case for adding a message to a contact's chat log
    case ADD_MESSAGE:
      // Create a copy of the current contacts array
      const updatedcontacts = [...state.contacts];

      // Find the contact in the updated contacts array that matches the user ID from the action
      const user = updatedcontacts.find(
        (contact) => contact.id === action.userId
      );

      // Push the new message into the contact's chat log
      user.chatlog.push(action.message);

      // Return the updated state with the modified contacts array
      return {
        ...state, // Spread the current state
        contacts: [...updatedcontacts], // Update contacts with the modified array
      };

    // Default case to return the current state if no action type matches
    default:
      return state;
  }
} // End of contacts reducer function
