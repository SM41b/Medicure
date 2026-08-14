const doctors = [
    { name: "Dr. Surajit Sen", address: "Chandannagar, India", degree: "BHMS", age: 50, experience: 28, college: "MBH Medical College and Hospital, Howrah", Clinic: "Holistic Healing Homeo Care", Morning: "Mon, Tue and Thur to Sat: 9:00 AM - 12:30 PM, Wed and Sun: Closed", Evening: "Mon to Fri and Sun: 5:00 PM - 8:00 PM, Sat: Closed", fees: 500, rating: 5, reviews: 5500, image: "./Images/doc1.jpeg" },
    { name: "Dr. Anil Mehta", address: "Mumbai, India", degree: "BHMS", age: 48, experience: 25, college: "Yerala Homoeopathic Medical College, Mumbai", Clinic: "Vital Essence Homeopathy", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 350, image: "./Images/_3ee03a67-e390-4529-8c71-4ca83dfd7b60.jpg"},
    { name: "Dr. Priya Sharma", address: "Delhi, India", degree: "BHMS", age: 38, experience: 15, college: "Nehru Homoeopathic Medical College, Delhi", Clinic: "Pure Remedy Homeo Clinic", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon to Sat: 5:00 PM - 8:00 PM, Sun: Closed", fees: 300, image: "./Images/Dr. Priya Sharma.jpg" },
    { name: "Dr. Rajesh Khanna", address: "Bangalore, India", degree: "BHMS", age: 42, experience: 18, college: "Government Homoeopathic Medical College, Bangalore", Clinic: "Nature's Cure Homeopathy", Morning: "Mon to Fri: 9:00 AM - 12:30 PM, Sat and Sun: Closed", Evening: "Mon to Sun: 5:00 PM - 8:00 PM", fees: 450, image: "./Images/_b3213624-0efd-4f23-b737-303e6ceb9d88.jpg" },
    { name: "Dr. Kavita Iyer", address: "Chennai, India", degree: "BHMS", age: 35, experience: 12, college: "Sri Sairam Homoeopathic Medical College, Chennai", Clinic: "EternaCare Homeo Clinic", Morning: "Mon, Wed to Sun: 9:00 AM - 12:30 PM, Tue: Closed", Evening: "Mon, Wed to Sat: 5:00 PM - 8:00 PM, Sun: 6:00 PM to 8:00 PM, Tue: Closed", fees: 250, image: "./Images/Dr. Kavita Iyer.jpg" },
    { name: "Dr. Arvind Pandey", address: "Pune, India", degree: "BHMS", age: 47, experience: 22, college: "Dhondumama Sathe Homoeopathic Medical College, Pune", Clinic: "Harmony Homeopathic Centre", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Tue to Fri: 5:00 PM - 8:00 PM, Mon: 6:00 PM to 8:00 PM, Sat and Sun: Closed", fees: 300, image: "./Images/_31803bb0-a0e2-458e-a42d-5f71b3616f39.jpg" },
    { name: "Dr. Neha Bansal", address: "Hyderabad, India", degree: "BHMS", age: 40, experience: 17, college: "Jaisoorya Government Homoeopathic Medical College, Hyderabad", Clinic: "Rejuvena Homeo Healing", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Sat: 5:00 PM - 8:00 PM, Sun: Closed", fees: 400, image: "./Images/Dr. Neha Bansal.jpg" },
    { name: "Dr. Vikram Sinha", address: "Lucknow, India", degree: "BHMS", age: 30, experience: 8, college: "State Lal Bahadur Shastri Homoeopathic Medical College, Allahabad", Clinic: "Tranquil Touch Homeopathy", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 100, image: "./Images/_a6fd507e-473a-4d76-8335-9f2b9781d494.jpg" },
    { name: "Dr. Swati Deshpande", address: "Nagpur, India", degree: "BHMS", age: 39, experience: 16, college: "Anand Homoeopathic Medical College, Nagpur", Clinic: "Serene Cure Homeo Hub", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 200, image: "./Images/Dr. Swati Deshpande.jpg" },
    { name: "Dr. Amitabh Joshi", address: "Jaipur, India", degree: "BHMS", age: 48, experience: 23, college: "Rajasthan Vidyapeeth Homoeopathic Medical College, Udaipur", Clinic: "Blissful Balance Homeopathy", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 500, image: "./Images/_a83cb667-d462-42d9-92f3-c9748b233719.jpg" },
    { name: "Dr. Ramesh Patil", address: "Indore, India", degree: "BHMS", age: 46, experience: 21, college: "S. K. Homoeopathic Medical College, Indore", Clinic: "Holistic Haven Homeo Clinic", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 350, image: "./Images/_fd6b8e13-30d8-400a-816e-489d8efeddd9.jpg" },
    { name: "Dr. Meera Chakraborty", address: "Bhubaneswar, India", degree: "BHMS", age: 41, experience: 18, college: "Bhubaneswar Homoeopathic Medical College", Clinic: "Naturalis Homeo Wellness", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 300, image: "./Images/Dr. Meera Charaborty.jpg" },
    { name: "Dr. Alok Verma", address: "Patna, India", degree: "BHMS", age: 43, experience: 20, college: "Shri Kamaxidevi Homoeopathic Medical College, Goa", Clinic: "LifeSpring Homeopathy", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 400, image: "./Images/_10da5acf-2261-4c1d-852f-b52933df4fa3.jpg" },
    { name: "Dr. Ritu Agarwal", address: "Chandigarh, India", degree: "BHMS", age: 37, experience: 14, college: "Homoeopathic Medical College, Chandigarh", Clinic: "Eden Essence Homeo Care", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 250, image: "./Images/Dr. Ritu Agarwal.jpg" },
    { name: "Dr. Devendra Singh", address: "Bhopal, India", degree: "BHMS", age: 49, experience: 24, college: "RKDF Homoeopathic Medical College, Bhopal", Clinic: "Soulful Healing Homeo Centre", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 500, image: "./Images/_953ddc3c-021c-44e5-a011-04ce7194f488.jpg" },
    { name: "Dr. Anjali Nair", address: "Thiruvananthapuram, India", degree: "BHMS", age: 36, experience: 13, college: "Government Homoeopathic Medical College, Kerala", Clinic: "Elixir Homeopathy Clinic", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 150, image: "./Images/Dr. Anjali Nair.jpg" },
    { name: "Dr. Sameer Kumar", address: "Ranchi, India", degree: "BHMS", age: 45, experience: 20, college: "Ranchi Homoeopathic Medical College", Clinic: "Mind-Body Homeo Healing", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 450, image: "./Images/_86652eda-15d5-482b-a695-9017f289c41c.jpg" },
    { name: "Dr. Anupama Gupta", address: "Guwahati, India", degree: "BHMS", age: 39, experience: 16, college: "Assam Homoeopathic Medical College", Clinic: "Symphony Homeopathy Centre", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 320, image: "./Images/Dr. Anupama Gupta.jpg" },
    { name: "Dr. Vikrant Dubey", address: "Raipur, India", degree: "BHMS", age: 32, experience: 9, college: "Raipur Homoeopathic Medical College", Clinic: "RenewWell Homeo Hub", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 150, image: "./Images/_68ac4e38-ab82-4dc3-8c82-e51333ffc49e.jpg" },
    { name: "Dr. Pratima Roy", address: "Kolkata, India", degree: "BHMS", age: 40, experience: 18, college: "The Calcutta Homoeopathic Medical College & Hospital", Clinic: "True Vitality Homeopathy", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 380, image: "./Images/Dr. Pratima Roy.jpg" }
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
            
            const url = `../Book Appointment/appointment.html?name=${name}&clinic=${clinic}&fees=${fees}`;
            console.log("Redirecting to:", url);
            window.location.href = url;
        });
    });
}

// Ensure the function runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateDoctors);
