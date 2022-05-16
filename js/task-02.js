const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const item = document.querySelector('#ingredients');
 const elements = ingredients.map (ingredient => {
   const elementLi = document.createElement('li');
   elementLi.className = 'item';
   elementLi.innerHTML = ingredient;
   return elementLi;
 })
 item.append(...elements);
 console.log(elements);