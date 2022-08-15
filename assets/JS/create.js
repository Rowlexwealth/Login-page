const form = document.getElementById('form');
// const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkinputs();
});

function checkinputs() {
    //get the values from the inputs
    // const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // if(usernameValue === '') {
    //     // show error
    //     // add error class
    //     setErrorFor(username, 'Username cannot be blank');
    // } else if (usernameValue.length < 6) {
    //     setErrorFor(username, 'Username must contain at least 6 characters')
    // } else {
    //     // add success class
    //     setSuccessFor(username);
    // }

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

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password2 does not match');
    } else {
        setSuccessFor(password2)
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



// JS code to show/hide pasword and change icon

const   pwShowHide = document.querySelectorAll(".showHidePw"),
        pvShowHide = document.querySelectorAll(".showHidePv"),
        pwFields = document.querySelectorAll(".password"),
        pvFields = document.querySelectorAll(".password2");

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
});

// Confirm password
pvShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pvFields.forEach(pvField => {
            if(pvField.type ==="password"){
                pvField.type = "text";

                pvShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else{
                pvField.type = "password"

                pvShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

