let search = document.getElementById("search");
let rows = document.querySelectorAll("#studentRows tr");
let noResults = document.getElementById("noResults");

search.addEventListener("input", function() {
    let text = search.value.toLowerCase();
    let visibleCount = 0;

    rows.forEach(function(row) {
        let matches = row.textContent.toLowerCase().includes(text);
        row.hidden = !matches;

        if (matches) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount !== 0;
});
