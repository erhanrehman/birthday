const messagesContainer = document.getElementById('messages');

// Custom messages for each box
const messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 5",
    "Message 6",
    "Message 7",
    "Message 8",
    "Message 9",
    "Message 10",
    "Message 11",
    "Message 12",
    "Message 13",
    "Message 14",
    "Message 15",
    "Message 16",
    "Message 17",
    "Message 18",
    "Message 19",
    "Message 20",
    "Message 21"
];

// Create 21 message boxes
messages.forEach(message => {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.innerText = message;
    messagesContainer.appendChild(messageBox);
});
