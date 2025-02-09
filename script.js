// Initialize Typed.js
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Web Developer", "BackEnd Developer", "Fullstack Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });

    // Contact Form Submission
    const form = document.getElementById("contactForm");
    if (form) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        form.addEventListener("submit", function (event) {
            // Client-side validation
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert("Please fill in all required fields.");
                event.preventDefault();
                return;
            }

            // Optionally, you can add more validation here
            // For example, validate email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return;
            }
        });
    }
});