const orthopaedicians = [
    { name: "Dr. Ravindra Malhotra", address: "Delhi, India", degree: "MBBS, MS (Orthopedics)", age: 58, experience: 32, college: "AIIMS, Delhi", Clinic: "Malhotra Bone & Joint Clinic", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:30 PM - 8:00 PM", fees: 1800, rating: 4.9, reviews: 5200, image: "./Images/doc1.jpg" },

    { name: "Dr. Pankaj Mehta", address: "Mumbai, India", degree: "MBBS, MS (Orthopedics)", age: 50, experience: 26, college: "Seth GS Medical College, Mumbai", Clinic: "Mehta Orthopedic Center", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 1700, rating: 4.8, reviews: 4800, image: "./Images/doc2.jpg" },

    { name: "Dr. Rohini Kulkarni", address: "Bangalore, India", degree: "MBBS, DNB (Orthopedics)", age: 48, experience: 22, college: "St. John's Medical College, Bangalore", Clinic: "Kulkarni Joint Care", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Mon to Thu: 5:00 PM - 7:30 PM", fees: 1600, rating: 4.7, reviews: 4500, image: "./Images/doc3.jpg" },

    { name: "Dr. Preeti Nair", address: "Chennai, India", degree: "MBBS, MS (Orthopedics)", age: 45, experience: 20, college: "Madras Medical College, Chennai", Clinic: "Nair Bone & Joint Clinic", Morning: "Mon to Sat: 8:30 AM - 12:00 PM", Evening: "Tue, Thu, Sat: 6:00 PM - 8:00 PM", fees: 1750, rating: 4.9, reviews: 4300, image: "./Images/doc4.jpg" },

    { name: "Dr. Aniket Rao", address: "Hyderabad, India", degree: "MBBS, MS (Orthopedics)", age: 52, experience: 28, college: "Osmania Medical College, Hyderabad", Clinic: "Rao Orthopedic Solutions", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:00 PM - 7:30 PM", fees: 1850, rating: 4.8, reviews: 4600, image: "./Images/doc5.jpg" },

    { name: "Dr. Snehasis Patel", address: "Pune, India", degree: "MBBS, D.Ortho", age: 38, experience: 14, college: "B.J. Medical College, Pune", Clinic: "Patel Joint Care", Morning: "Mon to Sat: 10:00 AM - 1:30 PM", Evening: "Mon, Wed, Fri: 6:30 PM - 8:30 PM", fees: 1600, rating: 4.7, reviews: 4200, image: "./Images/doc6.jpg" },

    { name: "Dr. Anubhav Sen", address: "Kolkata, India", degree: "MBBS, MS (Orthopedics)", age: 55, experience: 30, college: "IPGMER and SSKM Hospital, Kolkata", Clinic: "Sen Orthopedic Care", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Tue, Thu, Sat: 5:30 PM - 7:30 PM", fees: 1700, rating: 4.6, reviews: 4000, image: "./Images/doc7.jpg" },

    { name: "Dr. Manish Tandon", address: "Ahmedabad, India", degree: "MBBS, MS (Orthopedics)", age: 40, experience: 16, college: "B.J. Medical College, Ahmedabad", Clinic: "Tandon Ortho Clinic", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 1750, rating: 4.7, reviews: 3900, image: "./Images/doc8.jpg" }
];

function generateOrthopaedicians() {
    let orthopaediciansList = document.getElementById("orthopaedicians-list");
    orthopaediciansList.innerHTML = "";

    orthopaedicians.forEach(orthopaedician => {
        let orthopaedicianHTML = `
            <div class="doctor-card">
                <img src="${orthopaedician.image}" alt="${orthopaedician.name}" class="doctor-img">
                <div class="doctor-info">
                    <p class="doctor-name">${orthopaedician.name}</p>
                    <p class="doctor-details"><b>Address:</b> ${orthopaedician.address}</p>
                    <p class="doctor-details"><b>Degree:</b> ${orthopaedician.degree}</p>
                    <p class="doctor-details"><b>Age:</b> ${orthopaedician.age}</p>
                    <p class="doctor-details"><b>Experience:</b> ${orthopaedician.experience} years</p>
                    <p class="doctor-details"><b>College:</b> ${orthopaedician.college}</p>
                    <p class="doctor-details"><b>Clinic:</b> ${orthopaedician.Clinic}</p>
                    <p class="doctor-details"><b>Morning:</b> ${orthopaedician.Morning}</p>
                    <p class="doctor-details"><b>Evening:</b> ${orthopaedician.Evening}</p>
                    <p class="doctor-details"><b>Fees:</b> ₹${orthopaedician.fees}</p>
                    <p class="review">⭐ ${orthopaedician.rating} / 5 (${orthopaedician.reviews}+ reviews)</p>
                    <button class="book-btn" data-name="${orthopaedician.name}" data-clinic="${orthopaedician.Clinic}" data-fees="${orthopaedician.fees}">BOOK APPOINTMENT</button>
                </div>
            </div>
        `;
        orthopaediciansList.innerHTML += orthopaedicianHTML;
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
document.addEventListener("DOMContentLoaded", generateOrthopaedicians);

