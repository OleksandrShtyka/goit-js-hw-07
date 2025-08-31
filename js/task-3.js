const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onImput);

function onImput(event) {
  const replaceValue = event.currentTarget.value.trim();
  if (replaceValue !== '') {
    spanEl.textContent = replaceValue;
  } else {
    spanEl.textContent = 'Anonymous';
  }
}
