// Initialize EmailJS
emailjs.init({
    publicKey: 'O_j6-YUJwi1qo4v70', // Your public API key
});

// Select form inputs
const namex = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#textarea'); // Update the ID to match your HTML

document.querySelector('#submit').addEventListener('click', Send);

// Function to send email
function Send() {
    // Send email using EmailJS
    emailjs.send('service_nptdu0c', 'template_h7nfc6f', {
        from_name: `${email.value}`,   // The email address of the sender
        to_name: `${namex.value}`,     // The recipient's name
        message: `${message.value}`,   // The message content
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}
