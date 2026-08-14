// Educational Resource section
  //-----------------------------------------------------------------------------------
  function filterResources(topic) {
    const items = document.querySelectorAll("#resource-list li");
    const buttons = document.querySelectorAll(".filter-buttons button");
  
    // Highlight active button
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
  
    items.forEach(item => {
      if (topic === "all" || item.dataset.topic === topic) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    });
  }
  function addUserResource(event) {
    event.preventDefault();
    const title = document.getElementById("userTitle").value;
    const link = document.getElementById("userLink").value;
    const topic = document.getElementById("userTopic").value.toLowerCase();
  
    const li = document.createElement("li");
    li.setAttribute("data-topic", topic);
    li.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
    document.getElementById("resource-list").appendChild(li);
  
    document.getElementById("resourceForm").reset();
    alert("Thank you! Your resource has been added.");
  }
//-------------------------------------------------------------------------------------------

// first aid cards tap/ click
function toggleContent(id) {
  var content = document.getElementById(id);
  
  // Toggle visibility of the content
  if (content.style.display === "block") {
      content.style.display = "none";
  } else {
      content.style.display = "block";
  }
}


//   -------------------------------------------------------------------------------------------------
// Filter Resources
function filterResources(category) {
  const resources = document.querySelectorAll('#resource-list li');
  resources.forEach(resource => {
    const topic = resource.getAttribute('data-topic');
    if (category === 'all' || topic.includes(category)) {
      resource.style.display = 'block';
    } else {
      resource.style.display = 'none';
    }
  });

  // Update active button style
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`.filter-buttons button[onclick="filterResources('${category}')"]`).classList.add('active');
}

// Add user-submitted resource
function addUserResource(event) {
  event.preventDefault();
  
  const title = document.getElementById('userTitle').value;
  const link = document.getElementById('userLink').value;
  const topic = document.getElementById('userTopic').value;

  const resourceList = document.getElementById('resource-list');
  const newResource = document.createElement('li');
  newResource.setAttribute('data-topic', topic);

  newResource.innerHTML = `
    <a href="${link}" target="_blank">${title}</a>
    <p class="description">User submitted resource for topic: ${topic}</p>
  `;

  resourceList.appendChild(newResource);

  // Clear the form
  document.getElementById('resourceForm').reset();
}

