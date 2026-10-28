const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let messages = [];

    if (username.length < 5) {
        messages.push("Username must be at least 5 characters.");
    }

    if (password.length < 8) {
        messages.push("Password must be at least 8 characters.");
    }
    if (!/[0-9]/.test(password)) {
        messages.push("Password must include a number.");
    }
    if (!/[A-Z]/.test(password)) {
        messages.push("Password must include an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        messages.push("Password must include a lowercase letter.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        messages.push("Password must include a special character.");
    }

    let result = document.getElementById("loginMessage");
    if (messages.length === 0) {
        result.textContent = "Login details are valid.";
        result.style.color = "green";
    } else {
        result.textContent = messages.join(" ");
        result.style.color = "red";
    }
});
