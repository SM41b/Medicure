const doctors = [ 
    { name: "Dr. Sandeep Tiwari", address: "Varanasi, India", degree: "BAMS", age: 52, experience: 30, college: "Banaras Hindu University, Varanasi", Clinic: "Vedic Healing Ayurveda Clinic", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat: 6:00 PM to 8:00 PM, Sun: Closed", fees: 1000, rating: 5, reviews: 6200, image: "./Images/doc1.jpg" },
    { name: "Dr. Shivam Yadav", address: "Lucknow, India", degree: "BAMS", "age": 27, experience: 5, college: "State Ayurvedic College, Lucknow", Clinic: "Sanjeevani Ayurvedic Center", Morning: "Mon, Wed to Sun: 9:00 AM - 12:30 PM, Tue: Closed", Evening: "Mon to Sun: 5:00 PM - 8:00 PM", fees: 250, image: "./Images/doc2.jpg" },
    { name: "Dr. Pooja Bhandari", address: "Mumbai, India", degree: "MD (Ayurveda)", age: 40, experience: 18, college: "R.A. Podar Ayurved Medical College, Mumbai", Clinic: "Ayushman Ayurvedic Care", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon to Sat: 5:00 PM - 8:00 PM, Sun: Closed", fees: 750, image: "./Images/Pooja.jpg" },
    { name: "Dr. Rajendra Chauhan", address: "Indore, India", degree: "BAMS", age: 50, experience: 28, college: "Government Ashtang Ayurved College, Indore", Clinic: "Patanjali Wellness Clinic", Morning: "Tue to Sat: 9:00 AM - 12:30 PM, Mon and Sun : Closed", Evening: "Mon to Sat: 5:00 PM - 8:00 PM, Sun: 6:00 PM to 8:00 PM", fees: 650, image: "./Images/doc4.jpg" },
    { name: "Dr. Sneha Iyer", address: "Chennai, India", "degree": "BAMS", "age": 32, "experience": 8, "college": "Sri Jayendra Saraswathi Ayurveda College, Chennai", Clinic: "Nature’s Cure Ayurveda", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon to Sun: 5:00 PM - 8:00 PM", fees: 400, image: "./Images/Sneha.jpg" },
    { name: "Dr. Nitin Joshi", address: "Pune, India", "degree": "MD (Ayurveda)", "age": 45, "experience": 22, "college": "Tilak Ayurved Mahavidyalaya, Pune", Clinic: "Dhanvantari Ayurveda Center", Morning: "Mon to Fri and Sun: 9:00 AM - 12:30 PM, Sat: Closed", Evening: "Mon, Tue, Thur, Sun: 5:00 PM - 8:00 PM, Wed and Sat: Closed", fees: 900, image: "./Images/doc6.jpg" },
    { name: "Dr. Rachna Gupta", address: "Hyderabad, India", "degree": "BAMS", "age": 47, "experience": 24, "college": "Dr. BRKR Government Ayurvedic College, Hyderabad", Clinic: "Amrutam Ayurvedic Clinic", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat and Sun: Closed", "fees": 700, "image": "./Images/Rachna.jpg" },
    { name: "Dr. Aditya Verma", address: "Bhopal, India", "degree": "BAMS", "age": 29, "experience": 6, "college": "RKDF Ayurvedic Medical College, Bhopal",Clinic: "Jeevan Jyoti Ayurveda", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon to Sun: 5:00 PM - 8:00 PM", "fees": 300, "image": "./Images/doc8.jpg" },
    { name: "Dr. Sanjukta Khatua", address: "Medinipur, West Bengal, India", "degree": "BAMS", "age": 28, "experience": 6, "college": "Chaudhary Brahm Prakash Ayurved Charak Sansthan, Delhi", Clinic: "Ayushveda Herbal Clinic", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon, Tue, Thur to Sun: 5:00 PM - 8:00 PM, Wed: Closed", "fees": 300, "image": "./Images/Sanjukta.jpg" },
    { name: "Dr. Vikrant Sinha", address: "Jaipur, India", "degree": "BAMS", "age": 26, "experience": 4, "college": "National Institute of Ayurveda, Jaipur", Clinic: "Arogyam Ayurvedic Care", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon to Sun: 5:00 PM - 8:00 PM", "fees": 300, "image": "./Images/doc10.jpg" },
    { name: "Dr. Swati Mishra", address: "Raipur, India", "degree": "BAMS", "age": 49, "experience": 25, "college": "Raipur Ayurvedic Medical College, Raipur", Clinic: "Panchkarma Wellness Center", Morning: "Mon to Sat: 9:00 AM - 12:30 PM", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat and Sun: Closed", "fees": 950, "image": "./Images/Swati.jpg" },
    { name: "Dr. Amitabh Kulkarni", address: "Bangalore, India", "degree": "MD (Ayurveda)", "age": 42, "experience": 20, "college": "Government Ayurvedic Medical College, Bangalore", Clinic: "Swasthya Ayurvedic Clinic", Morning: "Tue to Sun: 9:00 AM - 12:30 PM, Mon: 11:00 AM to 12:00 PM", Evening: "Mon to Wed, Fri to Sun: 5:00 PM - 8:00 PM, Thur: Closed", "fees": 850, "image": "./Images/doc12.jpg" },
    { name: "Dr. Ramesh Patil", address: "Ahmedabad, India", "degree": "BAMS", "age": 34, "experience": 10, "college": "Akhandanand Ayurved College, Ahmedabad", Clinic: "Herbal Healing Ayurveda", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Sat: 5:00 PM - 8:00 PM", "fees": 480, "image": "./Images/doc13.jpg" },
    { name: "Dr. Anjali Mehta", address: "Kolkata, India", "degree": "BAMS", "age": 38, "experience": 15, "college": "JB Roy State Ayurvedic Medical College, Kolkata", Clinic: "Divya Jeevan Ayurveda", Morning: "Mon to Sat: 9:00 AM - 12:30 PM, Sun: Closed", Evening: "Mon to Sat: 5:00 PM - 8:00 PM, Sun: Closed", "fees": 550, "image": "./Images/Anjali.jpg" },
    { name: "Dr. Sanjay Kapoor", address: "Patna, India", "degree": "BAMS", "age": 51, "experience": 29, "college": "Government Ayurvedic College, Patna", Clinic: "Chandana Ayurvedic Therapy", Morning: "Mon to Fri: 9:00 AM - 12:30 PM, Sun: 11:00 AM to 12:00 PM, Sat: Closed", Evening: "Mon to Sat: 5:00 PM - 8:00 PM, Sun: Closed", "fees": 720, "image": "./Images/doc15.jpg" },
    { name: "Dr. Ritika Nair", address: "Thiruvananthapuram, India", "degree": "BAMS", "age": 40, "experience": 15, "college": "Government Ayurveda College, Kerala", Clinic: "AyurSutra Wellness Clinic", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon, Wed to Sun: 5:00 PM - 8:00 PM, Tue: Closed", "fees": 650, "image": "./Images/Ritika.jpg" },
    { name: "Dr. Sameer Saxena", address: "Guwahati, India", "degree": "BAMS", "age": 45, "experience": 21, "college": "Government Ayurvedic College, Guwahati", Clinic: "Brahmi Ayurvedic Center", Morning: "Mon to Thur, Sat and Sun: 9:00 AM - 12:30 PM, Fri: Closed", Evening: "Mon to Fri: 5:00 PM - 8:00 PM, Sat and Sun: Closed", "fees": 680, "image": "./Images/doc17.jpg" },
    { name: "Dr. Deepika Rao", address: "Bhubaneswar, India", "degree": "MD (Ayurveda)", "age": 37, "experience": 14, "college": "Gopabandhu Ayurveda Mahavidyalaya, Puri", Clinic: "Jivanam Ayurveda & Wellness", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Tue to Sun: 5:00 PM - 8:00 PM, Mon: Closed", "fees": 600, "image": "./Images/Deepika.jpg" },
    { name: "Dr. Manish Deshpande", address: "Nagpur, India", "degree": "BAMS", "age": 28, "experience": 6, "college": "Shri Ayurved Mahavidyalaya, Nagpur", Clinic: "Sukhayu Ayurveda Clinic", Morning: "Mon to Sun: 9:00 AM - 12:30 PM", Evening: "Mon to Sun: 5:00 PM - 8:00 PM", "fees": 350, "image": "./Images/doc19.jpg" },
    { name: "Dr. Preeti Chawla", address: "Chandigarh, India", "degree": "BAMS", "age": 43, "experience": 18, "college": "Shri Dhanwantri Ayurvedic College, Chandigarh", Clinic: "Ayurvedic Bliss Health Center", Morning: "Mon, Wed to Sun: 9:00 AM - 12:30 PM and Tue: 10:00 AM to 12:00 PM", Evening: "Wed to Sun: 5:00 PM - 8:00 PM, Mon and Tue: Closed", "fees": 560, "image": "./Images/Preeti.jpg" }
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


