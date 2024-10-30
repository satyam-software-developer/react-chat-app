// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Import global CSS styles
import "./index.css";

// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import the main App component
import App from "./components/App";

// Import Redux Provider to connect React with Redux store
import { Provider } from "react-redux";

// Import HashRouter from react-router-dom for routing
import { HashRouter as Router } from "react-router-dom";

// Import the function to configure the Redux store
import { configureStore } from "./store";

// Create the Redux store by calling the configureStore function
const store = configureStore();

// Render the React application into the DOM
ReactDOM.render(
  <React.StrictMode>
    {/* Router provides routing capabilities */}
    <Router>
      {/* Provider makes the Redux store available to the App component */}
      <Provider store={store}>
        {/* Render the main App component */}
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  // Specify the HTML element with ID 'root' as the target for rendering
  document.getElementById("root")
);
