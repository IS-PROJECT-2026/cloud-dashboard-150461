document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');
    const promptButtons = document.querySelectorAll('.prompt-btn');

    // Predefined knowledge base response engine
    const kb = [
        {
            keywords: ['baggage', 'luggage', 'weight', 'limit'],
            response: "Economy passengers are permitted 2 pieces up to 23kg each. Business Class passengers are permitted 2 pieces up to 32kg each. Hand luggage must not exceed 10kg."
        },
        {
            keywords: ['change', 'booking', 'reschedule', 'date'],
            response: "Flight modifications can be made up to 2 hours prior to departure via the 'Manage Booking' portal on our main site or through customer care."
        },
        {
            keywords: ['staff', 'leave', 'portal', 'hr', 'internal'],
            response: "Staff leave requests and operational rostering must be submitted through the internal Staff Self-Service (SSS) portal or raised with your department line manager."
        },
        {
            keywords: ['status', 'kq 100', 'flight'],
            response: "Flight KQ 100 (Nairobi NBO to London LHR) is currently running on schedule. Departure terminal: T1A."
        }
    ];

    const defaultResponse = "Thank you for reaching out to Kenya Airways Support. Your query has been logged into our support queue. An agent or automated system will assist you further.";

    // Handle Form Submit
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (text) {
            handleUserMessage(text);
            userInput.value = '';
        }
    });

    // Handle Quick Action Buttons
    promptButtons.forEach(button => {
        button.addEventListener('click', () => {
            const promptText = button.getAttribute('data-prompt');
            handleUserMessage(promptText);
        });
    });

    function handleUserMessage(text) {
        appendMessage(text, 'user');
        
        // Simulate processing delay
        setTimeout(() => {
            const responseText = matchResponse(text);
            appendMessage(responseText, 'system');
        }, 600);
    }

    function matchResponse(input) {
        const lowerInput = input.toLowerCase();
        for (const item of kb) {
            if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
                return item.response;
            }
        }
        return defaultResponse;
    }

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'system-message');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');
        avatarDiv.textContent = sender === 'user' ? 'You' : 'KQ';

        const bubbleDiv = document.createElement('div');
        bubbleDiv.classList.add('bubble');
        bubbleDiv.textContent = text;

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(bubbleDiv);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});