var typed = new Typed(".text", {
	strings: ["Web Developer", "BackEnd Developer", "Fullstack Developer"],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});
// Initialize EmailJS with your public API key
emailjs.init('vyPhueWkAhFYVyn88');

// Add event listener to form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value || 'No subject';
    var message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_7d0w82t', 'template_hyqtb9p', {
        from_name: name,
        from_email: email,
        subject: subject,
        message_html: message
    }).then(function(response) {``
        console.log('Email sent!', response);
        document.getElementById('contactForm').reset(); // Clear form after successful submission
        alert('Your message has been sent successfully.');
    }, function(error) {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
});
