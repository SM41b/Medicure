const gastroenterologists = [
    { name: "Dr. Rajiv Nair", address: "Mumbai, India", degree: "MD (Gastroenterology)", age: 50, experience: 25, college: "AIIMS, Delhi", Clinic: "GastroCare Clinic", Morning: "Mon-Sat: 9:00 AM - 12:30 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 1200, rating: 4.9, reviews: 4200, image: "./Images/gastro1.jpg" },
    { name: "Dr. Snehal Patil", address: "Pune, India", degree: "MBBS, MD (Gastro)", age: 45, experience: 20, college: "KEM Hospital, Mumbai", Clinic: "Digestive Health Center", Morning: "Mon-Fri: 10:00 AM - 1:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1100, rating: 4.8, reviews: 3900, image: "./Images/gastro2.jpg" },
    { name: "Dr. Arvind Kapoor", address: "Bangalore, India", degree: "MD (Gastroenterology)", age: 48, experience: 22, college: "Bangalore Medical College", Clinic: "Gut Wellness Clinic", Morning: "Mon-Sat: 9:30 AM - 12:30 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 1300, rating: 4.7, reviews: 3700, image: "./Images/gastro3.jpg" },
    { name: "Dr. Meenakshi Rao", address: "Chennai, India", degree: "MD (Gastroenterology)", age: 52, experience: 28, college: "Stanley Medical College", Clinic: "Healthy Stomach Clinic", Morning: "Mon-Sat: 10:00 AM - 1:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1250, rating: 4.9, reviews: 4100, image: "./Images/gastro4.jpg" },
    { name: "Dr. Aman Singh", address: "Hyderabad, India", degree: "MD (Gastro)", age: 43, experience: 18, college: "Osmania Medical College", Clinic: "Liver & Gut Center", Morning: "Mon-Fri: 9:30 AM - 12:30 PM", Evening: "Mon-Sat: 5:30 PM - 8:30 PM", fees: 1150, rating: 4.6, reviews: 3500, image: "./Images/gastro5.jpg" },
    { name: "Dr. Prakash Joshi", address: "Delhi, India", degree: "MBBS, MD (Gastro)", age: 40, experience: 15, college: "AIIMS, Delhi", Clinic: "Digestive Care Clinic", Morning: "Mon-Sat: 9:00 AM - 12:00 PM", Evening: "Mon-Fri: 6:00 PM - 9:00 PM", fees: 1000, rating: 4.7, reviews: 3300, image: "./Images/gastro6.jpg" },
    { name: "Dr. Anjali Menon", address: "Kochi, India", degree: "MD (Gastroenterology)", age: 42, experience: 16, college: "Trivandrum Medical College", Clinic: "GI Health Clinic", Morning: "Mon-Sat: 10:00 AM - 1:30 PM", Evening: "Mon-Sat: 5:00 PM - 8:00 PM", fees: 950, rating: 4.6, reviews: 3200, image: "./Images/gastro7.jpg" },
    { name: "Dr. Sudhir Deshmukh", address: "Ahmedabad, India", degree: "MD (Gastro)", age: 55, experience: 30, college: "BJ Medical College", Clinic: "Advanced Gastro Care", Morning: "Mon-Sat: 9:00 AM - 12:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1400, rating: 4.9, reviews: 4600, image: "./Images/gastro8.jpg" }
];

function generateDoctors() {
    let doctorsList = document.getElementById("doctors-list");
    doctorsList.innerHTML = ""; // Clear existing content

    gastroenterologists.forEach(doctor => {
        let doctorHTML = `
            <div class="doctor-card">
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">
                <div class="doctor-info">
                    <p class="doctor-name">${doctor.name}</p>
                    <p class="doctor-details"><b>Address:</b> ${doctor.address}</p>
                    <p class="doctor-details"><b>Degree:</b> ${doctor.degree}</p>
                    <p class="doctor-details"><b>Age:</b> ${doctor.age} years</p>
                    <p class="doctor-details"><b>Experience:</b> ${doctor.experience} years</p>
                    <p class="doctor-details"><b>College:</b> ${doctor.college} years</p>
                    <p class="doctor-details"><b>Clinic:</b> ${doctor.Clinic}</p>
                    <p class="doctor-details"><b>Morning:</b> ${doctor.Morning}</p>
                    <p class="doctor-details"><b>Evening:</b> ${doctor.Evening}</p>
                    <p class="doctor-details"><b>Fees:</b> ₹${doctor.fees}</p>
                    <p class="review">⭐ ${doctor.rating} / 5 (${doctor.reviews}+ reviews)</p>
                    <button class="book-btn" data-name="${doctor.name}" data-clinic="${doctor.Clinic}" data-fees="${doctor.fees}">BOOK APPOINTMENT</button>
                </div>
            </div>
        `;
        doctorsList.innerHTML += doctorHTML;
    });
    // Attach event listeners AFTER generating elements
    document.querySelectorAll(".book-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default button behavior
            const name = encodeURIComponent(this.dataset.name);
            const clinic = encodeURIComponent(this.dataset.clinic);
            const fees = encodeURIComponent(this.dataset.fees);
            
            const url = `../../Book%20Appointment/appointment.html?name=${name}&clinic=${clinic}&fees=${fees}`;
            console.log("Redirecting to:", url);
            window.location.href = url;
        });
    });
}

// Ensure the function runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateDoctors);

