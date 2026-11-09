const form = document.querySelector("#contact-form");
const errorMessage = document.querySelector("#form-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.textContent = "";
  const fields = [...form.querySelectorAll("[required]")];

  for (const field of fields) {
    field.removeAttribute("aria-invalid");
  }

  const emptyField = fields.find((field) => !field.value.trim());
  const email = form.elements.namedItem("email");
  const invalidField = emptyField || (email.validity.typeMismatch ? email : null);

  if (invalidField) {
    errorMessage.textContent = emptyField
      ? "Please fill in " + emptyField.labels[0].textContent + "."
      : "Please enter a valid email address.";
    invalidField.setAttribute("aria-invalid", "true");
    invalidField.focus();
    return;
  }

  window.alert("Your form was submitted successfully!");
  form.reset();
});
