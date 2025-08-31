const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories ${itemEl.length}`);

itemEl.forEach(item => {
  const titleElement = item.querySelector('h2');

  console.log(`Categoy ${titleElement.textContent}`);

  const liElement = item.querySelectorAll('li');

  console.log(`Elements ${liElement.length}`);
});
