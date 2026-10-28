const form = document.getElementById("studentForm");
const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    password: document.getElementById("password")
};

function showResult(input, valid, message) {
    input.style.border = valid ? "2px solid green" : "2px solid red";
    document.getElementById(input.id + "Error").textContent = valid ? "" : message;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nameValid = /^[A-Za-z ]+$/.test(fields.name.value.trim());
    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim());
    let phoneValid = /^\d{10}$/.test(fields.phone.value.trim());
    let passwordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(fields.password.value);

    showResult(fields.name, nameValid, "Use alphabets only.");
    showResult(fields.email, emailValid, "Enter a valid email.");
    showResult(fields.phone, phoneValid, "Enter exactly 10 digits.");
    showResult(fields.password, passwordValid, "Use an uppercase letter, number and special character.");

    if (nameValid && emailValid && phoneValid && passwordValid) {
        document.getElementById("formMessage").textContent = "Registration details are valid.";
    } else {
        document.getElementById("formMessage").textContent = "Please correct the fields marked in red.";
    }
});
