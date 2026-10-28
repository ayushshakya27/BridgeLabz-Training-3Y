let dropdownButton = document.getElementById("dropdownButton");
let options = document.getElementById("options");

dropdownButton.addEventListener("click", function(event) {
    event.stopPropagation();
    options.style.display = options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
        dropdownButton.textContent = event.target.textContent;
        options.style.display = "none";
    }
});

document.addEventListener("click", function() {
    options.style.display = "none";
}, true);
