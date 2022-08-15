const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkinputs();
});

function checkinputs() {
    //get the values from the inputs
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password must contain at least 8 characters');
    } else {
        setSuccessFor(password)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}


const pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");


// JS code to show/hide pasword and change icon
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField => {
            if(pwField.type ==="password"){
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else{
                pwField.type = "password"

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})