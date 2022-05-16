
let counterValue = 0;
const minButton = document.querySelectorAll('#counter button')[0];
const plButton = document.querySelectorAll('#counter button')[1];
const span = document.querySelector('#value');

const handleClickMinus= () => {
  console.log ("Minus callback!");
  counterValue -=1;
  span.textContent = counterValue;
}
minButton.addEventListener("click",handleClickMinus );

const handleClickPlus= () => {
  console.log ("Plus callback!");
  counterValue +=1;
  span.textContent = counterValue;
}
plButton.addEventListener("click",handleClickPlus );
