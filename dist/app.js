"use strict";
function validationForm(data) {
    const errors = {};
    if (!data.name.trim()) {
        errors.name = "Name is required";
    }
    if (!data.email.includes("@")) {
        errors.email = "Invalid email format";
    }
    if (data.password.length < 5) {
        errors.password = "Password must be a least 6 characters";
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}
const form = document.getElementById("registerForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const FormInputData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    const { isValid, errors } = validationForm(FormInputData);
    document.getElementById("nameError").textContent =
        errors.name || "";
    document.getElementById("emailError").textContent =
        errors.email || "";
    document.getElementById("passwordError").textContent =
        errors.password || "";
    if (isValid) {
        alert("Form submitted successfully");
        form.reset();
    }
});
