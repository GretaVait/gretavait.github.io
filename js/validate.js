const form = document.querySelector('form');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const submit = form.querySelector('#submit');
const messageInput = form.querySelector('#message');
const errorText = form.querySelectorAll('.error-text');
const messageAlert = document.querySelector('.alert');
const alertText = messageAlert.querySelector('.alert__msg');
const alertImg = messageAlert.querySelector('.alert__img');
//Error message when user types wrong input

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
}

function validateName(name) {
    var re = /^[a-zA-Z]{1,}$/;
    return re.test(String(name.value).toLowerCase());
}

function errorInput(input, errorText) {
    input.style.backgroundImage = 'url(images/icon-error.svg)';
    input.style.paddingRight = '50px';
    input.style.border = '1px solid var(--bright-orange)';
    input.style.marginBottom = '5px';
    errorText.style.marginBottom = '5px';
}

function correctInput(input, errorText) {
    input.style.backgroundImage = 'none';
    input.style.paddingRight = '10px';
    input.style.border = '1px solid var(--neutral-black)';
    errorText.innerHTML = '';
    errorText.style.marginBottom = '0px';
}

submit.addEventListener('click', function(event) {
    let nameCorrect = false;
    let emailCorrect = false;

    event.preventDefault();
    // First name
    if (nameInput.value === '') {
        errorInput(nameInput, errorText[0]);
        errorText[0].innerHTML = 'Name field cannot be empty';
    } else if (validateName(nameInput) === false) {
        errorInput(nameInput, errorText[0]);
        errorText[0].innerHTML = 'Name is incorrect';
    } else {
        nameCorrect = true;
        correctInput(nameInput, errorText[0]);
    }

    // Email
    if (emailInput.value === '') {
        errorInput(emailInput, errorText[1]);
        errorText[1].innerHTML = 'Email field cannot be empty';
    }
    else if (validateEmail(emailInput, errorText) === false) {
        errorInput(emailInput, errorText[1]);
        errorText[1].innerHTML = 'Email is incorrect';
    } else {
        emailCorrect = true;
        correctInput(emailInput, errorText[1]);
    }

    if (nameCorrect === true && emailCorrect === true) {
        emailjs.send("gmail", "template_bbRXiZUs", {"reply_to":emailInput.value,"to_name":nameInput.value,"message_html":messageInput.value})
        .then(function(){
            messageAlert.style.opacity = '1';
            alertImg.setAttribute('src', 'images/checkbox-correct.svg');
            alertText.innerHTML = 'Your message was successfully sent!';
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
            setTimeout(() => {
                messageAlert.style.opacity = '0';
            }, 5000);
          }, function(err) {
            messageAlert.style.opacity = '1';
            alertImg.setAttribute('src', 'images/checkbox-error.svg');
            alertText.innerHTML = 'Your message was not sent! Please try again';
            setTimeout(() => {
                messageAlert.style.opacity = '0';
            }, 5000);
         });
    }
});