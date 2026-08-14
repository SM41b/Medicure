const pediatricians = [
    { name: "Dr. Ram Choudhary", address: "Delhi, India", degree: "MBBS, MD (Pediatrics)", age: 55, experience: 30, college: "AIIMS, Delhi", Clinic: "Choudhary Children's Clinic", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:30 PM - 8:00 PM", fees: 1200, rating: 4.9, reviews: 5000, image: "./Images/doc1.jpg" },

    { name: "Dr. Neha Sharma", address: "Mumbai, India", degree: "MBBS, DNB (Pediatrics)", age: 40, experience: 16, college: "Seth GS Medical College, Mumbai", Clinic: "Sunshine Kids Care", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 1100, rating: 4.8, reviews: 4600, image: "./Images/doc2.jpg" },

    { name: "Dr. Krutika Patel", address: "Bangalore, India", degree: "MBBS, MD (Pediatrics)", age: 48, experience: 22, college: "St. John's Medical College, Bangalore", Clinic: "Little Smiles Clinic", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Mon to Thu: 5:00 PM - 7:30 PM", fees: 1300, rating: 4.7, reviews: 4200, image: "./Images/doc3.jpg" },

    { name: "Dr. Mihir Joshi", address: "Chennai, India", degree: "MBBS, MD (Pediatrics)", age: 42, experience: 18, college: "Madras Medical College, Chennai", Clinic: "Healthy Kids Pediatric Center", Morning: "Mon to Sat: 8:30 AM - 12:00 PM", Evening: "Tue, Thu, Sat: 6:00 PM - 8:00 PM", fees: 1150, rating: 4.9, reviews: 4000, image: "./Images/doc4.jpg" },

    { name: "Dr. Vishal Agarwal", address: "Hyderabad, India", degree: "MBBS, MD (Pediatrics)", age: 50, experience: 25, college: "Osmania Medical College, Hyderabad", Clinic: "Agarwal Child Care", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:00 PM - 7:30 PM", fees: 1250, rating: 4.8, reviews: 4500, image: "./Images/doc5.jpg" },

    { name: "Dr. Sneha Reddy", address: "Pune, India", degree: "MBBS, DCH (Pediatrics)", age: 38, experience: 14, college: "B.J. Medical College, Pune", Clinic: "Reddy's Pediatric Clinic", Morning: "Mon to Sat: 10:00 AM - 1:30 PM", Evening: "Mon, Wed, Fri: 6:30 PM - 8:30 PM", fees: 1000, rating: 4.7, reviews: 3800, image: "./Images/doc6.jpg" },

    { name: "Dr. Anil Kumar", address: "Kolkata, India", degree: "MBBS, MD (Pediatrics)", age: 45, experience: 20, college: "IPGMER, Kolkata", Clinic: "Care & Cure Pediatrics", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Tue, Thu, Sat: 5:30 PM - 7:30 PM", fees: 1100, rating: 4.6, reviews: 3900, image: "./Images/doc7.jpg" },

    { name: "Dr. Ananya Das", address: "Patna, India", degree: "MBBS, DCH (Pediatrics)", age: 35, experience: 10, college: "Patna Medical College", Clinic: "Das Child Health Clinic", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 950, rating: 4.7, reviews: 3300, image: "./Images/doc8.jpg" }
];

function generatePediatricians() {
    let pediatriciansList = document.getElementById("pediatricians-list");
    pediatriciansList.innerHTML = "";

    pediatricians.forEach(pediatrician => {
        let pediatricianHTML = `
            <div class="doctor-card">
                <img src="${pediatrician.image}" alt="${pediatrician.name}" class="doctor-img">
                <div class="doctor-info">
                    <p class="doctor-name">${pediatrician.name}</p>
                    <p class="doctor-details"><b>Address:</b> ${pediatrician.address}</p>
                    <p class="doctor-details"><b>Degree:</b> ${pediatrician.degree}</p>
                    <p class="doctor-details"><b>Experience:</b> ${pediatrician.experience} years</p>
                    <p class="doctor-details"><b>College:</b> ${pediatrician.college}</p>
                    <p class="doctor-details"><b>Clinic:</b> ${pediatrician.Clinic}</p>
                    <p class="doctor-details"><b>Morning:</b> ${pediatrician.Morning}</p>
                    <p class="doctor-details"><b>Evening:</b> ${pediatrician.Evening}</p>
                    <p class="doctor-details"><b>Fees:</b> ₹${pediatrician.fees}</p>
                    <p class="review">⭐ ${pediatrician.rating} / 5 (${pediatrician.reviews}+ reviews)</p>
                    <button class="book-btn" data-name="${pediatrician.name}" data-clinic="${pediatrician.Clinic}" data-fees="${pediatrician.fees}">BOOK APPOINTMENT</button>
                </div>
            </div>
        `;
        pediatriciansList.innerHTML += pediatricianHTML;
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
document.addEventListener("DOMContentLoaded", generatePediatricians);


    
