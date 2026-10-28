let steps = document.querySelectorAll(".step");
let currentStep = 0;

function showStep() {
    steps.forEach(function(step, index) {
        step.hidden = index !== currentStep;
    });

    document.getElementById("backButton").hidden = currentStep === 0;
    document.getElementById("nextButton").textContent =
        currentStep === steps.length - 1 ? "Submit" : "Next";
}

document.getElementById("nextButton").addEventListener("click", function() {
    let input = steps[currentStep].querySelector("input");

    if (!input.checkValidity()) {
        input.reportValidity();
        return;
    }

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        document.getElementById("summary").textContent =
            "Name: " + document.getElementById("name").value +
            " | Email: " + document.getElementById("email").value +
            " | Password: " + "*".repeat(document.getElementById("password").value.length);
        steps[currentStep].hidden = true;
        document.getElementById("nextButton").hidden = true;
        document.getElementById("backButton").hidden = true;
    }
});

document.getElementById("backButton").addEventListener("click", function() {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();
