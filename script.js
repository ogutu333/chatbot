document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        addMessage('user', userInput);
        document.getElementById('userInput').value = '';
        // Simulate bot response
        setTimeout(() => {
            addMessage('bot', 'This is a response from the bot.');
        }, 1000);
    }
});

function addMessage(sender, message) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}