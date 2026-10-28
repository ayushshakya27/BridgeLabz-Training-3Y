let message = document.getElementById("message");
let counter = document.getElementById("counter");

function updateCounter() {
    let remaining = 100 - message.value.length;
    counter.textContent = remaining + " characters left";

    if (remaining === 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "goldenrod";
    } else {
        counter.style.color = "black";
    }
}

message.addEventListener("keydown", function(event) {
    if (message.value.length >= 100 &&
        event.key.length === 1 &&
        !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
    }
});

message.addEventListener("input", updateCounter);

document.getElementById("resetButton").addEventListener("click", function() {
    message.value = "";
    updateCounter();
});

updateCounter();
