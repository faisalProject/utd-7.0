document.addEventListener('DOMContentLoaded', () => {
    var showPass2 = document.getElementsByClassName('show-password-2')[0];
    var showPass3 = document.getElementsByClassName('show-password-3')[0];
    var inputType2 = document.getElementsByClassName('input-type2')[0];
    var inputType3 = document.getElementsByClassName('input-type3')[0];
    var signinPopup = document.getElementsByClassName('signin-popup')[0];
    var body = document.querySelector('body');
    var signinContent = document.getElementsByClassName('signin-contents')[0];
    var closeButton = document.getElementsByClassName('close-container')[0];
    var signinContentTop = document.getElementsByClassName('signin-top')[0];
    var signinContentTopHeading = document.getElementsByClassName('signin-content-top-heading')[0];
    var signinContentBottom = document.getElementsByClassName('signin-content-bottom')[0];
    var email = document.getElementById('id-email');
    var pass = document.getElementById('id-pass');
    var showPass = document.getElementById('id-show-pass');
    var eyeClose = document.getElementById('id-eye-close');
    var eyeOpen = document.getElementById('id-eye-open');
    var forgotPass = document.getElementById('id-forgot-pass');
    var goToPass = document.getElementById('id-go-to-pass');
    var signinButton = document.getElementById('id-signin-button');
    var optionRegis = document.getElementById('id-option-register');
    var optionText = document.getElementById('id-option-text');
    var optionHref = document.getElementById('id-option-href');
    var footerSignin = document.getElementById('id-footer-signin');
    var footerSigninText = document.getElementById('id-footer-signin-text');
    var optionHrefSignin = document.getElementsByClassName('option-href-signin')[0];
    var showPassword1 = document.getElementsByClassName('show-password-1')[0];
    var inputType1 = document.getElementsByClassName('input-type1')[0];
    
    showPass2.addEventListener('click', () => {
        showPass2.classList.toggle('active');
        inputType2.type === 'password' ? inputType2.type = 'text' : inputType2.type = 'password';
    });
    
    showPass3.addEventListener('click', () => {
        showPass3.classList.toggle('active');
        inputType3.type === 'password' ? inputType3.type = 'text' : inputType3.type = 'password';
    });
    
    optionHrefSignin.addEventListener('click', () => {
        signinPopup.classList.add('active');
        body.classList.add('active');
    });
    
    showPassword1.addEventListener('click', () => {
        showPassword1.classList.toggle('active');
        inputType1.type === 'password' ? inputType1.type = 'text' : inputType1.type = 'password';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target !== signinContent && 
            e.target !== signinContentTop && 
            e.target !== signinContentTopHeading && 
            e.target !== closeButton &&
            e.target !== signinContentBottom && 
            e.target !== email && 
            e.target !== pass && 
            e.target !== showPass && 
            e.target !== eyeClose && 
            e.target !== eyeOpen && 
            e.target !== forgotPass && 
            e.target !== goToPass && 
            e.target !== signinButton &&
            e.target !== optionRegis &&
            e.target !== optionText &&
            e.target !== optionHref && 
            e.target !== footerSignin &&
            e.target !== footerSigninText &&
            e.target !== optionHrefSignin) {
            signinPopup.classList.remove('active');
            body.classList.remove('active');
        };
    });
    
    var toTop = document.getElementsByClassName('btn-to-top')[0];
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 150) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active');
        }
    });
})
