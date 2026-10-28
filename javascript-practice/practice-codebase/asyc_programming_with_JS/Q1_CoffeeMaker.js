function makeStep(message) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject("Step failed");
            } else {
                console.log(message);
                resolve();
            }
        }, time);
    });
}

makeStep("Water boiled")
    .then(() => makeStep("Coffee brewed"))
    .then(() => makeStep("Coffee poured"))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log(error));
