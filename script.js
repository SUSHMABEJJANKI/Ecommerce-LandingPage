
// Store signup details
function signup() {
    const signupName = document.getElementById("signupName").value;
    const signupEmail = document.getElementById("signupEmail").value;
    const signupPhone = document.getElementById("signupPhone").value;
    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;
    const signupConfirmPassword = document.getElementById("signupConfirmPassword").value;

    // Check if passwords match
    if (signupPassword !== signupConfirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Password validation (requires capital letter and special symbol)
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    if (!passwordPattern.test(signupPassword)) {
        alert("Password must contain at least one capital letter and one special symbol.");
        return;
    }

    // Save user details in localStorage
    const user = {
        name: signupName,
        email: signupEmail,
        phone: signupPhone,
        username: signupUsername,
        password: signupPassword
    };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! You can now log in.");
    closePopups();
    openLogin(); // Open login form after successful signup
}

// Login function
function login() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Retrieve stored user details
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if the username and password match
    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
        alert("Login successful!");
        document.getElementById("navBar").style.display = "block"; // Show nav bar
        document.getElementById("contentSection").style.display = "block"; // Show main content
        closePopups();
    } else {
        alert("Invalid username or password.");
    }
}

// Logout function (clear input fields after logout)
function logout() {
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("navBar").style.display = "none";
    document.getElementById("contentSection").style.display = "none";
    alert("Logged out successfully.");
}

// Open Signup Popup
function openSignup() {
    closePopups();
    document.getElementById("signupForm").style.display = "block";
}

// Open Login Popup
function openLogin() {
    closePopups();
    document.getElementById("loginForm").style.display = "block";
}

// Close all popups
function closePopups() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
}
// Toggle Password Visibility
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

// User data storage (for demo purposes)
let users = {};

// Signup function
function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const phone = document.getElementById("signupPhone").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password === confirmPassword) {
        users[username] = { name, email, phone, password };
        alert("Signup successful! Please log in.");
        openLogin();
        clearSignupForm();
    } else {
        alert("Passwords do not match.");
    }
}

function clearSignupForm() {
    document.getElementById("signupName").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPhone").value = "";
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupPassword").value = "";
    document.getElementById("signupConfirmPassword").value = "";
}

function openLogin() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function openSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

let currentUser = null;

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (users[username] && users[username].password === password) {
        currentUser = users[username];
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("navBar").style.display = "block";
        document.getElementById("contentSection").style.display = "block";
        clearLoginForm();
    } else {
        alert("Invalid username or password.");
    }
}

function clearLoginForm() {
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
}

function logout() {
    currentUser = null;
    document.getElementById("navBar").style.display = "none";
    document.getElementById("contentSection").style.display = "none";
    document.getElementById("accountSection").style.display = "none";
    alert("Logged out successfully.");
}

function openAccount() {
    if (currentUser) {
        document.getElementById("accountName").innerText = currentUser.name;
        document.getElementById("accountEmail").innerText = currentUser.email;
        document.getElementById("accountPhone").innerText = currentUser.phone;
        document.getElementById("accountSection").style.display = "block";
        document.getElementById("contentSection").style.display = "none";
    }
}

function closeAccount() {
    document.getElementById("accountSection").style.display = "none";
    document.getElementById("contentSection").style.display = "block";
}



