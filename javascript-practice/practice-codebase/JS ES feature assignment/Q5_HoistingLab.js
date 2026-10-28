"use strict";

var score = 50;
let gameStatus = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(gameStatus);
}

console.log(score);
announce();
startGame();

function showHoisting() {
    console.log("Before assignment:", points);
    var points = 10;
    console.log("After assignment:", points);
}

showHoisting();

const sayHello = () => {
    console.log("Hello");
};

sayHello();
