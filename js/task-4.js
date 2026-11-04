

const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userEmail = formData.get('email').trim();
    const userPassword = formData.get('password').trim();


    if (userEmail === "" || userPassword === "") {
        alert('All form fields must be filled in');
    } else {
        console.log(userEmail);
        console.log(userPassword);
        form.reset();
    }
});

