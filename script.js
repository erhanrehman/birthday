const candlesContainer = document.getElementById('candles');

// Custom messages for each candle
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

// Create 21 candles
for (let i = 1; i <= 21; i++) {
    const candle = document.createElement('div');
    candle.classList.add('candle');
    candle.dataset.index = i;
    candlesContainer.appendChild(candle);
    
    // When a candle is clicked
    candle.addEventListener('click', function() {
        const textBox = document.createElement('div');
        textBox.classList.add('text-box');
        textBox.innerText = messages[i - 1]; // Use custom message
        document.body.appendChild(textBox);

        // Position the text box next to the clicked candle
        const rect = candle.getBoundingClientRect();
        textBox.style.left = `${rect.left}px`;
        textBox.style.top = `${rect.bottom + 5}px`;
        
        textBox.style.display = 'block';

        // Close the text box when clicked
        textBox.addEventListener('click', () => {
            textBox.remove();
        });
    });
}