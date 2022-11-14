const getPolsunok = document.querySelector('#font-size-control');
const spanAbra = document.querySelector('#text');
getPolsunok.addEventListener('input', (event) => {
    spanAbra.style.fontSize = `${event.currentTarget.value}px`;

 });