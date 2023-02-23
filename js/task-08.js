const form = document.querySelector('.login-form')

form.addEventListener('submit', onSubmit)

function onSubmit (event) {
    event.preventDefault();
    console.log(event.currentTarget.elements);
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email && password) {
        console.log({'email': email, 'password': password});
        form.reset();
    } else {
        alert('Заповніть всі поля')
    }
} 
