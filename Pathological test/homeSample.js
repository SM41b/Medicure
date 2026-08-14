document.addEventListener("DOMContentLoaded", function () {
  const enableHomeSample = document.getElementById("enableHomeSample");
  const form = document.getElementById("homeSampleForm");
  const tests = document.querySelectorAll(".hsTest");
  const totalPriceEl = document.getElementById("totalPrice");
  const paymentMethod = document.getElementById("hspaymentMethod");
  const paymentDetailsContainer = document.getElementById("hspaymentDetailsContainer");
  const payBtn = document.getElementById("hspayNowBtn");
  const msg = document.getElementById("hsMsg");
  const dateInput = document.getElementById("hsDate");

  let paymentDone = false; // ✅ Track payment status

  // ✅ Prevent past dates
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);

  // ✅ Show/hide form
  enableHomeSample.addEventListener("change", () => {
    form.style.display = enableHomeSample.checked ? "block" : "none";
    msg.textContent = "";
  });

  // ✅ Calculate price
  tests.forEach(chk => {
    chk.addEventListener("change", () => {
      let total = 0;
      tests.forEach(t => { if (t.checked) total += parseInt(t.dataset.price); });
      totalPriceEl.textContent = total;
    });
  });

  // ✅ Show payment details dynamically
  paymentMethod.addEventListener("change", () => {
    paymentDetailsContainer.innerHTML = "";
    msg.textContent = "";
    paymentDone = false; // reset payment if method changes

    if (paymentMethod.value === "upi") {
      paymentDetailsContainer.innerHTML = `
        <label>UPI ID: <input type="text" id="upiId" placeholder="example@upi"></label>`;
    } 
    else if (paymentMethod.value === "card") {
      paymentDetailsContainer.innerHTML = `
        <label>Card Number: <input type="text" id="cardNum" placeholder="1234 5678 9012 3456"></label>
        <label>Expiry: <input type="text" id="cardExp" placeholder="MM/YY"></label>
        <label>CVV: <input type="text" id="cardCvv" placeholder="123"></label>`;
    } 
    else if (paymentMethod.value === "qr") {
      paymentDetailsContainer.innerHTML = `
        <p>Scan to Pay:</p>
        <img src="qr_sample.png" alt="QR Code" width="150" />`;
    } 
    else if (paymentMethod.value === "cash") {
      paymentDetailsContainer.innerHTML = `<p>💵 Cash selected. No details needed.</p>`;
      paymentDone = true; // ✅ cash doesn’t require Pay Now
    }
  });

  // ✅ Pay Now flow
  payBtn.addEventListener("click", () => {
    const method = paymentMethod.value;
    if (!method) {
      msg.style.color = "red";
      msg.textContent = "⚠️ Please select a payment method.";
      return;
    }

    let valid = false;
    if (method === "upi" && document.getElementById("upiId")?.value.trim()) valid = true;
    if (method === "card" &&
        document.getElementById("cardNum")?.value.trim() &&
        document.getElementById("cardExp")?.value.trim() &&
        document.getElementById("cardCvv")?.value.trim()) valid = true;
    if (method === "qr") valid = true; // ✅ just showing QR counts as valid

    if (!valid && method !== "cash") {
      msg.style.color = "red";
      msg.textContent = "⚠️ Please fill in payment details.";
      return;
    }

    if (method !== "cash") {
      paymentDone = true;
      msg.style.color = "green";
      msg.textContent = "✅ Payment Successful! Now click Schedule Visit to confirm appointment.";
    }
  });

  // ✅ Schedule visit (only if Pay Now done for non-cash)
  form.addEventListener("submit", (e) => {
    const method = paymentMethod.value;

    if (method !== "cash" && !paymentDone) {
      e.preventDefault();
      msg.style.color = "red";
      msg.textContent = "⚠️ Please complete payment first by clicking Pay Now.";
      return;
    }

    e.preventDefault();
    const name = document.getElementById("hsName").value;
    const date = document.getElementById("hsDate").value;
    const time = document.getElementById("hsTime").value;
    const testsSelected = [...tests].filter(t => t.checked).map(t => t.value).join(", ") || "None";
    const total = totalPriceEl.textContent;

    msg.style.color = "green";
    msg.textContent = `✔️ Appointment confirmed for ${name} on ${date} at ${time}. Tests: ${testsSelected}. Total: ₹${total}`;

    // Reset but keep form visible if checkbox still checked
    form.reset();
    totalPriceEl.textContent = "0";
    paymentDetailsContainer.innerHTML = "";
    paymentDone = false;
    if (enableHomeSample.checked) form.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".test-item input[type='checkbox']");
  const totalDisplay = document.getElementById("totalPrice");

  function updateTotal() {
    let total = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) {
        total += parseFloat(cb.dataset.price); // take price from data-price
      }
    });
    totalDisplay.textContent = "Total Price: ₹" + total;
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateTotal);
  });

  updateTotal(); // initial update
});