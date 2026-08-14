const gynaecologists = [
    { name: "Dr. Neha Sharma", address: "Mumbai, India", degree: "MD (Gynaecology)", age: 50, experience: 25, college: "Grant Medical College, Mumbai", Clinic: "Mother Care Clinic", Morning: "Mon-Sat: 9:00 AM - 12:30 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 1000, rating: 4.9, reviews: 4000, image: "./Images/gyn1.jpg" },
    { name: "Dr. Pooja Verma", address: "Kolkata, India", degree: "MBBS, MD (Gynaecology)", age: 45, experience: 20, college: "AIIMS, New Delhi", Clinic: "Women Wellness Center", Morning: "Mon-Fri: 10:00 AM - 1:00 PM", Evening: "Mon-Sat: 5:00 PM - 8:00 PM", fees: 950, rating: 4.8, reviews: 3700, image: "./Images/gyn2.jpg" },
    { name: "Dr. Renu Kapoor", address: "Bangalore, India", degree: "MD (Gynaecology)", age: 48, experience: 22, college: "Bangalore Medical College", Clinic: "Motherhood Clinic", Morning: "Mon-Sat: 9:30 AM - 12:30 PM", Evening: "Mon-Fri: 4:30 PM - 7:30 PM", fees: 900, rating: 4.7, reviews: 3500, image: "./Images/gyn3.jpg" },
    { name: "Dr. Suman Malhotra", address: "Chennai, India", degree: "MD (Gynaecology)", age: 52, experience: 28, college: "Stanley Medical College, Chennai", Clinic: "CareWell Clinic", Morning: "Mon-Sat: 10:00 AM - 1:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1100, rating: 4.9, reviews: 4200, image: "./Images/gyn4.jpg" },
    { name: "Dr. Asha Reddy", address: "Hyderabad, India", degree: "MD (Gynaecology)", age: 43, experience: 18, college: "Osmania Medical College, Hyderabad", Clinic: "Flawless Women Care", Morning: "Mon-Fri: 9:30 AM - 12:30 PM", Evening: "Mon-Sat: 5:30 PM - 8:30 PM", fees: 850, rating: 4.6, reviews: 3100, image: "./Images/gyn5.jpg" },
    { name: "Dr. Sneha Joshi", address: "Pune, India", degree: "MBBS, MD (Gynaecology)", age: 40, experience: 15, college: "BJ Medical College, Pune", Clinic: "Healthy Moms Clinic", Morning: "Mon-Sat: 9:00 AM - 12:00 PM", Evening: "Mon-Fri: 6:00 PM - 9:00 PM", fees: 980, rating: 4.7, reviews: 3300, image: "./Images/gyn6.jpg" },
    { name: "Dr. Meera Nair", address: "Kochi, India", degree: "MD (Gynaecology)", age: 42, experience: 16, college: "Government Medical College, Trivandrum", Clinic: "New Life Clinic", Morning: "Mon-Sat: 10:00 AM - 1:30 PM", Evening: "Mon-Sat: 5:00 PM - 8:00 PM", fees: 920, rating: 4.6, reviews: 3200, image: "./Images/gyn7.jpg" },
    { name: "Dr. Shalini Deshmukh", address: "Ahmedabad, India", degree: "MD (Gynaecology)", age: 55, experience: 30, college: "BJ Medical College, Ahmedabad", Clinic: "Motherly Care Clinic", Morning: "Mon-Sat: 9:00 AM - 12:00 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 1150, rating: 4.9, reviews: 4500, image: "./Images/gyn8.jpg" }
];

function generateDoctors() {
    let doctorsList = document.getElementById("doctors-list");
    doctorsList.innerHTML = ""; // Clear existing content

    gynaecologists.forEach(doctor => {
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

