// Function to scroll smoothly to the Services section
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Function to add dynamic hover effects on team member names
document.addEventListener("DOMContentLoaded", function () {
    const teamNames = document.querySelectorAll(".team-name");

    teamNames.forEach(name => {
        name.addEventListener("mouseenter", () => {
            name.style.transform = "scale(1.1)";
        });

        name.addEventListener("mouseleave", () => {
            name.style.transform = "scale(1)";
        });
    });
});


// contact section

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // You can replace this alert with a call to your backend in future
    alert('Thank you! Your message has been received. Our team will contact you shortly.');
  
    this.reset(); // Optional: clear the form after submission
  });
  

