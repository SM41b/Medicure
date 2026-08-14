const oncologists = [
    { name: "Dr. Ramesh Khanna", address: "Delhi, India", degree: "MBBS, DM (Oncology)", age: 55, experience: 30, college: "AIIMS, Delhi", Clinic: "Khanna Cancer Care", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:30 PM - 8:00 PM", fees: 2500, rating: 5, reviews: 5200, image: "./Images/onc1.jpg" },

    { name: "Dr. Sweta Mehta", address: "Mumbai, India", degree: "MBBS, MD (Oncology)", age: 50, experience: 25, college: "Tata Memorial Hospital, Mumbai", Clinic: "Mehta Oncology Center", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 2300, rating: 4.9, reviews: 4800, image: "./Images/onc2.jpg" },

    { name: "Dr. Animesh Sharma", address: "Bangalore, India", degree: "MBBS, DM (Oncology)", age: 52, experience: 27, college: "St. John's Medical College, Bangalore", Clinic: "Sharma Cancer Solutions", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Mon to Thu: 5:00 PM - 7:30 PM", fees: 2400, rating: 4.8, reviews: 4500, image: "./Images/onc3.jpg" },

    { name: "Dr. Priyanka Menon", address: "Chennai, India", degree: "MBBS, MD (Oncology)", age: 45, experience: 20, college: "Madras Medical College, Chennai", Clinic: "Menon Oncology Clinic", Morning: "Mon to Sat: 8:30 AM - 12:00 PM", Evening: "Tue, Thu, Sat: 6:00 PM - 8:00 PM", fees: 2200, rating: 4.9, reviews: 4300, image: "./Images/onc4.jpg" },

    { name: "Dr. Kartik Rao", address: "Hyderabad, India", degree: "MBBS, DM (Oncology)", age: 53, experience: 29, college: "Osmania Medical College, Hyderabad", Clinic: "Rao Cancer Hospital", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:00 PM - 7:30 PM", fees: 2350, rating: 4.8, reviews: 4600, image: "./Images/onc5.jpg" },

    { name: "Dr. Snehil Kapoor", address: "Pune, India", degree: "MBBS, MD (Oncology)", age: 40, experience: 16, college: "B.J. Medical College, Pune", Clinic: "Kapoor Cancer Care", Morning: "Mon to Sat: 10:00 AM - 1:30 PM", Evening: "Mon, Wed, Fri: 6:30 PM - 8:30 PM", fees: 2100, rating: 4.7, reviews: 4200, image: "./Images/onc6.jpg" },

    { name: "Dr. Aneek Das", address: "Kolkata, India", degree: "MBBS, DM (Oncology)", age: 57, experience: 32, college: "IPGMER and SSKM Hospital, Kolkata", Clinic: "Das Cancer Center", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Tue, Thu, Sat: 5:30 PM - 7:30 PM", fees: 2250, rating: 4.6, reviews: 4000, image: "./Images/onc7.jpg" },

    { name: "Dr. Manish Verma", address: "Ahmedabad, India", degree: "MBBS, MD (Oncology)", age: 42, experience: 18, college: "B.J. Medical College, Ahmedabad", Clinic: "Verma Oncology Clinic", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 2200, rating: 4.7, reviews: 3900, image: "./Images/onc8.jpg" },

];

function generateOncologists() {
    let oncologistsList = document.getElementById("oncologists-list");
    oncologistsList.innerHTML = "";

    oncologists.forEach(oncologist => {
        let oncologistHTML = `
            <div class="doctor-card">
                <img src="${oncologist.image}" alt="${oncologist.name}" class="doctor-img">
                <div class="doctor-info">
                    <p class="doctor-name">${oncologist.name}</p>
                    <p class="doctor-details"><b>Address:</b> ${oncologist.address}</p>
                    <p class="doctor-details"><b>Degree:</b> ${oncologist.degree}</p>
                    <p class="doctor-details"><b>Age:</b> ${oncologist.age} years</p>
                    <p class="doctor-details"><b>Experience:</b> ${oncologist.experience} years</p>
                    <p class="doctor-details"><b>College:</b> ${oncologist.college}</p>
                    <p class="doctor-details"><b>Clinic:</b> ${oncologist.Clinic}</p>
                    <p class="doctor-details"><b>Morning:</b> ${oncologist.Morning}</p>
                    <p class="doctor-details"><b>Evening:</b> ${oncologist.Evening}</p>
                    <p class="doctor-details"><b>Fees:</b> ₹${oncologist.fees}</p>
                    <p class="review">⭐ ${oncologist.rating} / 5 (${oncologist.reviews}+ reviews)</p>
                    <button class="book-btn" data-name="${oncologist.name}" data-clinic="${oncologist.Clinic}" data-fees="${oncologist.fees}">BOOK APPOINTMENT</button>
                </div>
            </div>
        `;
        oncologistsList.innerHTML += oncologistHTML;
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
document.addEventListener("DOMContentLoaded", generateOncologists);

