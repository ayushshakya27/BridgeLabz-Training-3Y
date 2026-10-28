let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userDetails = document.getElementById("userDetails");

function showUser() {
    userDetails.textContent = JSON.stringify(user, null, 2);
}

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;
showUser();

userForm.addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    showUser();
});
