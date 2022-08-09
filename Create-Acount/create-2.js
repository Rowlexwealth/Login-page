
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

