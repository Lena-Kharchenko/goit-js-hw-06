const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormChange);

function onFormChange(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Усі поля мають бути заповнені");
    return;
  } else {
    const formData = { email: email.value, password: password.value };
    console.log(formData);
  }
  event.currentTarget.reset();
}
