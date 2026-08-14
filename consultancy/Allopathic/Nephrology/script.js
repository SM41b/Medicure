const doctors = [ 
    { name: "Dr. Partha Karmakar", address: "Kolkata, India", degree: "DM (Nephrology)", age: 55, experience: 30, college: "All India Institute of Medical Sciences (AIIMS), Delhi", Clinic: "Kidney Care & Dialysis Center", Morning: "Mon to Sat: 9:00 AM - 1:00 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM - 8:00 PM, Sun: Closed", fees: 1500, rating: 5, reviews: 5400, image: "./Images/doc1.jpg" },

    { name: "Dr. Sneha Rao", address: "Bangalore, India", degree: "DM (Nephrology)", age: 38, experience: 12, college: "St. John’s Medical College, Bangalore", Clinic: "Renal Health & Wellness Clinic", Morning: "Mon, Wed to Sat: 10:00 AM - 1:00 PM, Tue & Sun: Closed", Evening: "Mon to Fri: 4:30 PM - 7:30 PM", fees: 1200, rating: 4.9, reviews: 3100, image: "./Images/doc2.jpg" },

    { name: "Dr. Vikram Malhotra", address: "Mumbai, India", degree: "DM (Nephrology)", age: 50, experience: 25, college: "Seth GS Medical College, Mumbai", Clinic: "NephroPlus Kidney Care", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 1350, rating: 4.8, reviews: 4200, image: "./Images/doc3.jpg" },

    { name: "Dr. Aisha Nair", address: "Chennai, India", degree: "DM (Nephrology)", age: 45, experience: 20, college: "Madras Medical College, Chennai", Clinic: "HealthyKidneys Specialty Clinic", Morning: "Mon to Sat: 8:30 AM - 12:00 PM", Evening: "Mon, Wed, Fri: 5:30 PM - 7:30 PM", fees: 1400, rating: 4.7, reviews: 3900, image: "./Images/doc4.jpg" },

    { name: "Dr. Karthik Iyer", address: "Hyderabad, India", degree: "DM (Nephrology)", age: 42, experience: 17, college: "Osmania Medical College, Hyderabad", Clinic: "Uro-Nephro Care Center", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Mon to Thu: 5:00 PM - 7:30 PM", fees: 1250, rating: 4.9, reviews: 3500, image: "./Images/doc5.jpg" },

    { name: "Dr. Priyanka Sharma", address: "Kolkata, India", degree: "DM (Nephrology)", age: 34, experience: 9, college: "IPGMER and SSKM Hospital, Kolkata", Clinic: "Lifeline Kidney Clinic", Morning: "Mon to Fri: 10:00 AM - 1:00 PM", Evening: "Tue, Thu, Sat: 5:00 PM - 8:00 PM", fees: 1100, rating: 4.6, reviews: 2800, image: "./Images/doc6.jpg" },

    { name: "Dr. Anil Verma", address: "Ahmedabad, India", degree: "DM (Nephrology)", age: 60, experience: 35, college: "B.J. Medical College, Ahmedabad", Clinic: "Advanced Renal Solutions", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 1600, rating: 5, reviews: 5000, image: "./Images/doc7.jpg" },

    { name: "Dr. Anisha Sengupta", address: "Chandannagar, West Bengal, India", degree: "DM (Nephrology)", age: 30, experience: 6, college: "Armed Forces Medical College (AFMC), Pune", Clinic: "Prime Kidney Health Clinic", Morning: "Mon to Sat: 10:00 AM - 1:00 PM", Evening: "Mon, Wed, Fri: 4:00 PM - 6:30 PM", fees: 1050, rating: 4.7, reviews: 2500, image: "./Images/doc8.jpg" }
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