"use strict";


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.querySelector('.wrapper__form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const checkbox2 = document.querySelector('.wrapper__button-checkbox');
const star1 = document.querySelector('.star-mail');
const star2 = document.querySelector('.star-password');
const star3 = document.querySelector('.star-checkbox');
const error1 = document.querySelector('.error-mail');
const error2 = document.querySelector('.error-password');
const error3 = document.querySelector('.error-checkbox');
const error4 = document.querySelector('.error-mail_fault');
const error5 = document.querySelector('.error-password_fault');
const error6 = document.querySelector('.wrapper__field-mail');
const error7 = document.querySelector('.wrapper__field-password');

form.onsubmit = function () {
    const passwordValue = password.value;
    const emailValue = email.value;
    if (!validateEmail(emailValue)) {
        email.classList.add('mistake');
        star1.classList.add('mistake');
        error4.classList.add('mistake');
        error6.classList.add('mistake');
    }else {
        email.classList.remove('mistake');
        star1.classList.remove('mistake');
        error4.classList.remove('mistake');
        error6.classList.remove('mistake');
    }
    if (!emailValue) {
        email.classList.add('mistake');
        star1.classList.add('mistake');
        error1.classList.add('mistake');
        error6.classList.add('mistake');
        console.log('пустой имейл');
        error4.classList.remove('mistake');
    }else {
        email.classList.remove('mistake');
        star1.classList.remove('mistake');
        error1.classList.remove('mistake');
        error6.classList.remove('mistake');
    }
    if (passwordValue.length < 8 && passwordValue.length > 1) {
        password.classList.add('mistake');
        star2.classList.add('mistake');
        error7.classList.add('mistake');
        error5.classList.add('mistake');
    }else {
        password.classList.remove('mistake');
        star2.classList.remove('mistake');
        error7.classList.remove('mistake');
        error5.classList.remove('mistake');
    }
    if (!passwordValue) {
        password.classList.add('mistake');
        star2.classList.add('mistake');
        error2.classList.add('mistake');
        error7.classList.add('mistake');
    }else {
        password.classList.remove('mistake');
        star2.classList.remove('mistake');
        error2.classList.remove('mistake');
        error7.classList.remove('mistake');
    }
    if (!checkbox.checked) {
        checkbox2.classList.add('mistake');
        star3.classList.add('mistake');
        error3.classList.add('mistake');
    }else {
        checkbox2.classList.remove('mistake');
        star3.classList.remove('mistake');
        error3.classList.remove('mistake');
    }
    if (validateEmail(emailValue) && (emailValue) &&  (passwordValue) && (checkbox.checked) && passwordValue.length > 7){
        console.log({
            email: emailValue,
            password: passwordValue,
            isChecked: checkbox.checked,
        });
        return false
    }else {
        return false
    }
}




