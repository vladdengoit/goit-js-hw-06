function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector('body');
const spanChange = document.querySelector('.color');
const buttonClick = document.querySelector('.change-color');

buttonClick.addEventListener('click',()=> {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanChange.textContent = bodyColor.style.backgroundColor;

})