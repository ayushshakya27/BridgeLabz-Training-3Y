let productInput = document.getElementById("productInput");
let productList = document.getElementById("productList");
let editingItem = null;
let editingInput = null;

document.getElementById("addButton").addEventListener("click", function() {
    let name = productInput.value.trim();

    if (name !== "") {
        let item = document.createElement("li");
        item.textContent = name + " ";

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.dataset.action = "edit";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.action = "delete";

        item.appendChild(editButton);
        item.appendChild(deleteButton);
        productList.appendChild(item);
        productInput.value = "";
    }
});

productList.addEventListener("click", function(event) {
    let action = event.target.dataset.action;
    let item = event.target.closest("li");

    if (!item || !action) return;

    if (action === "delete") {
        if (editingItem === item) {
            editingItem = null;
            editingInput = null;
        }
        item.remove();
    }

    if (action === "edit" && editingItem !== item) {
        saveEdit();

        let oldName = item.firstChild.textContent.trim();
        let input = document.createElement("input");
        input.value = oldName;
        item.firstChild.textContent = "";
        item.insertBefore(input, item.firstChild);
        editingItem = item;
        editingInput = input;
        input.focus();
    }
});

function saveEdit() {
    if (editingItem && editingInput) {
        editingItem.firstChild.textContent = editingInput.value.trim() + " ";
        editingItem = null;
        editingInput = null;
    }
}

document.addEventListener("click", function(event) {
    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit();
    }
});
