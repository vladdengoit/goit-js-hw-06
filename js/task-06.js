const getInput = document.querySelector("#validation-input");

getInput.addEventListener('blur', (event) => {
    const inpeutLength = event.currentTarget.value.length;
    const mandatoryLength = event.currentTarget.getAttribute("data-length")
    if (inpeutLength === parseInt(mandatoryLength)) {
     getInput.classList.add("valid");
     getInput.classList.remove("invalid");

    }
    else {
     getInput.classList.add("invalid");
     getInput.classList.remove("valid");}
});
