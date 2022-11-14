const sabLogin = document.querySelector('.login-form');
sabLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;

    email.value && password.value ? console.log(
        {
            [email.name]: email.value,
            [password.name]: password.value
        }
    ) : alert("Should fill all fields ");
    event.currentTarget.reset();
});
