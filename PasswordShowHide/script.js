let eyeIcon = document.getElementById('eyeIcon');
let passowrd = document.getElementById('password');

eyeIcon.addEventListener('click',()=>{
    if (passowrd.type == "password") {
        passowrd.type = "text";
        eyeIcon.src = 'eye-icons/eye-open.png';
    }else{
        passowrd.type = "password";
        eyeIcon.src = 'eye-icons/eye-close.png';
    }
})