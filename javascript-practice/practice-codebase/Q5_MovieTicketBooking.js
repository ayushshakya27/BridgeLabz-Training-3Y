const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let seats = Number(document.getElementById("seats").value);

    let nameValid = /^[A-Za-z ]+$/.test(name);
    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    let seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    let message = document.getElementById("bookingMessage");

    if (!nameValid || !emailValid || !seatsValid) {
        message.textContent = "Please enter a valid name, email, and seat count from 1 to 10.";
        return;
    }

    let booking = { name: name, email: email, seats: seats };
    message.textContent = "Booking confirmed: " + JSON.stringify(booking);
    console.log(booking);
});
