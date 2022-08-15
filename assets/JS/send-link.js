const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkinputs();
});

function checkinputs() {
    //get the values from the inputs
    const emailValue = email.value.trim();


    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

}

function setErrorFor(input, message) {
    const formInput = input.parentElement; // .form-control
    const small = formInput.querySelector('small');

    //add error message inside small
    small.innerText = message;

    // add error class
    formInput.className = 'form-input error';
}

function setSuccessFor(input) {
    const formInput = input.parentElement;
    formInput.className = 'form-input success'
}

function isEmail(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
