# Chatbot
A versatile application that can conduct an online chat conversation via text-to-speech. Its uses span across various fields, from customer interaction to social network marketing and instant messaging clients.

### Project Setup
1. index.html:

- This is the main HTML file that structures the chatbot interface.
- It includes a title, a chatbox for displaying messages, an input field for user input, and a button to send messages.
- The <link> tag connects the CSS file (styles.css) for styling, and the <script> tag connects the JavaScript file (script.js) for functionality.

2. styles.css:

- This file contains all the CSS styles that define the appearance of the chatbot.
- It styles the body, header, chatbox, user messages, bot messages, input field, and send button.
- The styles ensure that the chatbot is visually appealing and user-friendly.

3. script.js:

- This file contains the JavaScript code that adds interactivity to the chatbot.
- It listens for clicks on the send button and retrieves the user input.
- The addMessage function is responsible for displaying messages in the chatbox, distinguishing between user and bot messages.
- A simulated bot response is generated after a short delay to mimic a real conversation.

## Features
- User input field for sending messages
- Chatbox for displaying conversation history
- Bot responses generated using the OpenAI API
- Timestamps for each message

## Explanation of Key Features:

1. "Message Timestamps:" Each message displayed in the chat includes a timestamp formatted to the local time.

2. "User Input:" The user can type messages into an input field, which are then sent to the chatbot API.

3. "API Key Handling:" The API key is included in the headers of the fetch request to authenticate the API call.

4. "User Authentication:" A simple authentication mechanism checks the username and password against predefined credentials.

5. "Conversation History Management:" The conversation history is stored in the browser's local storage. This allows users to retain their chat history even after refreshing the page. The saveConversationHistory function saves each message along with its sender and timestamp, while the loadConversationHistory function retrieves and displays the stored messages when the chat is initialized.

6. "Voice Input Functionality:" The script includes functionality for voice input using the Web Speech API. When the user clicks the voice button, the browser listens for speech input, converts it to text, and automatically sends it as a message to the chatbot.

7. "Error Handling:" The script includes error handling for both the API requests and the speech recognition process. If an error occurs, appropriate messages are displayed to the user, ensuring a smoother user experience.

8. "Dynamic UI Updates:" The chat interface updates dynamically as messages are sent and received. The chat container automatically scrolls to the bottom to keep the latest messages in view.

9. "Event Listeners:" The script sets up event listeners for the send button, voice input button, and login button, allowing users to interact with the chat application seamlessly.

## Technologies Used
- HTML
- CSS
- JavaScript
- OpenAI API

## Prerequisites
- A web browser (e.g., Chrome, Firefox)
- An API key from OpenAI (or another chatbot API of your choice)


### Further Enhancements
- Adding more complex responses, integrating an actual chatbot API, or improving the styling to make it more visually appealing.
- Message timestamps, user authentication, or saving chat history for a more robust application.