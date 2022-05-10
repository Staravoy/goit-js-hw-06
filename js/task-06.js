const input = document.querySelector('#validation-input');
const number = Number(input.getAttribute('data-length'));
input.addEventListener('blur', () => {
    if (input.value.length > number) {
        input.className = 'invalid'; 
    } else {
        input.className = 'valid';     
    }
})
