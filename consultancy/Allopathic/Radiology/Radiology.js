const doctors = [  
    { name: "Dr. Vikram Malhotra", address: "Delhi, India", degree: "MD (Radiology)", age: 45, experience: 20, college: "AIIMS, Delhi", Clinic: "Imaging Care Center", Morning: "Mon-Sat: 9:00 AM - 12:30 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 1500, rating: 4.9, reviews: 4000, image: "./Images/radiology1.jpg" },

    { name: "Dr. Sneha Patel", address: "Mumbai, India", degree: "MBBS, MD (Radiology)", age: 40, experience: 18, college: "KEM Hospital, Mumbai", Clinic: "Advanced Imaging Clinic", Morning: "Mon-Fri: 10:00 AM - 1:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1400, rating: 4.8, reviews: 3800, image: "./Images/radiology2.jpg" },

    { name: "Dr. Rohan Kapoor", address: "Bangalore, India", degree: "MD (Radiology)", age: 50, experience: 25, college: "Bangalore Medical College", Clinic: "Radiology & Diagnostics", Morning: "Mon-Sat: 9:30 AM - 12:30 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 1600, rating: 4.7, reviews: 3600, image: "./Images/radiology3.jpg" },

    { name: "Dr. Ananya Rao", address: "Chennai, India", degree: "MD (Radiology)", age: 48, experience: 22, college: "Stanley Medical College", Clinic: "Modern Imaging Center", Morning: "Mon-Sat: 10:00 AM - 1:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1550, rating: 4.9, reviews: 3900, image: "./Images/radiology4.jpg" },

    { name: "Dr. Manish Gupta", address: "Hyderabad, India", degree: "MD (Radiology)", age: 42, experience: 17, college: "Osmania Medical College", Clinic: "Precision Radiology", Morning: "Mon-Fri: 9:30 AM - 12:30 PM", Evening: "Mon-Sat: 5:30 PM - 8:30 PM", fees: 1450, rating: 4.6, reviews: 3500, image: "./Images/radiology5.jpg" },

    { name: "Dr. Pooja Joshi", address: "Pune, India", degree: "MBBS, MD (Radiology)", age: 38, experience: 15, college: "BJ Medical College", Clinic: "Diagnostic Radiology Center", Morning: "Mon-Sat: 9:00 AM - 12:00 PM", Evening: "Mon-Fri: 6:00 PM - 9:00 PM", fees: 1300, rating: 4.7, reviews: 3300, image: "./Images/radiology6.jpg" },

    { name: "Dr. Ramesh Nair", address: "Kochi, India", degree: "MD (Radiology)", age: 46, experience: 20, college: "Trivandrum Medical College", Clinic: "Expert Imaging Clinic", Morning: "Mon-Sat: 10:00 AM - 1:30 PM", Evening: "Mon-Sat: 5:00 PM - 8:00 PM", fees: 1350, rating: 4.6, reviews: 3200, image: "./Images/radiology7.jpg" },
    
    { name: "Dr. Sunita Deshmukh", address: "Ahmedabad, India", degree: "MD (Radiology)", age: 55, experience: 30, college: "Gujarat Medical College", Clinic: "Radiology & Imaging Experts", Morning: "Mon-Sat: 9:00 AM - 12:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1700, rating: 4.9, reviews: 4500, image: "./Images/radiology8.jpg" }
];

function generateDoctors() {
    let doctorsList = document.getElementById("doctors-list");
    doctorsList.innerHTML = ""; // Clear existing content

    doctors.forEach(doctor => {
        let doctorHTML = `
            <div class="doctor-card">
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">
                <div class="doctor-info">
                    <p class="doctor-name">${doctor.name}</p>
                    <p class="doctor-details"><b>Address:</b> ${doctor.address}</p>
                    <p class="doctor-details"><b>Degree:</b> ${doctor.degree}</p>
                    <p class="doctor-details"><b>Age:</b> ${doctor.age} years</p>
                    <p class="doctor-details"><b>Experience:</b> ${doctor.experience} years</p>
                    <p class="doctor-details"><b>Education:</b> ${doctor.college}</p>
                    <p class="doctor-details"><b>Clinic:</b> ${doctor.Clinic}</p>
                    <p class="doctor-details"><b>Morning:</b> ${doctor.Morning}</p>
                    <p class="doctor-details"><b>Evening:</b> ${doctor.Evening}</p>
                    <p class="doctor-details"><b>Fees:</b> ₹${doctor.fees}</p>
                    <p class="review">⭐ ${doctor.rating || 4.5} / 5 (${doctor.reviews || 2500}+ reviews)</p>
                    <button class="book-btn" data-name="${doctor.name}" data-clinic="${doctor.Clinic}" data-fees="${doctor.fees}">BOOK APPOINTMENT</button>
                </div>
            </div>
        `;
        doctorsList.innerHTML += doctorHTML;
    });

    /// Attach event listeners AFTER generating elements
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
