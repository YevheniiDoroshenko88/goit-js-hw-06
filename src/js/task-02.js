const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  ul.append(li);
}
