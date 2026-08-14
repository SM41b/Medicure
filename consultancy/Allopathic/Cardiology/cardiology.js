const doctors = [
    { name: "Dr. Rajesh Khanna", address: "Mumbai, India", degree: "DM (Cardiology)", age: 55, experience: 30, college: "AIIMS, Delhi", Clinic: "HeartCare Hospital", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon to Fri: 5:00 PM - 8:00 PM", fees: 1500, rating: 5, reviews: 5400, image: "./Images/doc1.jpg" },
    { name: "Dr. Neha Kapoor", address: "Delhi, India", degree: "DM (Cardiology)", age: 45, experience: 22, college: "Maulana Azad Medical College, Delhi", Clinic: "Metro Heart Institute", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon to Fri: 4:30 PM - 7:30 PM", fees: 1200, rating: 4.9, reviews: 3200, image: "./Images/doc2.jpg" },
    { name: "Dr. Amit Verma", address: "Bangalore, India", degree: "DM (Cardiology)", age: 50, experience: 25, college: "St. John's Medical College", Clinic: "Bangalore Heart Center", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 1350, rating: 4.8, reviews: 4200, image: "./Images/doc3.jpg" },
    { name: "Dr. Sneha Iyer", address: "Chennai, India", degree: "DM (Cardiology)", age: 48, experience: 20, college: "Madras Medical College", Clinic: "Apollo Cardiac Care", Morning: "Mon to Sat: 8:30 AM - 12:00 PM", Evening: "Mon, Wed, Fri: 5:30 PM - 7:30 PM", fees: 1400, rating: 4.7, reviews: 3900, image: "./Images/doc4.jpg" },
    { name: "Dr. Ramesh Patil", address: "Pune, India", degree: "DM (Cardiology)", age: 52, experience: 28, college: "BJ Medical College, Pune", Clinic: "Sahyadri Heart Center", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon to Sat: 5:00 PM - 8:00 PM", fees: 1300, rating: 4.9, reviews: 3700, image: "./Images/doc5.jpg" },
    { name: "Dr. Anjali Mehta", address: "Kolkata, India", degree: "DM (Cardiology)", age: 40, experience: 18, college: "RG Kar Medical College, Kolkata", Clinic: "Fortis Heart Clinic", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon to Sat: 5:00 PM - 8:00 PM", fees: 1250, rating: 4.8, reviews: 3500, image: "./Images/doc6.jpg" },
    { name: "Dr. Manish Desai", address: "Hyderabad, India", degree: "DM (Cardiology)", age: 47, experience: 24, college: "Osmania Medical College", Clinic: "KIMS Cardiology", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon, Tue, Thur: 5:00 PM - 8:00 PM", fees: 1400, rating: 4.7, reviews: 3300, image: "./Images/doc7.jpg" },
    { name: "Dr. Priya Nair", address: "Ahmedabad, India", degree: "DM (Cardiology)", age: 38, experience: 15, college: "Gujarat University", Clinic: "CIMS Heart Clinic", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon to Sat: 5:00 PM - 8:00 PM", fees: 1150, rating: 4.6, reviews: 3100, image: "./Images/doc8.jpg" }
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


