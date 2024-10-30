// Importing user reducer to get user-specific data (image in this case)
import user from "../reducers/user";

// Define an object `data` that contains profile information
export const data = {
  profile: {
    id: 1, // Unique identifier for the user
    name: "Satyam Kumar", // Name of the user
    image: user.image, // User's image sourced from the user reducer

    // Commented out: Example of a URL for a user's image (not used)
    // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FChris-Hemsworth&psig=AOvVaw3feODZUGhHxppLpg2-K0Ya&ust=1687798795001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjy39Ly3v8CFQAAAAAdAAAAABAE",

    // Array of contacts associated with the user
    contacts: [
      {
        id: 2, // Unique identifier for the contact
        name: "Aman", // Name of the contact
        image: // URL of the contact's image
          "https://st.depositphotos.com/12982378/52204/i/600/depositphotos_522040706-stock-photo-portrait-bearded-asian-man-stylish.jpg",
        chatlog: [ // Array of messages exchanged with the contact
          {
            text: "Hi Bro,How are you!", // Message text
            timestamp: "11:21 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 1, // Unique identifier for the message
          },
          {
            text: "I am fine Satyam. How are you!", // Message text
            timestamp: "11:22 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 2, // Unique identifier for the message
          },
          {
            text: "I am great, Satyam.", // Message text
            timestamp: "10:03 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 3, // Unique identifier for the message
          },
          {
            text: "lets meet", // Message text
            timestamp: "10:04 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 4, // Unique identifier for the message
          },
          {
            text: "Oky Bro !", // Message text
            timestamp: "10:05 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 5, // Unique identifier for the message
          },
        ],
      },
      {
        id: 3, // Unique identifier for the contact
        name: "Antoine", // Name of the contact
        image: // URL of the contact's image
          "https://st.depositphotos.com/12982378/56356/i/600/depositphotos_563563796-stock-photo-young-brunette-man-looking-away.jpg",
        // Commented out: Another potential image URL for the contact
        // "https://media.istockphoto.com/photos/portrait-of-a-confident-young-man-picture-id1141737652?b=1&k=20&m=1141737652&s=170667a&w=0&h=1Ni7irJ6VB9BXN7LbJIdNHP0h5EMoyJcRyvXl5_nzDs=",
        chatlog: [ // Array of messages exchanged with the contact
          {
            text: "Hi !", // Message text
            timestamp: "10:01 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 1, // Unique identifier for the message
          },
          {
            text: "I am fine Antoine, How are you!", // Message text
            timestamp: "10:02 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 2, // Unique identifier for the message
          },
          {
            text: "I am great, Dear.", // Message text
            timestamp: "10:03 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 3, // Unique identifier for the message
          },
          {
            text: "Or maybe not, let me check something and call you. Give me sometime", // Message text
            timestamp: "10:04 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 4, // Unique identifier for the message
          },
          {
            text: "Where r u ??", // Message text
            timestamp: "10:05 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 5, // Unique identifier for the message
          },
        ],
      },
      {
        id: 4, // Unique identifier for the contact
        name: "Sophie", // Name of the contact
        image: // URL of the contact's image
          "https://st3.depositphotos.com/12674628/16943/i/600/depositphotos_169431528-stock-photo-beautiful-student-with-books.jpg",
        chatlog: [ // Array of messages exchanged with the contact
          {
            text: "Hi, Satyam!", // Message text
            timestamp: "10:01 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 1, // Unique identifier for the message
          },
          {
            text: "I am fine Sophie. How are you!", // Message text
            timestamp: "10:02 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 2, // Unique identifier for the message
          },
          {
            text: "I am great, Satyam.", // Message text
            timestamp: "10:03 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 3, // Unique identifier for the message
          },
          {
            text: "r u busy??", // Message text
            timestamp: "10:04 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 4, // Unique identifier for the message
          },
          {
            text: "no!", // Message text
            timestamp: "10:05 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 5, // Unique identifier for the message
          },
        ],
      },
      {
        id: 5, // Unique identifier for the contact
        name: "Alexander", // Name of the contact
        image: // URL of the contact's image
          "https://st3.depositphotos.com/1743476/16188/i/600/depositphotos_161885550-stock-photo-proud-latin-man.jpg",
        chatlog: [], // No messages exchanged yet
      },
      {
        id: 6, // Unique identifier for the contact
        name: "Benjamin", // Name of the contact
        image: // URL of the contact's image
          "https://st3.depositphotos.com/11233746/13899/i/600/depositphotos_138998024-stock-photo-handsome-young-man.jpg",
        chatlog: [ // Array of messages exchanged with the contact
          {
            text: "Hey Benjamin, where is ur Big bro?", // Message text
            timestamp: "10:01 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 1, // Unique identifier for the message
          },
          {
            text: "I don't know anything about that, bro", // Message text
            timestamp: "10:02 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 2, // Unique identifier for the message
          },
          {
            text: "Are you sure, Satyam?", // Message text
            timestamp: "10:03 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 3, // Unique identifier for the message
          },
          {
            text: "Yes, I am sure", // Message text
            timestamp: "10:04 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 4, // Unique identifier for the message
          },
          {
            text: "All right Benjamin...", // Message text
            timestamp: "10:05 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 5, // Unique identifier for the message
          },
        ],
      },
      {
        id: 7, // Unique identifier for the contact
        name: "Johannes", // Name of the contact
        image: // URL of the contact's image
          "https://st3.depositphotos.com/33359910/37659/i/600/depositphotos_376597274-stock-photo-handsome-smiling-young-man-isolated.jpg", // Duplicate image URL (possible error in copy-pasting)
        chatlog: [ // Array of messages exchanged with the contact
          {
            text: "Where are you bro?", // Message text
            timestamp: "10:06 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 1, // Unique identifier for the message
          },
          {
            text: "I'm in Market", // Message text
            timestamp: "10:06 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 2, // Unique identifier for the message
          },
          {
            text: "call me ....", // Message text
            timestamp: "10:07 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 3, // Unique identifier for the message
          },
          {
            text: "ok", // Message text
            timestamp: "10:08 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 4, // Unique identifier for the message
          },
          {
            text: "R u okay??", // Message text
            timestamp: "10:09 AM", // Time the message was sent
            sender: "me", // Sender of the message (user or me)
            message_id: 5, // Unique identifier for the message
          },
          {
            text: "Hmmmmm!", // Message text
            timestamp: "10:09 AM", // Time the message was sent
            sender: "user", // Sender of the message (user or me)
            message_id: 6, // Unique identifier for the message
          },
        ],
      },
      {
        id: 8, // Unique identifier for the contact
        name: "Emma", // Name of the contact
        image: // URL of the contact's image
          "https://st4.depositphotos.com/20363444/28853/i/600/depositphotos_288537332-stock-photo-focused-young-girl-casual-clothes.jpg",
        // Commented out: Another potential image URL for the contact
        // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
        chatlog: [], // No messages exchanged yet
      },
      {
        id: 9, // Unique identifier for the contact
        name: "David", // Name of the contact
        image: // URL of the contact's image
          "https://st2.depositphotos.com/1273995/8790/i/600/depositphotos_87904862-stock-photo-portrait-of-bearded-man.jpg",
        chatlog: [], // No messages exchanged yet
      },
    ], // End of contacts array
  }, // End of profile object
}; // End of data export
