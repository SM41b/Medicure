/* ---------- Data: 30 items per category with explicit prices (₹) ---------- */
const categories = {
  "All": [],
  "Allopathic Medicine": [
    {name:"Paracetamol 500mg", price:32, purpose:"Pain relief and fever reduction"},
    {name:"Ibuprofen 400mg", price:48, purpose:"Pain, inflammation, and fever relief"},
    {name:"Amoxicillin 500mg", price:85, purpose:"Antibiotic for bacterial infections"},
    {name:"Azithromycin 500mg", price:140, purpose:"Antibiotic for respiratory and skin infections"},
    {name:"Cetirizine 10mg", price:28, purpose:"Allergy relief (runny nose, itching, sneezing)"},
    {name:"Montelukast 10mg", price:70, purpose:"Asthma and allergy prevention"},
    {name:"Diclofenac 50mg", price:36, purpose:"Pain and inflammation relief"},
    {name:"Omeprazole 20mg", price:52, purpose:"Acidity, heartburn, gastric ulcers"},
    {name:"Pantoprazole 40mg", price:68, purpose:"GERD and acidity relief"},
    {name:"Metformin 500mg", price:34, purpose:"Blood sugar control in diabetes"},
    {name:"Amlodipine 5mg", price:45, purpose:"High blood pressure control"},
    {name:"Losartan 50mg", price:60, purpose:"Hypertension treatment"},
    {name:"Hydroxychloroquine 200mg", price:85, purpose:"Malaria and arthritis treatment"},
    {name:"Doxycycline 100mg", price:58, purpose:"Antibiotic for infections"},
    {name:"Prednisolone 10mg", price:40, purpose:"Anti-inflammatory and allergy relief"},
    {name:"Furosemide 40mg", price:55, purpose:"Diuretic for swelling and heart failure"},
    {name:"Atorvastatin 10mg", price:65, purpose:"Cholesterol control"},
    {name:"Clopidogrel 75mg", price:120, purpose:"Blood thinner for heart patients"},
    {name:"Glibenclamide 5mg", price:42, purpose:"Type 2 diabetes treatment"},
    {name:"Insulin Injection", price:180, purpose:"Blood sugar regulation"},
    {name:"Levothyroxine 50mcg", price:35, purpose:"Thyroid hormone replacement"},
    {name:"Carbamazepine 200mg", price:95, purpose:"Epilepsy and nerve pain treatment"},
    {name:"Salbutamol Inhaler", price:150, purpose:"Asthma relief"},
    {name:"Ranitidine 150mg", price:30, purpose:"Acidity relief"},
    {name:"Erythromycin 250mg", price:78, purpose:"Bacterial infection treatment"},
    {name:"Ciprofloxacin 500mg", price:85, purpose:"Urinary and respiratory infection"},
    {name:"Tramadol 50mg", price:65, purpose:"Moderate pain relief"},
    {name:"Morphine 10mg", price:250, purpose:"Severe pain relief"},
    {name:"Warfarin 5mg", price:55, purpose:"Blood thinner"},
    {name:"Spironolactone 25mg", price:48, purpose:"Fluid retention and heart failure"}
  ],

  "Ayurvedic Medicine": [
    {name:"Ashwagandha Powder", price:120, purpose:"Stress relief and immunity boost"},
    {name:"Triphala Churna", price:90, purpose:"Digestive health and detox"},
    {name:"Chyawanprash", price:250, purpose:"Immunity and energy"},
    {name:"Brahmi Capsules", price:180, purpose:"Memory and concentration improvement"},
    {name:"Neem Tablets", price:95, purpose:"Skin health and blood purifier"},
    {name:"Giloy Juice", price:140, purpose:"Fever and immunity booster"},
    {name:"Aloe Vera Juice", price:150, purpose:"Skin health and digestion"},
    {name:"Turmeric Capsules", price:110, purpose:"Anti-inflammatory"},
    {name:"Shatavari Powder", price:130, purpose:"Women's health and hormone balance"},
    {name:"Amla Juice", price:125, purpose:"Vitamin C source and immunity"},
    {name:"Gokshura Capsules", price:175, purpose:"Kidney and urinary health"},
    {name:"Karela Juice", price:140, purpose:"Blood sugar control"},
    {name:"Arjuna Bark Powder", price:160, purpose:"Heart health"},
    {name:"Moringa Powder", price:150, purpose:"Nutritional supplement"},
    {name:"Safed Musli", price:220, purpose:"Strength and vitality"},
    {name:"Patanjali Divya Medha Vati", price:85, purpose:"Memory and mental health"},
    {name:"Patanjali Divya Mukta Vati", price:95, purpose:"Blood pressure control"},
    {name:"Isabgol Husk", price:70, purpose:"Constipation relief"},
    {name:"Himalaya Liv.52", price:120, purpose:"Liver health"},
    {name:"Baidyanath Mahasudarshan Churna", price:95, purpose:"Fever and cold relief"},
    {name:"Ayush Kwath", price:80, purpose:"Immunity boost"},
    {name:"Dashmoolarishta", price:150, purpose:"Postnatal recovery and strength"},
    {name:"Punarnava Tablets", price:130, purpose:"Kidney and liver health"},
    {name:"Sitopaladi Churna", price:90, purpose:"Cold and cough relief"},
    {name:"Himalaya Septilin", price:140, purpose:"Immunity and infection resistance"},
    {name:"Baidyanath Triphala Juice", price:110, purpose:"Detox and digestion"},
    {name:"Himalaya Ashvagandha Tablets", price:150, purpose:"Energy and stress relief"},
    {name:"Kottakkal Dhanwantharam Oil", price:210, purpose:"Joint and muscle pain relief"},
    {name:"Patanjali Aloe Vera Gel", price:80, purpose:"Skin health"},
    {name:"Himalaya Tulasi Tablets", price:85, purpose:"Respiratory health"}
  ],

  "Homeopathic Medicine": [
    {name:"Arnica Montana 30C", price:95, purpose:"Pain and injury healing"},
    {name:"Belladonna 30C", price:85, purpose:"Fever and inflammation"},
    {name:"Nux Vomica 30C", price:75, purpose:"Indigestion and nausea"},
    {name:"Rhus Tox 30C", price:90, purpose:"Joint and muscle pain"},
    {name:"Bryonia Alba 30C", price:85, purpose:"Dry cough and cold"},
    {name:"Gelsemium 30C", price:95, purpose:"Flu and headache"},
    {name:"Pulsatilla 30C", price:85, purpose:"Hormonal imbalance"},
    {name:"Sulphur 30C", price:80, purpose:"Skin problems"},
    {name:"Aconitum Napellus 30C", price:85, purpose:"Sudden fever and cold"},
    {name:"Calcarea Carbonica 30C", price:90, purpose:"Bone strength"},
    {name:"Ignatia Amara 30C", price:85, purpose:"Stress and emotional distress"},
    {name:"Hepar Sulphuris 30C", price:80, purpose:"Infections and boils"},
    {name:"Kali Bichromicum 30C", price:85, purpose:"Sinusitis"},
    {name:"Mercurius Solubilis 30C", price:85, purpose:"Sore throat and fever"},
    {name:"Natrum Muriaticum 30C", price:90, purpose:"Headache and skin issues"},
    {name:"Sepia 30C", price:85, purpose:"Hormonal and menstrual issues"},
    {name:"Silicea 30C", price:80, purpose:"Skin and hair health"},
    {name:"Phosphorus 30C", price:85, purpose:"Respiratory problems"},
    {name:"Thuja Occidentalis 30C", price:85, purpose:"Warts and skin growths"},
    {name:"Camphora 30C", price:80, purpose:"Cold prevention"},
    {name:"Causticum 30C", price:85, purpose:"Joint stiffness"},
    {name:"China Officinalis 30C", price:85, purpose:"Weakness after illness"},
    {name:"Lachesis 30C", price:90, purpose:"Menopausal symptoms"},
    {name:"Magnesia Phosphorica 30C", price:85, purpose:"Muscle cramps"},
    {name:"Podophyllum 30C", price:80, purpose:"Diarrhea"},
    {name:"Ruta Graveolens 30C", price:85, purpose:"Tendon and ligament pain"},
    {name:"Spongia Tosta 30C", price:80, purpose:"Cough relief"},
    {name:"Staphysagria 30C", price:85, purpose:"Post-surgery healing"},
    {name:"Veratrum Album 30C", price:85, purpose:"Cholera-like symptoms"},
    {name:"Zincum Metallicum 30C", price:90, purpose:"Nerve problems"}
  ],

  "Personal care": [
    {name:"Habbe Surfa", price:80, purpose:"Cough and cold relief"},
    {name:"Majoon Suranjan", price:90, purpose:"Joint pain relief"},
    {name:"Khamira Abresham", price:150, purpose:"Heart tonic"},
    {name:"Arq Gulab", price:60, purpose:"Cooling and eye health"},
    {name:"Sharbat Sandal", price:70, purpose:"Cooling drink"},
    {name:"Majoon Jograj Gugal", price:100, purpose:"Arthritis and nerve pain"},
    {name:"Habbe Jadwar", price:85, purpose:"Digestive aid"},
    {name:"Roghan Badam Shirin", price:200, purpose:"Memory and skin health"},
    {name:"Majoon Dabidul Ward", price:95, purpose:"Liver health"},
    {name:"Itrifal Ustukhuddus", price:85, purpose:"Headache and brain health"},
    {name:"Jawahar Mohra", price:250, purpose:"Heart strengthener"},
    {name:"Sufoof Muhazzil", price:90, purpose:"Weight loss"},
    {name:"Sharbat Toot Siah", price:80, purpose:"Sore throat relief"},
    {name:"Qurs Kushta", price:85, purpose:"Bone strength"},
    {name:"Qurs Mulayyin", price:80, purpose:"Constipation relief"},
    {name:"Majoon Falasfa", price:95, purpose:"Nervous system health"},
    {name:"Khamira Marwareed", price:180, purpose:"Heart and liver tonic"},
    {name:"Roghan Surkh", price:150, purpose:"Joint and muscle pain relief"},
    {name:"Majoon Chobchini", price:95, purpose:"Skin health"},
    {name:"Habbe Muqil", price:85, purpose:"Digestive issues"},
    {name:"Itrifal Kishnizi", price:80, purpose:"Cold and sinus relief"},
    {name:"Sharbat Bazoori", price:70, purpose:"Urinary tract health"},
    {name:"Majoon Ushba", price:95, purpose:"Blood purifier"},
    {name:"Qurs Jawahar", price:180, purpose:"Heart and brain health"},
    {name:"Sufoof Ispaghol", price:65, purpose:"Constipation relief"},
    {name:"Roghan Kachri", price:140, purpose:"Hair health"},
    {name:"Sharbat Unnab", price:80, purpose:"Respiratory health"},
    {name:"Majoon Arad Khurma", price:100, purpose:"Energy booster"},
    {name:"Itrifal Muqawwi Dimagh", price:95, purpose:"Brain health"},
    {name:"Roghan Neem", price:120, purpose:"Skin infections"}
  ],

  "Medical Equipment": [
    {name:"Digital Thermometer", price:180, purpose:"Measure body temperature accurately"},
    {name:"Blood Pressure Monitor", price:1200, purpose:"Monitor blood pressure at home"},
    {name:"Glucometer", price:950, purpose:"Check blood sugar levels"},
    {name:"Nebulizer Machine", price:2200, purpose:"Asthma and respiratory therapy"},
    {name:"Stethoscope", price:750, purpose:"Doctor’s diagnostic tool"},
    {name:"Pulse Oximeter", price:650, purpose:"Measure oxygen saturation"},
    {name:"Wheelchair", price:4500, purpose:"Mobility support"},
    {name:"Walking Stick", price:350, purpose:"Support for elderly"},
    {name:"Crutches (pair)", price:900, purpose:"Support for walking after injury"},
    {name:"Hot Water Bag", price:250, purpose:"Pain relief"},
    {name:"Heating Pad", price:650, purpose:"Relief for joint and muscle pain"},
    {name:"First Aid Kit", price:850, purpose:"Emergency medical supplies"},
    {name:"Surgical Mask (50 pcs)", price:250, purpose:"Protection from infection"},
    {name:"Face Shield", price:120, purpose:"Protective gear"},
    {name:"Disposable Gloves (100 pcs)", price:450, purpose:"Hygiene protection"},
    {name:"IV Stand", price:1200, purpose:"Hospital equipment"},
    {name:"Hospital Bed", price:14500, purpose:"Patient comfort at home"},
    {name:"Walker Frame", price:1500, purpose:"Mobility aid for elderly"},
    {name:"Steam Inhaler", price:400, purpose:"Cold and sinus relief"},
    {name:"BP Cuff (Manual)", price:700, purpose:"Blood pressure measurement"},
    {name:"Portable ECG Monitor", price:3500, purpose:"Track heart activity"},
    {name:"Infrared Thermometer", price:1400, purpose:"Non-contact temperature check"},
    {name:"Cervical Collar", price:450, purpose:"Neck support"},
    {name:"Knee Cap Support", price:320, purpose:"Joint pain relief"},
    {name:"Blood Lancets (100 pcs)", price:250, purpose:"For sugar tests"},
    {name:"Insulin Pen", price:1200, purpose:"Easy insulin injections"},
    {name:"Syringes (pack of 10)", price:150, purpose:"Medical injections"},
    {name:"Adult Diapers (10 pcs)", price:550, purpose:"Elderly care"},
    {name:"Cotton Roll (500g)", price:120, purpose:"Medical dressing"},
    {name:"Thermal Scanner", price:2000, purpose:"High-accuracy body temp check"}
  ]
  
};
/* put all items into 'All' - flattening objects but keep price */
categories["All"] = [].concat(
  ...Object.keys(categories).filter(k=>"All"!==k).map(k => categories[k].map(it => ({...it, category:k})))
);

