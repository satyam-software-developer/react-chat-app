// Importing the combineReducers function from Redux to combine multiple reducers
import { combineReducers } from "redux";

// Importing the contacts reducer from the contacts file
import contacts from "./contact";

// Importing the user reducer from the user file
import user from "./user";

// Exporting the combined reducer, which combines the contacts and user reducers
export default combineReducers({ contacts, user });
