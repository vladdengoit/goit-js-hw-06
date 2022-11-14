const giveInput = document.querySelector("#name-input");
const giveSpan = document.querySelector("#name-output");
giveInput.addEventListener('input', (event) => {
    giveSpan.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        giveSpan.textContent = "Anonymous";
    }
})
