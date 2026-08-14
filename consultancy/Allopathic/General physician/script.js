const physicians = [ 
    { name: "Dr. Arijit Mehta", address: "Delhi, India", degree: "MBBS, MD (General Medicine)", age: 58, experience: 32, college: "Maulana Azad Medical College, Delhi", Clinic: "Mehta General Clinic", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:30 PM - 8:00 PM", fees: 800, rating: 4.9, reviews: 5000, image: "./Images/doc1.jpg" },

    { name: "Dr. Nikita Kapoor", address: "Mumbai, India", degree: "MBBS, MD (Internal Medicine)", age: 42, experience: 18, college: "Grant Medical College, Mumbai", Clinic: "Health First Clinic", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 750, rating: 4.8, reviews: 4200, image: "./Images/doc2.jpg" },

    { name: "Dr. Arjun Nair", address: "Bangalore, India", degree: "MBBS, MD (General Medicine)", age: 50, experience: 25, college: "St. John’s Medical College, Bangalore", Clinic: "Nair Healthcare Center", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Mon to Thu: 5:00 PM - 7:30 PM", fees: 900, rating: 4.7, reviews: 3900, image: "./Images/doc3.jpg" },

    { name: "Dr. Swati Mishra", address: "Chennai, India", degree: "MBBS, MD (Internal Medicine)", age: 45, experience: 22, college: "Madras Medical College, Chennai", Clinic: "Vital Health Clinic", Morning: "Mon to Sat: 8:30 AM - 12:00 PM", Evening: "Tue, Thu, Sat: 6:00 PM - 8:00 PM", fees: 850, rating: 4.9, reviews: 4100, image: "./Images/doc4.jpg" },

    { name: "Dr. Raju Kumar", address: "Hyderabad, India", degree: "MBBS, MD (General Medicine)", age: 48, experience: 26, college: "Osmania Medical College, Hyderabad", Clinic: "Wellness Care Clinic", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:00 PM - 7:30 PM", fees: 950, rating: 4.8, reviews: 4300, image: "./Images/doc5.jpg" },

    { name: "Dr. Arunima Verma", address: "Pune, India", degree: "MBBS, MD (General Medicine)", age: 39, experience: 14, college: "B.J. Medical College, Pune", Clinic: "Healthy Living Clinic", Morning: "Mon to Sat: 10:00 AM - 1:30 PM", Evening: "Mon, Wed, Fri: 6:30 PM - 8:30 PM", fees: 780, rating: 4.7, reviews: 3600, image: "./Images/doc6.jpg" },

    { name: "Dr. Vikram Das", address: "Kolkata, India", degree: "MBBS, MD (General Medicine)", age: 55, experience: 30, college: "IPGMER and SSKM Hospital, Kolkata", Clinic: "Das Family Clinic", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Tue, Thu, Sat: 5:30 PM - 7:30 PM", fees: 880, rating: 4.6, reviews: 3800, image: "./Images/doc7.jpg" },

    { name: "Dr. Pinky Roy", address: "Ahmedabad, India", degree: "MBBS, MD (General Medicine)", age: 37, experience: 12, college: "B.J. Medical College, Ahmedabad", Clinic: "Roy Health Center", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 800, rating: 4.7, reviews: 3400, image: "./Images/doc8.jpg" }
];

function generatePhysicians() {
    let physiciansList = document.getElementById("physicians-list");
    physiciansList.innerHTML = "";

    physicians.forEach(physician => {
        let physicianHTML = `
            <div class="doctor-card">
                <img src="${physician.image}" alt="${physician.name}" class="doctor-img">
                <div class="doctor-info">
                    <p class="doctor-name">${physician.name}</p>
                    <p class="doctor-details"><b>Address:</b> ${physician.address}</p>
                    <p class="doctor-details"><b>Degree:</b> ${physician.degree}</p>
                    <p class="doctor-details"><b>Age:</b> ${physician.age} years</p>
                    <p class="doctor-details"><b>Experience:</b> ${physician.experience} years</p>
                    <p class="doctor-details"><b>Education:</b> ${physician.college}</p>
                    <p class="doctor-details"><b>Clinic:</b> ${physician.Clinic}</p>
                    <p class="doctor-details"><b>Morning:</b> ${physician.Morning}</p>
                    <p class="doctor-details"><b>Evening:</b> ${physician.Evening}</p>
                    <p class="doctor-details"><b>Fees:</b> ₹${physician.fees}</p>
                    <p class="review">⭐ ${physician.rating} / 5 (${physician.reviews}+ reviews)</p>
                    <button class="book-btn" data-name="${physician.name}" data-clinic="${physician.Clinic}" data-fees="${physician.fees}">BOOK APPOINTMENT</button>
                </div>
            </div>
        `;
        physiciansList.innerHTML += physicianHTML;
    });

    document.querySelectorAll(".book-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const name = encodeURIComponent(this.dataset.name);
            const clinic = encodeURIComponent(this.dataset.clinic);
            const fees = encodeURIComponent(this.dataset.fees);
            
            const url = `../../Book%20Appointment/appointment.html?name=${name}&clinic=${clinic}&fees=${fees}`;
            console.log("Redirecting to:", url);
            window.location.href = url;
        });
    });
}

document.addEventListener("DOMContentLoaded", generatePhysicians);