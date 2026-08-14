function showPaymentSection() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    if (!name || !phone || !email || !dob || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("paymentSection").classList.remove("hidden");
}

function processPayment() {
    setTimeout(() => {
        // Hide Payment Section
        document.getElementById("paymentSection").classList.add("hidden");

        // Show Confirmation Message
        document.getElementById("confirmationMessage").classList.remove("hidden");

        // Clear Form Fields
        document.getElementById("appointmentForm").reset();

        // Keep Confirmation Message for 5 seconds, then hide it
        setTimeout(() => {
            document.getElementById("confirmationMessage").classList.add("hidden");
        }, 6000); // 6000ms = 6 seconds

    }, 1000);
}

function goBack() {
    window.location.href = "../index2.html"; 
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has("name") && params.has("clinic") && params.has("fees")) {
        document.querySelector("h2").innerHTML = `<b>Book an appointment with</b> <br> <b style="font-size: 22px;">${params.get("name")}</b>`;
        document.getElementById("doctor-info").innerHTML = `
            <p><b>Clinic:</b> ${params.get("clinic")}</p>
            <p><b>Fees:</b> ${params.get("fees")}</p>
        `;
    }
});

