
var nameInputField = document.querySelector('#nameInputField');
var emailInputField = document.querySelector('#emailInputField');
var passwordInputField = document.querySelector('#passwordInputField');
var loginBtn = document.querySelector('#loginBtn');
var signupBtn = document.querySelector('#signupBtn');
var signInLink = document.querySelector('#signInLink');
var signUpLink = document.querySelector('#signUpLink');
var nameAlert = document.querySelector('#nameAlert');
var passAlert = document.querySelector('#passAlert');
var emailAlert = document.querySelector('#emailAlert');
var requireAlert = document.querySelector('#requireAlert');
var msgAlert = document.querySelector('msgAlert');
var mainSection = document.querySelector('#main');
var homeSection = document.querySelector('#home');
var logoutBtn = document.querySelector('#logoutBtn');
var loginContainer = [] ;
var signupContainer = [] ;

function signupLink() {
    nameInputField.classList.replace('d-none','d-block');
    loginBtn.classList.add('d-none');
    signupBtn.classList.replace('d-none','d-block');
    signUpLink.classList.add('d-none');
    signInLink.classList.replace('d-none','d-block')
}
signUpLink.addEventListener('click',signupLink)

function signinLink() {
    nameInputField.classList.replace('d-block','d-none');
    loginBtn.classList.replace('d-none','d-block');
    signupBtn.classList.replace('d-block','d-none');
    signUpLink.classList.replace('d-none','d-block');
    signInLink.classList.replace('d-block','d-none');
}
signInLink.addEventListener('click',signinLink)
function LoginEmail() {
    
    var login = {

        email : emailInputField.value ,
        password : passwordInputField.value ,
    }
    loginContainer.push(login);
    localStorage.setItem('LoginEmails',JSON.stringify(loginContainer));
    clearLogin();

}
loginBtn.addEventListener('click',  () => {

    if( emailInputField.value=="" || passwordInputField.value == "")
    {
    emailInputField.classList.add('is-invalid');
    passwordInputField.classList.add('is-invalid');
    requireAlert.classList.replace('d-none','d-block');
    loginBtn.classList.remove('my-3')
    }
    else
    {
    LoginEmail();
    passwordInputField.classList.remove('is-valid')
    emailInputField.classList.remove('is-valid')
    nameInputField.classList.remove('is-valid')
    mainSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
    }
})

logoutBtn.addEventListener('click', () => {
    mainSection.classList.remove('d-none');
    homeSection.classList.add('d-none');
})


function validateNameField() {
    var regex = /[0-9]{0,}[a-zA-Z]{2,}[0-9]{0,}/;
    if(regex.test(nameInputField.value) == true)
        {
        nameInputField.classList.replace('is-invalid','is-valid');
        nameAlert.classList.replace('d-block','d-none')
        
        return true
        } 
        else
        {
        nameInputField.classList.add('is-invalid');
        nameAlert.classList.replace('d-none','d-block')
        return false
        }
}
nameInputField.addEventListener('input',validateNameField)

function validateEmailField() {
    var regex = /^[a-z]{1,20}[0-9]{1,}@(gmail|yahoo).com$/;
    if(regex.test(emailInputField.value) == true)
        {
        emailInputField.classList.replace('is-invalid','is-valid');
        emailAlert.classList.replace('d-block','d-none')
        
        return true
        } 
        else
        {
        emailInputField.classList.add('is-invalid');
        emailAlert.classList.replace('d-none','d-block')
        return false
        }
}
emailInputField.addEventListener('input',validateEmailField)

function validatePasswordField() {
    var regex = /^[A-Z][a-z]{1,}[0-9]{1,}(@|#|&)/;
    if(regex.test(passwordInputField.value) == true)
        {
        passwordInputField.classList.replace('is-invalid','is-valid');
        passAlert.classList.replace('d-block','d-none')
        
        return true
        } 
        else
        {
        passwordInputField.classList.add('is-invalid');
        passAlert.classList.replace('d-none','d-block')
        return false
        }
}
passwordInputField.addEventListener('input',validatePasswordField)
function signupEmail() {
    var signup = {

        name : nameInputField.value ,
        email : emailInputField.value ,
        password : passwordInputField.value ,
    }
    
        if (signupContainer.includes(signup) == true)  
    {
        msgAlert.classList.replace('d-none','d-block')
    }
    else
    {
        signupContainer.push(signup);
        localStorage.setItem('signupEmails',JSON.stringify(signupContainer))
        clearsign();
    }
}

signupBtn.addEventListener('click', function () {

    if( nameInputField.value=="" || emailInputField.value=="" || passwordInputField.value == "")
    {
    nameInputField.classList.add('is-invalid');
    emailInputField.classList.add('is-invalid');
    passwordInputField.classList.add('is-invalid');
    requireAlert.classList.replace('d-none','d-block');
    loginBtn.classList.remove('my-3')
    }
    else
    {
    signupEmail();
    passwordInputField.classList.remove('is-valid')
    emailInputField.classList.remove('is-valid')
    nameInputField.classList.remove('is-valid')
    }

})

function clearLogin() {
    emailInputField.value="";
    passwordInputField.value="";
}

function clearsign() {
    nameInputField.value="";
    emailInputField.value="";
    passwordInputField.value="";
}