document.addEventListener('DOMContentLoaded', () => {
    var hamburger = document.getElementsByClassName('hamburger-container')[0];
    hamburger.addEventListener('click', () => {
        mobileNavbar.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    var cardWrapper = [...document.querySelectorAll('.card-wrapper')];
    var btnNext = [...document.querySelectorAll('.next-btn')];
    var btnPrev = [...document.querySelectorAll('.prev-btn')];
    cardWrapper.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        btnNext[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });
    
        btnPrev[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
        });
    });
    
    var eventCard = [...document.querySelectorAll('.event-card')];
    var descTitle = document.getElementsByClassName('desc-e-title')[0];
    var descTheme = document.getElementsByClassName('theme')[0];
    var descDate = document.getElementsByClassName('date-value')[0];
    var descEvent = document.getElementsByClassName('d-event')[0];
    var eventDesccription = document.getElementsByClassName('e-description')[0];
    var eventTitle = document.getElementsByClassName('e-title');
    var eventTheme = document.getElementsByClassName('e-theme');
    var eventDate = document.getElementsByClassName('e-date');
    var eventDesc = document.getElementsByClassName('e-desc');
    var cardEventDesc = document.getElementsByClassName('card-event-desc');
    eventCard.forEach((item, i) => {
        item.addEventListener('click', () => {
            descTitle.innerHTML = eventTitle[i].innerHTML;
            descTheme.innerHTML = eventTheme[i].innerHTML;
            descDate.innerHTML = eventDate[i].innerHTML;
            descEvent.innerHTML = eventDesc[i].innerHTML;
            eventDesccription.innerHTML = cardEventDesc[i].innerHTML;
        });
    });
    
    var moreBtn = document.getElementsByClassName('more-btn')[0];
    moreBtn.addEventListener('click', () => {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            html: '<p><b>Anda harus masuk terlebih dahulu!</b></p>'
        });
    });
    
    var signinButtonEvent = document.getElementsByClassName('a-1')[0];
    var signinPopup = document.getElementsByClassName('signin-popup')[0];
    var body = document.querySelector('body');
    signinButtonEvent.addEventListener('click', () => {
        signinPopup.classList.add('active');
        body.classList.add('active');
    });
    
    var closeContainer = document.getElementsByClassName('close-container')[0];
    closeContainer.addEventListener('click', () => {
        signinPopup.classList.remove('active');
        body.classList.remove('active');
    });
    
    var signinContent = document.getElementsByClassName('signin-contents')[0];
    var signinContentTop = document.getElementsByClassName('signin-top')[0];
    var signinContentTopHeading = document.getElementsByClassName('signin-content-top-heading')[0];
    var closeButton = document.getElementsByClassName('close-container')[0];
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
    window.addEventListener('click', (e) => {
        if (e.target !== signinButtonEvent && 
            e.target !== signinContent && 
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
            e.target !== footerSigninText) {
            signinPopup.classList.remove('active');
            body.classList.remove('active');
        };
    });
    
    var showPassword1 = document.getElementsByClassName('show-password-1')[0];
    var inputType1 = document.getElementsByClassName('input-type1')[0];
    showPassword1.addEventListener('click', () => {
        showPassword1.classList.toggle('active');
        inputType1.type === 'password' ? inputType1.type = 'text' : inputType1.type = 'password';
    });
    
    let pagesScroll = document.getElementsByClassName('page-scroll');
    for (let i of pagesScroll) {
        i.addEventListener('click', (e) => {
            let hrefElement = i.getAttribute('href');
            let destinationElements = document.querySelector(hrefElement);
    
            let offset = destinationElements.offsetTop - 50;
            document.querySelector('html, body').scrollTop = offset;
            e.preventDefault()
        });
    };
    
    var pagesScrollMobile = document.getElementsByClassName('page-scroll-mobile');
    var mobileNavbar = document.getElementsByClassName('mobile-navbar')[0];
    var nav = document.querySelector('nav');
    for (var j of pagesScrollMobile) {
        j.addEventListener('click', () => {
            mobileNavbar.classList.remove('active');
            nav.classList.remove('active');
        });
    };
    
    optionHref.addEventListener('click', () => {
        signinPopup.classList.remove('active');
        body.classList.remove('active');
    });

    var toTop = document.getElementsByClassName('btn-to-top')[0];
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 150) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active');
        }
    });

    signinButton.addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            html: '<p><b>Selamat datang di website UTD 7.0</b></p>',
            showConfirmButton: false,
            timer: 1000
        })
    })
});