// Feature 1: Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to my personal website!");
});

// Feature 2: Contact form validation and message preview
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const topic = document.getElementById("topic");
        const message = document.getElementById("message").value.trim();

        const feedback = document.getElementById("formFeedback");
        const preview = document.getElementById("messagePreview");

        // Check required fields
        if (!name || !email || !message) {
            feedback.textContent = "Please complete all required fields.";
            preview.hidden = true;
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            preview.hidden = true;
            return;
        }

        // Display the message preview
        document.getElementById("previewName").textContent =
            "Name: " + name;

        document.getElementById("previewEmail").textContent =
            "Email: " + email;

        document.getElementById("previewTopic").textContent =
            "Topic: " + topic.options[topic.selectedIndex].text;

        document.getElementById("previewMessage").textContent =
            "Message: " + message;

        feedback.textContent =
            "Your details are valid! Review your message below.";

        preview.hidden = false;
    });
}// Feature 3: Back to Top button
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}// Feature 4: Dark mode toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });
}