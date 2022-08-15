const form = document.getElementById('form');
const password = document.getElementById('rest-pword');
const password2 = document.getElementById('rest-pword2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkinputs();
});

function checkinputs() {
    //get the values from the inputs
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


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

// Js code to show/hide password and change iconscout

const   resetShowIcon = document.querySelectorAll(".reset-showPw"),
        resetHideIcon = document.querySelectorAll(".reset-hidePv"),
        resetFields = document.querySelectorAll(".reset-icon"),
        reserFields = document.querySelectorAll(".reset-icon2");

// JS code to show/hide pasword and change icon
resetShowIcon.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        resetFields.forEach(pwField => {
            if(pwField.type ==="password"){
                pwField.type = "text";

                resetShowIcon.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else{
                pwField.type = "password"

                resetShowIcon.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
});

// Confirm password
resetHideIcon.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        resetFields.forEach(pvField => {
            if(pvField.type ==="password"){
                pvField.type = "text";

                resetHideIcon.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else{
                pvField.type = "password"

                resetHideIcon.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

