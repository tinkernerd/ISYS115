export async function sendContact(ev) {
    ev.preventDefault();

    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');
    const senderEmail = emailInput.value.trim();
    const senderMessage = messageInput.value.trim();

    const errorContainer = document.getElementById('errorMessages');
    const summaryContainer = document.getElementById('summary');
    const summaryEmail = document.getElementById('summaryEmail');
    const summaryMessage = document.getElementById('summaryMessage');

    errorContainer.innerHTML = ''; // Clear previous errors
    summaryContainer.style.display = 'none';

    try {
        // Validate inputs
        if (!senderEmail) throw new Error('Email address is required.');
        if (!validateEmail(senderEmail)) throw new Error('Invalid email format.');
        if (!senderMessage) throw new Error('Message cannot be empty.');

        // Prepare webhook payload
        const webhookBody = {
            embeds: [{
                title: 'Contact Form Submitted',
                fields: [
                    { name: 'Sender', value: senderEmail },
                    { name: 'Message', value: senderMessage },
                ],
            }],
        };

        const webhookUrl = 'https://discord.com/api/webhooks/1316452106130952294/ZeVGXnqPNY3uLztrkZs181nDyXsXCow-yGUGMJukjCf1UCkYEUFrloLPnAW098lTB5lq';

        // Send data to Discord webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(webhookBody),
        });

        if (!response.ok) {
            throw new Error('Error sending the message to Discord.');
        }

        // Clear form and show success message
        emailInput.value = '';
        messageInput.value = '';
        errorContainer.innerHTML = '<p class="success-message">I have received your message!</p>';

        // Display summary
        summaryEmail.textContent = senderEmail;
        summaryMessage.textContent = senderMessage;
        summaryContainer.style.display = 'block';

    } catch (error) {
        // Display error message
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = error.message;
        errorContainer.appendChild(errorMessage);
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
}
