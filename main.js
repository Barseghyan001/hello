const input = document.querySelector('.input');
const inputback = document.querySelector('.inputback');
const inputtext = document.querySelector('.text');
const h1 = document.querySelector('.h1');


input.addEventListener('input', () => {
  const color = input.value;
  h1.style.color = color;
})

inputback.addEventListener('input', () => {
  const color = inputback.value;
  document.body.style.background = color;
})

inputtext.addEventListener('input', () => {
  const text = inputtext.value;
  console.log(text);
  h1.innerText = text;
})