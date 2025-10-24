const input = document.querySelector('.input');
const h1 = document.querySelector('.h1');


input.addEventListener('input', () => {
  const color = input.value;
  h1.style.color = color;
})