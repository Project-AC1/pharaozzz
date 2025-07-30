// Scroll to Register Section
function scrollToRegister() {
  const registerSection = document.getElementById("register");
  if (registerSection) {
    registerSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Handle Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Optionally you can fetch data like this:
    // const teamName = form.elements[0].value;
    // const email = form.elements[1].value;
    // const game = form.elements[2].value;

    // Reset form fields
    form.reset();

    // Show success message
    message.textContent = "✅ Thank you for registering! We'll contact you soon.";
    message.style.color = "#00ff9d";

    // Clear message after 5 seconds
    setTimeout(() => {
      message.textContent = "";
    }, 5000);
  });
});
