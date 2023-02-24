const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');
const liArray = [];

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  liArray.push(li);
}
ul.append(...liArray);