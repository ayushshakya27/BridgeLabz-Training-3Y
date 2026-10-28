"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let person = JSON.parse(rawData[i]);

        if (person.user === undefined || person.age === undefined) {
            throw new Error("Missing user or age");
        }

        person.age = Number(person.age);

        if (Number.isNaN(person.age)) {
            throw new Error("Invalid age");
        }

        cleanData.push(person);

        if (person.age < 18) {
            under18.push(person);
        }
    } catch (error) {
        console.log("Line", i + 1, ":", error.message);
    }
}

console.log("Clean data:", cleanData);
console.log("Users under 18:", under18);
console.log("Valid entries:", cleanData.length);
