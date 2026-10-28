"use strict";

let rows = 5;
let pattern;

for (let i = 1; i <= rows; i++) {
    pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern = pattern + "* ";
    }
    console.log(pattern);
}
