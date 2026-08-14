// --------------------------------------------------------------------------------------------------
//for chatbot section
// Toggle Chatbot Display
function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = (chatbot.style.display === 'none' || chatbot.style.display === '') ? 'block' : 'none';
  }
  
  //BMI Calculator
  function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
  
    if (weight && height) {
      const bmi = (weight / (height * height)).toFixed(2);
      let result = `Your BMI: ${bmi} - `;
  
      if (bmi < 18.5) {
        result += "Underweight";
      } else if (bmi < 24.9) {
        result += "Normal weight";
      } else {
        result += "Overweight";
      }
  
      document.getElementById('bmi-result').textContent = result;
    } else {
      alert('Please enter valid numbers!');
    }
  }
//----------------------------------------------------------------------------------------- 

const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
let currentInputMode = null;

function addMessage(sender, message) {
  const msg = document.createElement('div');
  msg.innerHTML = `<strong>${sender}</strong> ${message}`; // innerHTML for formatting
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


// Chat logic
function provideHomeRemedies(condition) {
  addMessage('Bot:', `Here are some home remedies for "${condition}".`);
}

function provideMedicationInfo(name) {
  addMessage('Bot:', `Medication info for "${name}".`);
}

function provideHealthRiskAssessment(data) {
  addMessage('Bot:', `Health risk assessed based on: ${data}`);
}

function providePersonalizedHealthAdvice(goal) {
  addMessage('Bot:', `Health advice for your goal: ${goal}`);
}

function provideMentalHealthSupport(feeling) {
  addMessage('Bot:', `Thanks for sharing. Here's support for: ${feeling}`);
}

function handleFollowUpInput(input) {
  switch (currentInputMode) {
    case 'medication':
      provideMedicationInfo(input);
      break;
    case 'healthRisk':
      provideHealthRiskAssessment(input);
      break;
    case 'healthAdvice':
      providePersonalizedHealthAdvice(input);
      break;
    case 'homeRemedies':
      provideHomeRemedies(input);
      break;
    case 'mentalHealth':
      provideMentalHealthSupport(input);
      break;
    default:
      addMessage('Bot:', 'Unexpected input. Please try again.. ');
      return;
  }
  currentInputMode = null;
}

function handleUserInput(input) {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes('medication')) {
    addMessage('Bot:', 'Please provide the name of the medicine..');
    currentInputMode = 'medication';
  } else if (lowerInput.includes('health risk')) {
    addMessage('Bot:', 'Please provide your age, weight, height,(comma separated..) and any existing  health conditions (e.g., diabetes, hypertension)..');
    currentInputMode = 'healthRisk';
  } else if (lowerInput.includes('health advice')) {
    addMessage('Bot:', 'Please tell me your health goals (e.g., weight loss, muscle gain, etc.)..');
    currentInputMode = 'healthAdvice';
  } else if (lowerInput.includes('home remedies')) {
    addMessage('Bot:', 'What condition are you looking for home remedies ?');
    currentInputMode = 'homeRemedies';
  } else if (lowerInput.includes('mental health')) {
    addMessage('Bot:', 'I’m here for you. Please share what you’re feeling or struggling with.');
    currentInputMode = 'mentalHealth';
  } else {
    addMessage('Bot:', 'Sorry, I didn’t get that. Can you please specify? Try asking about related topics...');
  } 
}

function processInput() {
  const input = userInput.value.trim();
  if (!input) return;

  addMessage('User:', input);

  if (currentInputMode) {
    handleFollowUpInput(input);
  } else {
    handleUserInput(input);
  }

  userInput.value = '';
}

// Listeners
userInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    processInput();
  }
});

sendBtn.addEventListener('click', function () {
  processInput();
});

//Medication Info

function provideMedicationInfo(medicationName) {
  const medicationInfo = {
    "_aspirin": {
      name: "Aspirin",
      sideEffects: 'Nausea, vomiting, stomach pain, heartburn.',
      interactions: 'May interact with blood thinners, other NSAIDs.',
      dosage: 'Typically 81 mg to 325 mg daily, as directed by a doctor.'
    },
    get "aspirin"() {
      return this["_aspirin"];
    },
    set "aspirin"(value) {
      this["_aspirin"] = value;
    },
    "_ibuprofen": {
      name: "Ibuprofen",
      sideEffects: 'Nausea, vomiting, headache, dizziness.',
      interactions: 'May interact with blood thinners, certain antidepressants.',
      dosage: 'Typically 200 mg to 400 mg every 4 to 6 hours as needed.',
      warnings: "Take with food to prevent stomach irritation. Avoid prolonged use."
    },
    get "ibuprofen"() {
      return this["_ibuprofen"];
    },
    set "ibuprofen"(value) {
      this["_ibuprofen"] = value;
    },
    "_paracetamol": {
      name: "Paracetamol",
      sideEffects: 'Nausea, rash, liver damage in overdose.',
      interactions: 'May interact with warfarin and other anticoagulants.',
      dosage: 'Typically 500 mg to 1000 mg every 4 to 6 hours as needed.',
      warnings: "Do not exceed daily limit. Consult a doctor for long-term use."
    },
    get "paracetamol"() {
      return this["_paracetamol"];
    },
    set "paracetamol"(value) {
      this["_paracetamol"] = value;
    },
    "_amoxicillin": {
      name: "Amoxicillin",
      dosage: "250-500 mg every 8 hours for bacterial infections.",
      sideEffects: "Diarrhea, nausea, vomiting, allergic reactions (rash, swelling).",
      interactions: "Reduces effectiveness of birth control pills; avoid alcohol.",
      warnings: "Complete the full antibiotic course. Seek help if allergic reactions occur."
    },
    get "amoxicillin"() {
      return this["_amoxicillin"];
    },
    set "amoxicillin"(value) {
      this["_amoxicillin"] = value;
    },
  };

  const info = medicationInfo[medicationName.toLowerCase()];
  if (info) {
      addMessage('Bot:', 
        `<strong>Information for 💊 ${info.name}:</strong><br>
        • <strong>Side Effects:</strong> 🤒🔴 ${info.sideEffects}<br>
        • <strong>Interactions:</strong> 🔄⚕️ ${info.interactions}<br>
        • <strong>Dosage:</strong> ⏰💉 ${info.dosage}<br>
        • <strong>Warnings:</strong> ⚠️❗ ${info.warnings || 'N/A'}`);
  } else {
      addMessage('Bot:', 'Sorry, I don\'t have information on that medicine. Please try another one..');
  }
}


