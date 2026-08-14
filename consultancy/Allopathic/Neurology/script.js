const neurologists = [ 
    { name: "Dr. Arvinda Khanna", address: "Delhi, India", degree: "MBBS, DM (Neurology)", age: 60, experience: 35, college: "All India Institute of Medical Sciences (AIIMS), Delhi", Clinic: "Brain & Spine Clinic", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:30 PM - 8:00 PM", fees: 2000, rating: 5, reviews: 5200, image: "./Images/doc1.jpg" },

    { name: "Dr. Sweety Joshi", address: "Mumbai, India", degree: "MBBS, DM (Neurology)", age: 48, experience: 22, college: "Seth GS Medical College, Mumbai", Clinic: "NeuroCare Center", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 1800, rating: 4.9, reviews: 4800, image: "./Images/doc2.jpg" },

    { name: "Dr. Rukmini Shetty", address: "Bangalore, India", degree: "MBBS, DM (Neurology)", age: 50, experience: 25, college: "St. John’s Medical College, Bangalore", Clinic: "Shetty Neuro Care", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Mon to Thu: 5:00 PM - 7:30 PM", fees: 1900, rating: 4.8, reviews: 4500, image: "./Images/doc3.jpg" },

    { name: "Dr. Priya Nambiar", address: "Chennai, India", degree: "MBBS, DM (Neurology)", age: 45, experience: 20, college: "Madras Medical College, Chennai", Clinic: "Nambiar Neurology Clinic", Morning: "Mon to Sat: 8:30 AM - 12:00 PM", Evening: "Tue, Thu, Sat: 6:00 PM - 8:00 PM", fees: 1850, rating: 4.9, reviews: 4300, image: "./Images/doc4.jpg" },

    { name: "Dr. Kanishka Rao", address: "Hyderabad, India", degree: "MBBS, DM (Neurology)", age: 52, experience: 28, college: "Osmania Medical College, Hyderabad", Clinic: "Advanced Neuro Solutions", Morning: "Mon to Sat: 9:00 AM - 1:00 PM", Evening: "Mon to Fri: 5:00 PM - 7:30 PM", fees: 1950, rating: 4.8, reviews: 4600, image: "./Images/doc5.jpg" },

    { name: "Dr. Snehas Gupta", address: "Pune, India", degree: "MBBS, DM (Neurology)", age: 38, experience: 14, college: "B.J. Medical College, Pune", Clinic: "Gupta NeuroCare", Morning: "Mon to Sat: 10:00 AM - 1:30 PM", Evening: "Mon, Wed, Fri: 6:30 PM - 8:30 PM", fees: 1750, rating: 4.7, reviews: 4200, image: "./Images/doc6.jpg" },

    { name: "Dr. Anupam Das", address: "Kolkata, India", degree: "MBBS, DM (Neurology)", age: 55, experience: 30, college: "IPGMER and SSKM Hospital, Kolkata", Clinic: "Das Neuro Clinic", Morning: "Mon to Sat: 9:30 AM - 12:30 PM", Evening: "Tue, Thu, Sat: 5:30 PM - 7:30 PM", fees: 1850, rating: 4.6, reviews: 4000, image: "./Images/doc7.jpg" },

    { name: "Dr. Millie Kapoor", address: "Ahmedabad, India", degree: "MBBS, DM (Neurology)", age: 40, experience: 16, college: "B.J. Medical College, Ahmedabad", Clinic: "Kapoor Brain & Spine Center", Morning: "Mon to Sat: 10:00 AM - 12:30 PM", Evening: "Mon, Wed, Fri: 6:00 PM - 8:00 PM", fees: 1800, rating: 4.7, reviews: 3900, image: "./Images/doc8.jpg" }
];

function generateNeurologists() {
    let neurologistsList = document.getElementById("neurologists-list");
    neurologistsList.innerHTML = "";

    neurologists.forEach(neurologist => {
        let neurologistHTML = `
            <div class="doctor-card">
                <img src="${neurologist.image}" alt="${neurologist.name}" class="doctor-img">
                <div class="doctor-info">
                    <p class="doctor-name">${neurologist.name}</p>
                    <p class="doctor-details"><b>Address:</b> ${neurologist.address}</p>
                    <p class="doctor-details"><b>Degree:</b> ${neurologist.degree}</p>
                    <p class="doctor-details"><b>Age:</b> ${neurologist.age} years</p>
                    <p class="doctor-details"><b>Experience:</b> ${neurologist.experience} years</p>
                    <p class="doctor-details"><b>Education:</b> ${neurologist.college}</p>
                    <p class="doctor-details"><b>Clinic:</b> ${neurologist.Clinic}</p>
                    <p class="doctor-details"><b>Morning:</b> ${neurologist.Morning}</p>
                    <p class="doctor-details"><b>Evening:</b> ${neurologist.Evening}</p>
                    <p class="doctor-details"><b>Fees:</b> ₹${neurologist.fees}</p>
                    <p class="review">⭐ ${neurologist.rating} / 5 (${neurologist.reviews}+ reviews)</p>
                    <button class="book-btn" data-name="${neurologist.name}" data-clinic="${neurologist.Clinic}" data-fees="${neurologist.fees}">BOOK APPOINTMENT</button>
                </div>
            </div>
        `;
        neurologistsList.innerHTML += neurologistHTML;
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

document.addEventListener("DOMContentLoaded", generateNeurologists);
