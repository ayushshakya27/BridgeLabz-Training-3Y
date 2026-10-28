let gallery = document.getElementById("gallery");
let modal = document.getElementById("modal");
let largeImage = document.getElementById("largeImage");

gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        largeImage.src = event.target.src;
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", function() {
    modal.style.display = "none";
});

largeImage.addEventListener("click", function(event) {
    event.stopPropagation();
});
