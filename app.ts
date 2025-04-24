interface FormInputData {
  name: string;
  email: string;
  password: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof FormInputData, string>>;
}

function validationForm(data: FormInputData): ValidationResult {
  const errors: Partial<Record<keyof FormInputData, string>> = {};

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

const form = document.getElementById("registerForm") as HTMLFormElement;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const FormInputData: FormInputData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    password: (document.getElementById("password") as HTMLInputElement).value,
  };

  const { isValid, errors } = validationForm(FormInputData);

  (document.getElementById("nameError") as HTMLElement).textContent =
    errors.name || "";
  (document.getElementById("emailError") as HTMLElement).textContent =
    errors.email || "";
  (document.getElementById("passwordError") as HTMLElement).textContent =
    errors.password || "";

  if (isValid) {
    alert("Form submitted successfully");
    form.reset();
  }
});
