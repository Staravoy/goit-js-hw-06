let input = document.querySelector('input#name-input');
const span =  document.querySelector('span#name-output');
span.textContent = 'Anonymous';
input.addEventListener ('input', (event) => {
    event.preventDefault();
     event.currentTarget.value;
     span.textContent = event.currentTarget.value || 'Anonymous';
})