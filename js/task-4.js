

const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userEmail = formData.get('email').trim();
    const userPassword = formData.get('password').trim();
    const infoObject = {
        email: '',
        password: ''
    }

    if (userEmail === "" || userPassword === "") {
        alert('All form fields must be filled in');
    } else {
        infoObject.email = userEmail;
        infoObject.password = userPassword;
        console.log(infoObject);
        form.reset();
    }
});

