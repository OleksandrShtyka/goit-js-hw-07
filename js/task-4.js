const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  const validEmail = formEl.elements.email.value.trim();
  const validPassword = formEl.elements.password.value.trim();

  event.preventDefault();
  if (validEmail === '' || validPassword === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: validEmail,
    password: validPassword,
  };

  console.log(formData);

  formEl.reset();
}
