const chatContainer = document.getElementById('chatContainer');
const authContainer = document.getElementById('authContainer');
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const voiceButton = document.getElementById('voiceButton');
const loginButton = document.getElementById('loginButton');
const authError = document.getElementById('authError');

// Sample user credentials (for demonstration purposes)
const USER_CREDENTIALS = {
    username: 'user',
    password: 'password'
};

// Your API key for the chatbot service
const apiKey = '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'; 

document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        addMessage('user', userInput);
        document.getElementById('userInput').value = '';
        getBotResponse(userInput);
    }
});

// Load conversation history from local storage
const loadConversationHistory = () => {
    const history = JSON.parse(localStorage.getItem('conversationHistory')) || [];
    history.forEach(msg => {
       displayMessage(msg.text, msg.sender, msg.timestamp);
    });
};

// Display messages in the chatbox
const displayMessage = (text, sender, timestamp) => {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text} <span class="timestamp">${new Date(timestamp).toLocaleTimeString()}</span>`;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
};

// Save conversation history to local storage
const saveConversationHistory = (text, sender) => {
    const history = JSON.parse(localStorage.getItem('conversationHistory')) || [];
    history.push({ text, sender, timestamp: Date.now() });
    localStorage.setItem('conversationHistory', JSON.stringify(history));
};

// Handle user authentication
const authenticateUser  = (username, password) => {
    return username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password;
};

// Send message to the chatbot API
const sendMessageToAPI = async (message) => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Specify the model you want to use
                messages: [{ role: 'user', content: userInput }]
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.reply; // Assuming the API returns a JSON object with a 'reply' field
    } catch (error) {
        console.error('Error fetching data from API:', error);
        alert('There was an error communicating with the chatbot. Please try again later.');
        return null;
    }
};

// Handle sending messages
const handleSendMessage = async () => {
    const message = userInput.value.trim();
    if (message) {
        displayMessage(message, 'user', Date.now());
        saveConversationHistory(message, 'user');
        userInput.value = '';

        const botReply = await sendMessageToAPI(message);
        if (botReply) {
            displayMessage(botReply, 'bot', Date.now());
            saveConversationHistory(botReply, 'bot');
        }
    }
};

// Handle voice input
const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            handleSendMessage();
        };

        recognition.onerror = (event) => {
           console.error('Speech recognition error:', event.error);
            alert('There was an error with voice recognition. Please try again.');
        };

        recognition.start();
    };
    
    // Handle user login
    const handleLogin = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        if (authenticateUser (username, password)) {
            authContainer.style.display = 'none';
            chatContainer.style.display = 'block';
            loadConversationHistory();
        } else {
            authError.textContent = 'Invalid username or password. Please try again.';
        }
    };
    
    // Event listeners
    sendButton.addEventListener('click', handleSendMessage);
    voiceButton.addEventListener('click', handleVoiceInput);
    loginButton.addEventListener('click', handleLogin);
    
    // Initialize chat container as hidden
    chatContainer.style.display = 'none';
