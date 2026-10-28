let form = document.getElementById("registrationForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

function checkForm() {
    document.getElementById("nameError").textContent =
        nameInput.value.trim() === "" ? " Name is required." : "";

    document.getElementById("emailError").textContent =
        !emailInput.value.includes("@") ? " Enter a valid email." : "";

    document.getElementById("passwordError").textContent =
        passwordInput.value.length < 6 ? " Password needs 6 characters." : "";
}

[nameInput, emailInput, passwordInput].forEach(function(input) {
    input.addEventListener("input", checkForm);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkForm();

    let valid = nameInput.value.trim() !== "" &&
        emailInput.value.includes("@") &&
        passwordInput.value.length >= 6;

    if (valid) {
        document.getElementById("successMessage").textContent =
            "Form Submitted Successfully";
    } else {
        document.getElementById("successMessage").textContent = "";
    }
});