/* ---------- State ---------- */
let currentCategory = "Allopathic Medicine";
let visibleCount = 6; // show 6 initially
let cart = []; // items: {name, price, qty}

/* ---------- DOM refs ---------- */
const categoryMenu = document.getElementById("categoryMenu");
const medicineList = document.getElementById("medicineList");
const showMoreBtn = document.getElementById("showMoreBtn");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const searchBar = document.getElementById("searchBar");

/* ---------- Init categories UI with icons ---------- */
function initCategories(){
  const icons = {
    "Allopathic Medicine": "💊",
    "Ayurvedic Medicine": "🌿",
    "Homeopathic Medicine": "⚗️",
    "Personal care": "🧴",
    "Medical Equipment": "🏥"
  };

  Object.keys(categories).filter(k=>"All"!==k).forEach(cat => {
    const btn = document.createElement("button");
    btn.innerHTML = `${icons[cat] || "📦"} ${cat}`;
    btn.className = cat === currentCategory ? "active" : "";
    btn.onclick = () => {
      currentCategory = cat;
      visibleCount = 6;
      document.querySelectorAll("#categoryMenu button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderMedicines();
    };
    categoryMenu.appendChild(btn);
  });
}

/* ---------- Start ---------- */
// initStore();
initCategories();


/* ---------- Render medicines (with prices) ---------- */
function renderMedicines(){
  const list = categories[currentCategory];
  const query = searchBar.value.trim().toLowerCase();
  const filtered = list.filter(it => it.name.toLowerCase().includes(query));
  medicineList.innerHTML = "";
  filtered.slice(0, visibleCount).forEach(item => {
    const card = document.createElement("div");
    card.className = "medicine-card";
    card.innerHTML = `
      <div>
        <h4>${item.name}</h4>
        <div class="small purpose">${item.purpose}</div> 
        
      </div>
      <div>
        <div class="price">₹${item.price}</div>
        <div style="display:flex;gap:8px;align-items:center;margin-top:8px">
          <button class="btn secondary" onclick="decreaseQty('${escapeJS(item.name)}')">-</button>
          <div class="small qty" id="qty-${escapeID(item.name)}">0</div>
          <button class="btn secondary" onclick="increaseQty('${escapeJS(item.name)}')">+</button>
          <button class="btn primary" style="margin-left:8px" onclick="addToCart('${escapeJS(item.name)}', ${item.price})">Add</button>
        </div>
      </div>
    `;
    medicineList.appendChild(card);
  });

  showMoreBtn.style.display = filtered.length > visibleCount ? "inline-block" : "none";
}

/* helpers for safe DOM ids and inline onclick */
function escapeJS(s){ return s.replace(/'/g,"\\'"); }
function escapeID(s){ return s.replace(/[^a-z0-9]/gi,'_'); }

/* ---------- Show more ---------- */
showMoreBtn.addEventListener("click", () => {
  visibleCount += 12; // reveal more
  renderMedicines();
});

/* ---------- Search ---------- */
searchBar.addEventListener("input", () => {
  visibleCount = 12;
  renderMedicines();
});

/* ---------- Cart functions ---------- */
function addToCart(name, price){
  const found = cart.find(i=>i.name===name);
  if(found){ found.qty += 1; }
  else { cart.push({name, price, qty:1}); }
  updateQtyUI(name);
  renderCart();
}

function increaseQty(name){
  const item = cart.find(i=>i.name===name);
  if(item){ item.qty += 1; renderCart(); updateQtyUI(name); return; }
  // If not in cart, find price and add
  const p = findPrice(name); if(p) addToCart(name,p);
}
function decreaseQty(name){
  const item = cart.find(i=>i.name===name);
  if(!item) return;
  item.qty -= 1;
  if(item.qty <= 0) cart = cart.filter(i=>i.name!==name);
  renderCart();
  updateQtyUI(name);
}
function removeFromCart(name){
  cart = cart.filter(i=>i.name!==name);
  renderCart();
  updateQtyUI(name);
}
function findPrice(name){
  const list = categories[currentCategory].concat(categories["All"]);
  const found = list.find(i=>i.name===name) || Object.values(categories).flat().find(i=>i.name===name);
  return found ? found.price : null;
}
function updateQtyUI(name){
  const qtyEl = document.getElementById(`qty-${escapeID(name)}`);
  const inCart = cart.find(i=>i.name===name);
  if(qtyEl) qtyEl.textContent = inCart ? inCart.qty : 0;
}

/* render cart */
function renderCart(){
  cartItemsEl.innerHTML = "";
  let total = 0;
  if(cart.length === 0){
    cartItemsEl.innerHTML = `<div class="small" style="color:var(--muted)">Cart is empty</div>`;
  } else {
    cart.forEach(it => {
      total += it.price * it.qty;
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div class="meta">
          <div style="font-weight:600">${it.name}</div>
          <div class="small">₹${it.price} × ${it.qty} = ₹${it.price * it.qty}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
          <div class="qty-controls">
            <button class="icon-btn" onclick="decreaseQty('${escapeJS(it.name)}')">−</button>
            <div style="min-width:26px;text-align:center">${it.qty}</div>
            <button class="icon-btn" onclick="increaseQty('${escapeJS(it.name)}')">+</button>
          </div>
          <button class="icon-btn" onclick="removeFromCart('${escapeJS(it.name)}')">Remove</button>
        </div>
      `;
      cartItemsEl.appendChild(div);
    });
  }
  cartTotalEl.textContent = total;
}

/* Clear cart */
clearCartBtn.addEventListener("click", () => {
  if(!confirm("Clear the cart?")) return;
  cart = [];
  renderCart();
  // reset quantity displays
  document.querySelectorAll(".qty").forEach(el=>el.textContent = "0");
});

/* Checkout flow */
const paymentModal = document.getElementById("paymentModal");
const successModal = document.getElementById("successModal");
const checkoutForm = document.getElementById("checkoutForm");
const payMethod = document.getElementById("payMethod");
const qrBlock = document.getElementById("qrBlock");
const cardBlock = document.getElementById("cardBlock");
const qrImage = document.getElementById("qrImage");
const payAmountSpan = document.getElementById("payAmount");

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if(cart.length===0){ alert("Your cart is empty."); return; }
  // open modal
  paymentModal.style.display = "flex";
  // set pay amount
  const total = Number(cartTotalEl.textContent || 0);
  payAmountSpan.textContent = total;
});

document.getElementById("closePayment").addEventListener("click", () => paymentModal.style.display = "none");
document.getElementById("cancelCheckout").addEventListener("click", () => paymentModal.style.display = "none");

/* payment method change */
payMethod.addEventListener("change", e=>{
  qrBlock.style.display = e.target.value === "qr" ? "block" : "none";
  cardBlock.style.display = e.target.value === "card" ? "block" : "none";
  if(e.target.value === "qr"){
    const total = Number(cartTotalEl.textContent || 0);
    const upi = `upi://pay?pa=test@upi&pn=MedicineStore&am=${total}&cu=INR`;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(upi)}`;
    payAmountSpan.textContent = total;
  }
});

/* paid via QR */
document.getElementById("paidBtn").addEventListener("click", () => {
  paymentModal.style.display = "none";
  successModal.style.display = "flex";
  cart = []; renderCart();
  document.querySelectorAll(".qty").forEach(el=>el.textContent = "0");
});

/* form submit (card / cod) */
checkoutForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  // In a real app you'd validate & send to server. Here we simulate success.
  paymentModal.style.display = "none";
  successModal.style.display = "flex";
  cart = []; renderCart();
  document.querySelectorAll(".qty").forEach(el=>el.textContent = "0");
});

/* close success */
document.getElementById("closeSuccess").addEventListener("click", ()=> successModal.style.display = "none");

/* ---------- initial render ---------- */
document.querySelectorAll("#categoryMenu button")[0]?.click?.(); // none yet
// We called initCategories already; select the default category
document.querySelectorAll("#categoryMenu button").forEach(btn => {
  if(btn.textContent === currentCategory) btn.classList.add("active");
});
renderMedicines();
renderCart();


  //  ----------------------------------------- new add ----------------------------

/* ===== ENHANCEMENTS ===== */


  

// coupon  code system

// Available coupons
const coupons = {
  "HEALTH10": { type: "percent", value: 10 },
  "FIRST50": { type: "flat", value: 50 },
  "FREESHIP": { type: "flat", value: 30 } // Example free shipping discount
};

document.getElementById("applyCouponBtn").addEventListener("click", () => {
  const selected = document.getElementById("couponDropdown").value;
  const totalEl = document.getElementById("cartTotal");
  const total = parseFloat(totalEl.textContent);

  if (!selected) {
    alert("⚠️ Please select a coupon first!");
    return;
  }

  const coupon = coupons[selected];
  let discount = 0;

  if (coupon.type === "percent") {
    discount = total * (coupon.value / 100);
  } else if (coupon.type === "flat") {
    discount = coupon.value;
  }

  const newTotal = Math.max(total - discount, 0);
  totalEl.textContent = newTotal.toFixed(2);

  alert(`✅ Coupon ${selected} applied! You saved ₹${discount.toFixed(2)}.`);
});





// ✅ Toast Notification
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ✅ Hook into Add to Cart button clicks
document.addEventListener('click', e => {
  if (e.target.classList.contains('btn') && e.target.textContent.includes('Add')) {
    showToast('🛒 Added to Cart');
  }
});

// ✅ Persistent Cart (localStorage)
function saveCart() {
  localStorage.setItem('cartData', JSON.stringify(cart));
}
function loadCart() {
  const saved = localStorage.getItem('cartData');
  if (saved) {
    cart = JSON.parse(saved);
    updateCart();
  }
}
loadCart();

// Modify existing cart functions to call saveCart()
const originalUpdateCart = updateCart;
updateCart = function () {
  originalUpdateCart();
  saveCart();
};



// ✅ Floating Cart (scroll to cart)
document.getElementById('floatingCart').addEventListener('click', () => {
  document.getElementById('cartPanel').scrollIntoView({ behavior: 'smooth' });
});

