class FormBuilder {
    constructor(fields, formId, outputId) {
        this.fields = fields;
        this.form = document.getElementById(formId);
        this.output = document.getElementById(outputId);
    }

    buildForm() {
        let html = "";

        for (let field of this.fields) {
            html += `<label>${field.label}
                <input type="${field.type}" name="${field.name}" required>
            </label><br><br>`;
        }

        html += '<button type="submit">Submit</button>';
        this.form.innerHTML = html;

        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.output.textContent = JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        let data = {};
        let inputs = this.form.querySelectorAll("input");

        for (let input of inputs) {
            data[input.name] = input.value;
        }

        return data;
    }
}

let builder = new FormBuilder([
    { type: "text", label: "Username:", name: "username" },
    { type: "email", label: "Email:", name: "email" }
], "customForm", "formData");

builder.buildForm();
