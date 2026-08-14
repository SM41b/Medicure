const doctors = [ 
            { name: "Dr. Kavita Rao", address: "Mumbai, India", degree: "DM (Endocrinology)", age: 47, experience: 22, college: "AIIMS Delhi", Clinic: "Hormone Care Clinic", Morning: "Mon-Sat: 8:00 AM - 12:00 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 1000, rating: 4.8, reviews: 3500, image: "./Images/endo1.jpg" },

            { name: "Dr. Sanjay Mehta", address: "Delhi, India", degree: "DM (Endocrinology)", age: 50, experience: 25, college: "PGIMER Chandigarh", Clinic: "Endocrine Wellness Center", Morning: "Mon-Sat: 9:00 AM - 1:00 PM", Evening: "Mon-Sat: 5:30 PM - 9:00 PM", fees: 950, rating: 4.7, reviews: 3200, image: "./Images/endo2.jpg" },

            { name: "Dr. Neha Bansal", address: "Bangalore, India", degree: "DM (Endocrinology)", age: 42, experience: 17, college: "CMC Vellore", Clinic: "Diabetes & Hormones Clinic", Morning: "Mon-Fri: 10:00 AM - 2:00 PM", Evening: "Mon-Fri: 6:00 PM - 9:00 PM", fees: 900, rating: 4.6, reviews: 3100, image: "./Images/endo3.jpg" },

            { name: "Dr. Anil Kumar", address: "Hyderabad, India", degree: "DM (Endocrinology)", age: 45, experience: 20, college: "Osmania Medical College", Clinic: "Thyroid & Diabetes Center", Morning: "Mon-Sat: 8:30 AM - 12:30 PM", Evening: "Mon-Sat: 6:00 PM - 9:30 PM", fees: 980, rating: 4.8, reviews: 3300, image: "./Images/endo4.jpg" },

            { name: "Dr. Rachna Nair", address: "Chennai, India", degree: "DM (Endocrinology)", age: 41, experience: 16, college: "Stanley Medical College", Clinic: "Endocrine Health Hub", Morning: "Mon-Sat: 9:00 AM - 12:30 PM", Evening: "Mon-Fri: 5:00 PM - 8:00 PM", fees: 890, rating: 4.5, reviews: 3000, image: "./Images/endo5.jpg" },

            { name: "Dr. Mohan Iyer", address: "Pune, India", degree: "DM (Endocrinology)", age: 43, experience: 18, college: "BJ Medical College Pune", Clinic: "EndoLife Clinic", Morning: "Mon-Sat: 9:30 AM - 1:30 PM", Evening: "Mon-Sat: 6:00 PM - 9:00 PM", fees: 920, rating: 4.7, reviews: 3150, image: "./Images/endo6.jpg" },

            { name: "Dr. Shalini Das", address: "Kolkata, India", degree: "DM (Endocrinology)", age: 39, experience: 14, college: "Calcutta Medical College", Clinic: "Hormone Harmony Clinic", Morning: "Mon-Sat: 10:00 AM - 2:00 PM", Evening: "Mon-Sat: 5:30 PM - 8:30 PM", fees: 870, rating: 4.6, reviews: 2800, image: "./Images/endo7.jpg" },
            
            { name: "Dr. Rahul Sinha", address: "Ahmedabad, India", degree: "DM (Endocrinology)", age: 44, experience: 19, college: "BJMC Ahmedabad", Clinic: "Thyroid & Endocrine Center", Morning: "Mon-Sat: 8:00 AM - 12:30 PM", Evening: "Mon-Sat: 5:00 PM - 9:00 PM", fees: 930, rating: 4.9, reviews: 3400, image: "./Images/endo8.jpg" }
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
            
            const url =`../../Book%20Appointment/appointment.html?name=${name}&clinic=${clinic}&fees=${fees}`;
            console.log("Redirecting to:", url);
            window.location.href = url;
        });
    });
}

// Ensure the function runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateDoctors);