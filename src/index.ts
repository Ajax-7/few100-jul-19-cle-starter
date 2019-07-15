import './styles.css';
import { add, PI } from './utils';
console.log('Ready to Party');

console.log(add(10, 18));

console.log(PI);

const nameInput = document.getElementById('name') as HTMLInputElement;
const doitButton = document.getElementById('doit') as HTMLButtonElement;
const messageoutput = document.getElementById('message');

doitButton.addEventListener('click', function () {
    const enteredname = nameInput.value;
    messageoutput.innerText = enteredname.toUpperCase();
})