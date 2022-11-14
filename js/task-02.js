const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeNewArray = ingredients.map(ingridient =>

{
const newListLi = document.createElement('li');
newListLi.classList.add('item');
newListLi.textContent = ingridient;
 return newListLi   
  });

const createNewList = document.querySelector('#ingredients');

createNewList.append(...makeNewArray);