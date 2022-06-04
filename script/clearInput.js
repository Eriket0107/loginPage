const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const btnSubmit = document.getElementById('enter-btn')

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

let email;
let password;

emailInput.addEventListener('change', function () {
   email = emailInput.value;
});

passwordInput.addEventListener('change', function () {
    password = passwordInput.value;
});

btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
    let isValidEmail = emailRegex.exec(email);
    let isValidPassword = passwordRegex.exec(password) 
    let emailError = document.getElementById('emailError');

   if(isValidEmail && emailInput.value !== ""){
       emailInput.classList.remove('invalid')
       emailError.innerHTML = "";
       emailInput.value = "";
   }else{
       emailInput.classList.add('invalid')
       emailError.innerText = 'insira um email válido';
   }
});

