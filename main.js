
let count = 0;

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  count++;
  button.textContent = "Вы нажали на кнопку:" + count + " раз ";
});