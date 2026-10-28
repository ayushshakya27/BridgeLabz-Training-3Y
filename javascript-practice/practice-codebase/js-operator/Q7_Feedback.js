let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ");

let lowerFeedback = feedback.toLowerCase();

console.log("Word count: " + words.length);

if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
