document.addEventListener("click", function(event) {
    let theme = event.target.getAttribute("data-theme-choice");

    if (theme) {
        document.body.setAttribute("class", theme);
        document.body.setAttribute("data-theme", theme);
    }
});
