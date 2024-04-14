
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    let nameOut = nameInput.value.trim();
    if(nameOut === ''){
        nameOut = 'Anonymous';
    }
    nameOutput.textContent = nameOut;
});
