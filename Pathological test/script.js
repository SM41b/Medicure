document.addEventListener("DOMContentLoaded", () => {
    const paymentMethod = document.getElementById("paymentMethod");
    const upi = document.getElementById("upiSection");
    const card = document.getElementById("cardSection");
    const qr = document.getElementById("qrSection");
    const emi = document.getElementById("emiSection");
    const payNowBtn = document.getElementById("payNowBtn");
    const testDropdown = document.getElementById("test");
    const priceInput = document.getElementById("selected-price");

    let paymentDone = false; // Track if payment was made

    // Dummy prices
    const testPrices = {
        "CBC": 450,
        "MRI": 2500,
        "Blood Sugar": 500,
        "Lipid Profile": 1000,
        "Thyroid Profile": 900,
        "Vitamin D": 1250,
        "Liver Function Test": 700,
        "HbA1c": 500,
        "COVID-19 RT-PCR": 800,
        "Kidney Function Test": 900,
        "ECG": 400,
        "Urine Routine & Microscopy": 350
    };

    // Show price when test selected
    testDropdown.addEventListener("change", () => {
        const selectedTest = testDropdown.value;
        if (testPrices[selectedTest]) {
            priceInput.value = "₹" + testPrices[selectedTest];
        } else {
            priceInput.value = "";
        }
    });

    // Show payment section & Pay Now button
    paymentMethod.addEventListener("change", function () {
        [upi, card, qr, emi].forEach(el => el.style.display = "none");
        payNowBtn.style.display = "none";
        paymentDone = false; // Reset when user changes method

        if (this.value && this.value !== "cash") {
            document.getElementById(this.value + "Section").style.display = "block";
            payNowBtn.style.display = "inline-block"; // show Pay Now button
        } else if (this.value === "cash") {
            alert("💵 Cash selected. Please pay at the time of visit.");
        }
    });

    // Dummy payment success
    payNowBtn.addEventListener("click", function () {
        const selectedTest = testDropdown.value;
        const price = priceInput.value;

        if (!selectedTest || !price) {
            alert("⚠️ Please select a test before payment.");
            return;
        }

        alert(`✅ Payment Successful!\n\nTest: ${selectedTest}\nAmount Paid: ${price}`);
        paymentDone = true;
    });

    // Appointment Form Submission
    document.getElementById("appointmentForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const phone = document.getElementById("phone").value.trim();
        if (!/^\d{10}$/.test(phone)) {
            alert("⚠️ Phone number must be exactly 10 digits.");
            return;
        }

        const paymentType = paymentMethod.value;

        // Prevent submission if Pay Now not clicked (except Cash)
        if (paymentType !== "cash" && !paymentDone) {
            alert("⚠️ Please complete payment before booking your appointment.");
            return;
        }

        const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: phone,
            test: testDropdown.value,
            price: priceInput.value,
            date: document.getElementById("date").value,
            paymentMethod: paymentType
        };

        // Payment-specific validation
        if (paymentType === "upi") {
            formData.upiId = document.getElementById("upiId").value;
        } else if (paymentType === "card") {
            const cardNum = document.getElementById("cardNumber").value.trim();
            if (!/^\d{16}$/.test(cardNum)) {
                alert("⚠️ Please enter a valid 16-digit card number.");
                return;
            }
            formData.cardNumber = cardNum;
            formData.cardExpiry = document.getElementById("cardExpiry").value;
            formData.cardCVV = document.getElementById("cardCVV").value;
        } else if (paymentType === "emi") {
            formData.emiPlan = document.getElementById("emiPlan").value;
        }

        // Save in local storage 
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

        // ✅ Ensure 'phone' and 'status' are included in saved data
        formData.status = "🧪 Test Booked - Pending Sample Collection";  // Default status

        // If your appointment form includes a phone input, make sure it's added to formData
        // Example: formData.phone = document.getElementById("phoneInput").value.trim();

        appointments.push(formData);
        localStorage.setItem("appointments", JSON.stringify(appointments));

        // Confirmation message
        alert(`📅 Appointment booked successfully!
        ---------------------------------
        Name: ${formData.name}
        Phone: ${formData.phone || "N/A"}
        Test: ${formData.test}
        Price: ${formData.price}
        Date: ${formData.date}
        Payment: ${formData.paymentMethod}`);

        // Reset form
        this.reset();
        priceInput.value = "";
        payNowBtn.style.display = "none";
        [upi, card, qr, emi].forEach(el => el.style.display = "none");
        paymentDone = false;

      

    });
});









// --------------------------------------------------------------------------------------------------


    // Track Report Status
    document.getElementById("trackBtn").addEventListener("click", () => {
        const input = document.getElementById("trackInput").value.trim();
        const statusEl = document.getElementById("trackStatus");

        if (!input) {
            statusEl.textContent = "Status: Please enter mobile number or name.";
            return;
        }

        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        const match = appointments.find(a =>
            a.phone === input || a.name.toLowerCase() === input.toLowerCase()
        );

        if (match) {
            const today = new Date().toISOString().split("T")[0];
            const diff = new Date(today) - new Date(match.date);

            let status = "In Progress";
            if (diff > 0) status = "Report Ready";
            if (diff >= 3 * 24 * 60 * 60 * 1000) status = "Completed";

            statusEl.textContent = `Status: ${status} for ${match.name}`;
        } else {
            statusEl.textContent = "Status: No matching appointment found.";
        }
    });


    






    // FAQ Accordion Toggle
    document.querySelectorAll("#faq details").forEach((detail) => {
        detail.addEventListener("toggle", () => {
            const icon = detail.querySelector(".icon");
            if (icon) icon.textContent = detail.open ? "➖" : "➕";
        });
    });




// --------------------------------------------------------------------testcard section -----------------------
const slider = document.querySelector('.tests-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardWidth = 320; // card width + gap
const visibleCards = Math.floor(document.querySelector('.slider-container').offsetWidth / cardWidth);

// Duplicate slider content for seamless infinite scroll
slider.innerHTML += slider.innerHTML;

let currentIndex = 0;

function updateSlider() {
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Next button
nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateSlider();
  checkLoop();
});

// Prev button
prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateSlider();
  checkLoop();
});

// Auto-slide
setInterval(() => {
  currentIndex++;
  updateSlider();
  checkLoop();
}, 4000);

// Loop logic
function checkLoop() {
  // After transition ends, reset position if we've scrolled past the original content
  slider.addEventListener('transitionend', () => {
    const totalCards = slider.children.length / 2; // original + duplicate
    if (currentIndex >= totalCards) {
      slider.style.transition = 'none';
      currentIndex = 0;
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else if (currentIndex < 0) {
      slider.style.transition = 'none';
      currentIndex = totalCards - 1;
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, { once: true });
}

// Book Now buttons
document.querySelectorAll(".btn-book").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("appointment").scrollIntoView({ behavior: "smooth" });
  });
});
