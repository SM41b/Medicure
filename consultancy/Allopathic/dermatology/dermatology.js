const dermatologists = [
    { name: "Dr. Aarti Mehta", address: "Mumbai, India", degree: "MD (Dermatology)", age: 45, experience: 20, college: "Grant Medical College, Mumbai", Clinic: "Glow Skin Clinic", Morning: "Mon-Sat: 9:00 AM - 12:30 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 800, rating: 4.8, reviews: 3200, image: "./Images/derm1.jpg" },
    { name: "Dr. Rohan Sharma", address: "Delhi, India", degree: "MBBS, MD (Dermatology)", age: 38, experience: 15, college: "AIIMS, New Delhi", Clinic: "Derma Care Center", Morning: "Mon-Fri: 10:00 AM - 1:00 PM", Evening: "Mon-Sat: 5:00 PM - 8:00 PM", fees: 700, rating: 4.7, reviews: 2800, image: "./Images/derm2.jpg" },
    { name: "Dr. Sneha Kapoor", address: "Bangalore, India", degree: "MD (Dermatology)", age: 42, experience: 18, college: "Bangalore Medical College", Clinic: "SkinGlow Clinic", Morning: "Mon-Sat: 9:30 AM - 12:30 PM", Evening: "Mon-Fri: 4:30 PM - 7:30 PM", fees: 750, rating: 4.6, reviews: 3100, image: "./Images/derm3.jpg" },
    { name: "Dr. Sameer Malhotra", address: "Chennai, India", degree: "MD (Dermatology)", age: 40, experience: 16, college: "Stanley Medical College, Chennai", Clinic: "ClearSkin Clinic", Morning: "Mon-Sat: 10:00 AM - 1:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 850, rating: 4.9, reviews: 3500, image: "./Images/derm4.jpg" },
    { name: "Dr. Ritu Verma", address: "Hyderabad, India", degree: "MD (Dermatology)", age: 39, experience: 14, college: "Osmania Medical College, Hyderabad", Clinic: "Flawless Derma Center", Morning: "Mon-Fri: 9:30 AM - 12:30 PM", Evening: "Mon-Sat: 5:30 PM - 8:30 PM", fees: 650, rating: 4.5, reviews: 2900, image: "./Images/derm5.jpg" },
    { name: "Dr. Aman Joshi", address: "Pune, India", degree: "MBBS, MD (Dermatology)", age: 35, experience: 12, college: "BJ Medical College, Pune", Clinic: "Radiance Skin Clinic", Morning: "Mon-Sat: 9:00 AM - 12:00 PM", Evening: "Mon-Fri: 6:00 PM - 9:00 PM", fees: 780, rating: 4.7, reviews: 3000, image: "./Images/derm6.jpg" },
    { name: "Dr. Priya Nair", address: "Kochi, India", degree: "MD (Dermatology)", age: 37, experience: 13, college: "Government Medical College, Trivandrum", Clinic: "DermaGlow Clinic", Morning: "Mon-Sat: 10:00 AM - 1:30 PM", Evening: "Mon-Sat: 5:00 PM - 8:00 PM", fees: 720, rating: 4.6, reviews: 2800, image: "./Images/derm7.jpg" },
    { name: "Dr. Suresh Deshmukh", address: "Ahmedabad, India", degree: "MD (Dermatology)", age: 48, experience: 22, college: "BJ Medical College, Ahmedabad", Clinic: "SmoothSkin Clinic", Morning: "Mon-Sat: 9:00 AM - 12:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 900, rating: 4.8, reviews: 3300, image: "./Images/derm8.jpg" }
];

function generateDoctors() {
    let doctorsList = document.getElementById("doctors-list");
    doctorsList.innerHTML = ""; // Clear existing content

    dermatologists.forEach(doctor => {
        let doctorHTML = `
            <div class="doctor-card">
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">
                <div class="doctor-info">
                    <p class="doctor-name">${doctor.name}</p>
                    <p class="doctor-details"><b>Address:</b> ${doctor.address}</p>
                    <p class="doctor-details"><b>Degree:</b> ${doctor.degree}</p>
                    <p class="doctor-details"><b>Age:</b> ${doctor.age}</p>
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


