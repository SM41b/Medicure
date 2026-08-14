// login/login.js

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", () => {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});

// Show Signup form
function showSignup() {
    document.querySelector(".login-container").style.display = "none";
    document.getElementById("signupContainer").style.display = "block";
}

// Show Login form
function showLogin() {
    document.getElementById("signupContainer").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
}

// Login
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const remember = document.getElementById("rememberMe").checked;

    const users = JSON.parse(localStorage.getItem("users")) || {};
    const storedPassword = users[username];

    if (!storedPassword) {
        alert("Username not found. Please sign up first.");
        return;
    }

    if (storedPassword !== password) {
        alert("Incorrect password.");
        return;
    }

    localStorage.setItem("loggedInUser", username);

    if (remember) {
        localStorage.setItem("rememberedUser", username);
    } else {
        localStorage.removeItem("rememberedUser");
    }

    alert("Login successful!");
    window.location.href = "../index.html";
}

// Signup
function signup() {
    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value;

    if (newUsername === "" || newPassword === "") {
        alert("Please enter both username and password.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[newUsername]) {
        alert("Username already exists. Please choose another.");
        return;
    }

    users[newUsername] = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now log in.");
    showLogin();
}

// Auto-fill remembered username
window.addEventListener("DOMContentLoaded", () => {
    const remembered = localStorage.getItem("rememberedUser");
    if (remembered) {
        document.getElementById("username").value = remembered;
        document.getElementById("rememberMe").checked = true;
    }
});
