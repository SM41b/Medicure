const doctors = [  
    { name: "Dr. Alok Verma", address: "Mumbai, India", degree: "MD (Pulmonology)", age: 48, experience: 22, college: "KEM Hospital, Mumbai", Clinic: "Lung Care Clinic", Morning: "Mon-Sat: 8:00 AM - 12:00 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 950, rating: 4.8, reviews: 3200, image: "./Images/pulm1.jpg" },
    { name: "Dr. Reena Sethi", address: "Delhi, India", degree: "MD (Pulmonology)", age: 46, experience: 20, college: "AIIMS, Delhi", Clinic: "Advanced Pulmonary Center", Morning: "Mon-Sat: 9:00 AM - 1:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1000, rating: 4.7, reviews: 3100, image: "./Images/pulm2.jpg" },
    { name: "Dr. Ajay Rao", address: "Bangalore, India", degree: "MD (Pulmonology)", age: 43, experience: 18, college: "NIMHANS", Clinic: "Breathe Easy Clinic", Morning: "Mon-Fri: 10:00 AM - 2:00 PM", Evening: "Mon-Fri: 6:00 PM - 9:00 PM", fees: 970, rating: 4.6, reviews: 2950, image: "./Images/pulm3.jpg" },
    { name: "Dr. Meena Patil", address: "Chennai, India", degree: "MD (Pulmonology)", age: 45, experience: 19, college: "Stanley Medical College", Clinic: "Lung & Airway Care", Morning: "Mon-Sat: 8:30 AM - 12:30 PM", Evening: "Mon-Sat: 6:00 PM - 9:30 PM", fees: 900, rating: 4.9, reviews: 3300, image: "./Images/pulm4.jpg" },
    { name: "Dr. Sameer Joshi", address: "Hyderabad, India", degree: "MD (Pulmonology)", age: 44, experience: 17, college: "Osmania Medical College", Clinic: "Breath Well Center", Morning: "Mon-Sat: 9:30 AM - 1:30 PM", Evening: "Mon-Fri: 6:00 PM - 9:00 PM", fees: 960, rating: 4.6, reviews: 2800, image: "./Images/pulm5.jpg" },
    { name: "Dr. Priya Sharma", address: "Pune, India", degree: "MD (Pulmonology)", age: 41, experience: 16, college: "BJ Medical College Pune", Clinic: "Lung Wellness Clinic", Morning: "Mon-Sat: 10:00 AM - 2:00 PM", Evening: "Mon-Sat: 5:30 PM - 9:00 PM", fees: 910, rating: 4.8, reviews: 3100, image: "./Images/pulm6.jpg" },
    { name: "Dr. Arvind Dutta", address: "Kolkata, India", degree: "MD (Pulmonology)", age: 49, experience: 21, college: "Calcutta Medical College", Clinic: "Pulmonary Relief Center", Morning: "Mon-Sat: 9:00 AM - 1:00 PM", Evening: "Mon-Sat: 4:30 PM - 8:30 PM", fees: 990, rating: 4.7, reviews: 3200, image: "./Images/pulm7.jpg" },
    { name: "Dr. Sneha Mehta", address: "Ahmedabad, India", degree: "MD (Pulmonology)", age: 42, experience: 18, college: "BJMC Ahmedabad", Clinic: "Healthy Lungs Clinic", Morning: "Mon-Sat: 8:00 AM - 12:30 PM", Evening: "Mon-Sat: 5:00 PM - 9:00 PM", fees: 940, rating: 4.9, reviews: 3400, image: "./Images/pulm8.jpg" }
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
