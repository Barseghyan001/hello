const input = document.querySelector('.input');
const inputback = document.querySelector('.inputback');
const inputtext = document.querySelector('.text');
const h1 = document.querySelector('.h1');

const savedTextColor = localStorage.getItem('color') || '#000000';
const savedBgColor = localStorage.getItem('bgColor') || '#ffffff';

h1.style.color = savedTextColor;
document.body.style.background = savedBgColor;

input.value = savedTextColor;
inputback.value = savedBgColor;

input.addEventListener('input', () => {
  const color =  input.value;
  localStorage.setItem('color' , color);
  h1.style.color =  color;
})

inputback.addEventListener('input', () => {
  const color =  inputback.value;
  localStorage.setItem('bgColor' , color);
  document.body.style.background = color;
})

inputtext.addEventListener('input', () => {
  const text = inputtext.value;
  console.log(text);
  h1.innerText = text;
})