## React Chat App

React chat app built using react for frontend web development.

1. Demo: https://drive.google.com/file/d/1DcX8zmpGtmErAG0jOTFW4u8Ar3MP239a/view?usp=sharing
2. Hosted link: https://satyam-software-developer.github.io/react-chat-app/

# React Chat Application

The React Chat Application is a simple front-end project that simulates a chat interface. It allows a dummy logged-in user to search for conversations by contact name, create new conversations, and send messages. The app features a left sidebar with a list of all conversations, displaying the contact name and the last message. Users can start new conversations by selecting contacts from a pop-up modal. The right-side panel shows messages for the selected conversation and includes an input field to send new messages.

The project uses React Hooks for state management, React Router for navigating between conversations, and optionally, Redux for data persistence to maintain conversations and messages after a page refresh. Dummy data is loaded from a JSON file for simulating contacts and conversations. Alerts notify users of message send success or errors. The app is styled flexibly, focusing on core functionality rather than specific design.

This chat app is an exercise in building an interactive front end using modern React techniques and state management.

# Project Overview

This project is a simple chat application built using React. The app allows a dummy logged-in user to:

- View conversations with contacts.
- Search conversations by contact name.
- Create new conversations.
- Send and view messages within a selected conversation.
- Handle success and error alerts for message sending.
- Use React Router for routing between conversations.
- Load initial data from a JSON file.
- Optionally, Redux is used for state management and persistence, ensuring conversations and messages remain intact after refresh.

# Features

1. Search Conversations

- Conversations can be searched by the contact's name using a search bar.
- The search filters the list of conversations displayed in the sidebar.

2. Conversations List (Left Sidebar)

- Shows all active conversations with contact names and the latest message.
- A "Create Conversation" button allows the user to start a new chat with any contact.

3. Create a New Conversation

- When creating a conversation, a modal pops up, displaying all available contacts from the dummyData.json file.
- Selecting a contact starts a new conversation, or opens an existing one if it has already been started.

4. Messages View (Right-Side Panel)

- Displays the messages of the selected conversation.
- Allows the user to type and send new messages.
- Shows notifications for success and error states when sending a message.

5. State Persistence (Bonus Feature)

- Redux is used for managing conversation and message data.
- Data is persisted such that refreshing the browser does not result in lost conversations or messages.

# Tools and Libraries

- React Hooks: Used for managing state within the functional components.
- React Router: Handles routing between different conversations.
- Redux (Optional): Used for state management and persistence of conversations and messages.
- JSON Data: Dummy data is loaded from a JSON file to simulate contacts and conversations.
- React Context API (if not using Redux): Used for sharing global state (such as alerts or user data) across the app.
- Alert/Notification System: Custom alert system to handle errors and success messages.
  Setup and Installation

# Setup and Installation

Prerequisites

- Node.js and npm installed on your local machine.

# Installation Steps

1. Clone the repository:

- git clone https://github.com/satyam-software-developer/react-chat-app.git

2. Navigate to the project directory:

- cd react-chat-app

2. Install dependencies:

- npm install

3. Start the development server:

- npm start

4. Open the app in your browser at:

- http://localhost:3000

# Usage

1. Search Conversations:

- Type in the search bar located at the top of the sidebar to find conversations by contact name.

2. Create New Conversation:

- Click the "Create Conversation" button.
- Select a contact from the modal to start chatting with them.

3. Send Messages:

- Select a conversation from the sidebar.
- Type your message in the input box and click "Send."

4. Persistence (Optional Feature):

- If Redux is used, the conversations and messages will persist even after a page refresh.

# Project Structure

├── public
│ ├── index.html
├── src
│ ├── components
│ │ ├── ChatWindow.js
│ │ ├── Sidebar.js
│ │ ├── CreateConversationModal.js
│ │ ├── Message.js
│ ├── data
│ │ └── dummyData.json
│ ├── redux (Optional)
│ │ ├── store.js
│ │ ├── actions.js
│ ├── App.js
│ ├── index.js
├── README.md

# Hosting and Deployment

The project is hosted at:

- https://satyam-software-developer.github.io/react-chat-app/

# Steps to Deploy

- For GitHub Pages:
  npm run deploy
- For Netlify:

1. Link your GitHub repository to your Netlify account.
2. Choose your repository and follow the build instructions.

# Future Improvements

- Implement a real-time chat using WebSockets.
- Add authentication and multiple user roles.
- Improve the styling and responsiveness of the UI.

# Conclution

The React Chat Application demonstrates essential concepts in building an interactive and functional chat interface using React. With features like conversation creation, message sending, and search functionality, it highlights the use of React Hooks for state management, React Router for navigation, and optional Redux for persistent data storage. The use of dummy data allows for realistic interaction without backend integration. This project serves as a foundational exercise in modern frontend development, focusing on user interaction, state management, and routing in React.

## License

This project is licensed under the MIT License.

## Author

SATYAM KUMAR