//Health Risk Assessment
function provideHealthRiskAssessment(details) {
  const [age, weight, height, ...conditions] = details.split(',').map(item => item.trim());
  const healthConditions = conditions.join(', ');

  let riskScore = 0;
  if (age < 30) riskScore += 1;
  if (weight > 200) riskScore += 2; // Example threshold
  if (height < 5.5) riskScore += 1; // Example threshold
  if (healthConditions.includes('diabetes')) riskScore += 3;
  if (healthConditions.includes('hypertension')) riskScore += 3;

  addMessage('Bot', `Your health  ⚠️ risk score is: ${riskScore}.  <br>
    Recommendations: ${getRiskRecommendations(riskScore)}`);
}

function getRiskRecommendations(score) {
  if (score <= 2) {
      return 'You are at low risk.<br> Maintain a healthy lifestyle.';
  } else if (score <= 4) {
      return 'You are at moderate risk. <br> Consider regular check-ups and a balanced diet.';
  } else {
      return 'You are at high risk. <br> Please consult a healthcare professional.';
  }
}

//Personalized Health Advice
function providePersonalizedHealthAdvice(goals) {
  if (goals.toLowerCase().includes('weight loss')) {
      addMessage('Bot', 'For weight loss, consider a balanced diet with a calorie deficit and regular exercise, such as cardio and strength training.');
  } else if (goals.toLowerCase().includes('muscle gain')) {
      addMessage('Bot', 'For muscle gain, focus on a high-protein diet and strength training exercises.');
  } else if (goals.toLowerCase().includes('general health')) {
      addMessage('Bot', 'For general health, maintain a balanced diet, stay hydrated, and engage in regular physical activity.');
  } else {
      addMessage('Bot', 'Please specify your health goals for tailored advice.');
  }
}

//Home Remedies
function provideHomeRemedies(condition) {
  const remedies = {
    "_cold": '🌊 For a cold, try drinking warm fluids, honey, and lemon tea, and consider steam inhalation.',
    get "cold"() {
      return this["_cold"];
    },
    set "cold"(value) {
      this["_cold"] = value;
    },
    "_headache": ' 💆 For headaches, try drinking water, resting in a dark room, or applying a cold compress to your forehead.',
      get "headache"() {
        return this["_headache"];
      },
      set "headache"(value) {
        this["_headache"] = value;
      },
      "_stomach ache": 'For stomach aches, consider ginger tea, peppermint tea, or a warm heating pad on your abdomen.',
      get "stomach ache"() {
        return this["_stomach ache"];
      },
      set "stomach ache"(value) {
        this["_stomach ache"] = value;
      },
      "_cough": 'For a cough, honey and warm water can soothe your throat. Ginger tea is also effective.',
      get "cough"() {
        return this["_cough"];
      },
      set "cough"(value) {
        this["_cough"] = value;
      },
      "_insomnia": 'For insomnia, try chamomile tea, a warm bath before bed, or practicing relaxation techniques.',
      get "insomnia"() {
        return this["_insomnia"];
      },
      set "insomnia"(value) {
        this["_insomnia"] = value;
      },
  };

  const remedy = remedies[condition.toLowerCase()];
  if (remedy) {
      addMessage('Bot', `Home remedy for ${condition}: ${remedy}`);
  } else {
      addMessage('Bot', 'I\'m sorry, I don\'t have remedies for that condition. Please try another one.');
  }
}

//Mental Health Support
function provideMentalHealthSupport(feelings) {
  if (feelings.toLowerCase().includes('sad') || feelings.toLowerCase().includes('depressed')) {
      addMessage('Bot', 'I’m sorry to hear that you’re feeling this way. 🌿 It’s important to talk to someone who can help');
  }
  else if (feelings.toLowerCase().includes('anxiety') || feelings.toLowerCase().includes('worried')) {
    addMessage('Bot', 'Feeling anxious is common. 🌿 Try deep breathing exercises, meditation, or talking to someone about your feelings. Remember, you are not alone.');
} else if (feelings.toLowerCase().includes('stressed')) {
    addMessage('Bot', 'Stress can be overwhelming. 🌿 Consider taking breaks, practicing mindfulness, or engaging in physical activity to relieve stress.');
} else if (feelings.toLowerCase().includes('lonely')) {
    addMessage('Bot', 'Feeling lonely can be tough. 🌿 Try connecting with friends or family, or consider joining a community group or activity that interests you.');
} else {
    addMessage('Bot', 'Thank you for sharing. It’s important to express your feelings. If you need more support, please consider talking to a mental health professional.');
}
}
