let userName = "Ayush";
let age = 20;
let isStudent = true;
let subjects = ["HTML", "CSS", "JavaScript"];
let student = { city: "Mathura", course: "BCA" };
let middleName = null;
let address;

console.table([
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Details", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Middle Name", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "Address", Value: address, Type: typeof address }
]);
