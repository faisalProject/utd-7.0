document.addEventListener('DOMContentLoaded', () => {
    var hamburger = document.getElementsByClassName('hamburger-container')[0];
    hamburger ? hamburger.addEventListener('click', () => {
        mobileNavbar.classList.toggle('active');
        nav.classList.toggle('active');
    }): null;
    
    var cardWrapper = [...document.querySelectorAll('.card-wrapper')];
    var btnNext = [...document.querySelectorAll('.next-btn')];
    var btnPrev = [...document.querySelectorAll('.prev-btn')];
    cardWrapper ? cardWrapper.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        btnNext ? btnNext[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        }): null;
    
        btnPrev ? btnPrev[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
        }): null;
    }): null;
    
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
    eventCard ? eventCard.forEach((item, i) => {
        item.addEventListener('click', () => {
            descTitle.innerHTML = eventTitle[i].innerHTML;
            descTheme.innerHTML = eventTheme[i].innerHTML;
            descDate.innerHTML = eventDate[i].innerHTML;
            descEvent.innerHTML = eventDesc[i].innerHTML;
            eventDesccription.innerHTML = cardEventDesc[i].innerHTML;
        });
    }): null;
    
    var moreBtn = document.getElementsByClassName('more-btn')[0];
    moreBtn ? moreBtn.addEventListener('click', () => {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            html: '<p><b>Anda harus masuk terlebih dahulu!</b></p>'
        });
    }): null;
    
    var signinButtonEvent = document.getElementsByClassName('a-1')[0];
    var signinPopup = document.getElementsByClassName('signin-popup')[0];
    var body = document.querySelector('body');
    signinButtonEvent ? signinButtonEvent.addEventListener('click', () => {
        signinPopup.classList.add('active');
        body.classList.add('active');
    }): null;

    var optionHrefSignin = document.getElementsByClassName('option-href-signin')[0];
    optionHrefSignin ? optionHrefSignin.addEventListener('click', () => {
        signinPopup.classList.add('active');
        body.classList.add('active');
    }): null;
    
    var closeContainer = document.querySelectorAll('.close-container');
    closeContainer ? closeContainer.forEach(c => {
        c.addEventListener('click', () => {
            signinPopup.classList.remove('active');
            body.classList.remove('active');
        });
    }): null;
    
    var signinContent = document.getElementsByClassName('signin-contents')[0];
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
    if(signinButtonEvent) {
        window.addEventListener('click', (e) => {
            if (e.target !== signinButtonEvent && 
                e.target !== signinContent && 
                e.target !== signinContentTop && 
                e.target !== signinContentTopHeading && 
                e.target.className !== 'close-container' &&
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
    } else if (signinContent) {
        window.addEventListener('click', (e) => {
            if (e.target !== signinContent && 
                e.target !== signinContentTop && 
                e.target !== signinContentTopHeading && 
                e.target.className !== 'close-container' &&
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
    } else {
        null;
    }
    
    var showPasswords = document.querySelectorAll('.show-password');
    var inputType = document.querySelectorAll('.input-type');
    showPasswords ? showPasswords.forEach((showPassword, i) => {
        showPassword.addEventListener('click', () => {
            showPassword.classList.toggle('active');
            inputType[i].type === 'password' ? inputType[i].type = 'text' : inputType[i].type = 'password';
        })
    }): null;
    
    var pagesScroll = document.querySelectorAll('.page-scroll');
    pagesScroll ? pagesScroll.forEach(scroll => {
        scroll.addEventListener('click', (e) => {
            var hrefElement = scroll.getAttribute('href');
            var destinationElements = document.querySelector(hrefElement);
    
            var offset = destinationElements.offsetTop - 50;
            document.querySelector('html, body').scrollTop = offset;
            e.preventDefault();
        });
    }): null;
    
    var pagesMobileScroll = document.querySelectorAll('.page-scroll-mobile');
    var mobileNavbar = document.getElementsByClassName('mobile-navbar')[0];
    var nav = document.querySelector('nav');

    pagesMobileScroll ? pagesMobileScroll.forEach(mobileScroll => {
        mobileScroll.addEventListener('click', () => {
            mobileNavbar.classList.remove('active');
            nav.classList.remove('active');
        })
    }): null;
    
    optionHref ? optionHref.addEventListener('click', () => {
        signinPopup.classList.remove('active');
        body.classList.remove('active');
    }): null;

    var toTop = document.getElementsByClassName('btn-to-top')[0];
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 150) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active');
        }
    });

    signinButton ? signinButton.addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            html: '<p><b>Selamat datang di website UTD 7.0</b></p>',
            showConfirmButton: false,
            timer: 1000
        })
    }): null;

    var mainHamburgerContainer = document.querySelectorAll('.main-hamburger-container');
    var mainMobileNavbar = document.getElementsByClassName('main-mobile-navbar')[0];
    var nav = document.querySelector('nav');
    var picture = document.getElementsByClassName('picture')[0];
    mainHamburgerContainer ? mainHamburgerContainer.forEach(m => {
        m.addEventListener('click', () => {
            mainMobileNavbar.classList.toggle('active');
            nav.classList.toggle('active');
            picture.classList.toggle('nonactive');
        })
    }): null;

    var dropdownProfile = document.getElementsByClassName('dropdown-profile')[0];
    picture ? picture.addEventListener('mousemove', () => {
        dropdownProfile.classList.add('active');
        picture.classList.add('active');
    }): null;
    
    picture ? picture.addEventListener('mouseleave', () => {
        dropdownProfile.classList.remove('active');
        picture.classList.remove('active');
    }): null;

    picture ? picture.addEventListener('click', () => {
        if (!dropdownProfile.classList.contains('active')) {
            dropdownProfile.classList.add('active');
        } 
    }): null;
    
    dropdownProfile ? dropdownProfile.addEventListener('mousemove', () => {
        picture.classList.add('active');
    }): null;

    dropdownProfile ? dropdownProfile.addEventListener('mouseleave', () => {
        picture.classList.remove('active');
    }): null;

    var mainNavbar = document.querySelectorAll('.main-navbar');
    var mainNavbarMenu = document.querySelectorAll('.main-navbar-menu');
    var mainNavbarList = document.querySelectorAll('.main-navbar-list');
    mainNavbar ? mainNavbar.forEach(n => {
        n.addEventListener('click', (e) => {
            if (e.target.className === 'main-navbar-menu') {
                mainNavbarMenu.forEach(menu => {
                    menu.className = 'main-navbar-menu'
                })

                mainNavbarList.forEach(list => {
                    list.className = 'main-navbar-list'
                })
    
                e.target.classList.add('active');
                // e.preventDefault();
            }
        })
    }): null;

    var mainNavbarList = document.querySelectorAll('.main-navbar-list');
    dropdownProfile ? dropdownProfile.addEventListener('click', (e) => {
        if(e.target.className === 'main-navbar-list') {
            mainNavbarMenu.forEach(menu => {
                menu.className = 'main-navbar-menu';
            });

            mainNavbarList.forEach(list => {
                list.className = 'main-navbar-list'
            });

            e.target.classList.add('active');
            // e.preventDefault();
        }
    }): null;

    var detailBtn = document.querySelectorAll('.detail-btn');
    detailBtn ? detailBtn.forEach(d => {
        d.addEventListener('click', (e) => {
            mainNavbarMenu.forEach(menu => {
                menu.className = 'main-navbar-menu'
            });

            mainNavbarList.forEach(list => {
                list.className = 'main-navbar-list'
            });

            // e.preventDefault();
        })
    }): null;

    var mainMoreBtn = document.querySelectorAll('.main-more-btn');
    mainMoreBtn ? mainMoreBtn.forEach(m => {
        m.addEventListener('click', (e) => {
            mainNavbarMenu.forEach(menu => {
                menu.className = 'main-navbar-menu'
            });

            mainNavbarList.forEach(list => {
                list.className = 'main-navbar-list'
            });

            // e.preventDefault();
        })
    }): null;

    var buttonRegisterEvent = document.querySelectorAll('.button-register-event');
    var modalRegisterContents = document.querySelector('.modal-register-contents');
    buttonRegisterEvent ? buttonRegisterEvent.forEach(b => {
        b.addEventListener('click', () => {
            modalRegisterContents.classList.add('active');
            body.classList.add('active-modal');
        })
    }): null;

    var modalClose = document.querySelectorAll('.modal-close');
    modalClose ? modalClose.forEach(m => {
        m.addEventListener('click', () => {
            modalRegisterContents.classList.remove('active');
            body.classList.remove('active-modal');
        })
    }): null;

    var cancelBtn = document.querySelectorAll('.cancel-btn');
    cancelBtn ? cancelBtn.forEach(c => {
        c.addEventListener('click', () => {
            modalRegisterContents.classList.remove('active');
            body.classList.remove('active-modal');
        })
    }): null;

    var modalContents = document.getElementsByClassName('modal-contents')[0];
    var topModal = document.getElementsByClassName('top-modal')[0];
    var titleTopModal = document.getElementsByClassName('title-top-modal')[0];
    var modalClose = document.getElementsByClassName('modal-close')[0];
    var cross1 = document.getElementsByClassName('cross')[0];
    var cross2 = document.getElementsByClassName('cross')[1];
    var modalBody = document.getElementsByClassName('modal-body')[0];
    var titleModalBody = document.getElementsByClassName('title-modal-body')[0];
    var listContainer = document.getElementsByClassName('list-container')[0];
    var listModal1 = document.getElementsByClassName('list-modal')[0];
    var listModal2 = document.getElementsByClassName('list-modal')[1];
    var listModal3 = document.getElementsByClassName('list-modal')[2];
    var listModal4 = document.getElementsByClassName('list-modal')[3];
    var listModal5 = document.getElementsByClassName('list-modal')[4];
    var modalRegisterForm = document.getElementsByClassName('modal-register-form')[0];
    var transfer = document.getElementsByClassName('transfer')[0];
    var transferTitle = document.getElementsByClassName('transfer-title')[0];
    var selectModal = document.getElementsByClassName('select-modal')[0];
    var modalOption1 = document.getElementsByClassName('modal-option')[0];
    var modalOption2 = document.getElementsByClassName('modal-option')[1];
    var modalOption3 = document.getElementsByClassName('modal-option')[2];
    var payment = document.getElementsByClassName('payment')[0];
    var proofOfPayment = document.getElementsByClassName('proof-of-payment')[0];
    var uploadProofOfPayment = document.getElementsByClassName('upload-proof-of-payment')[0];
    var buttonContainerModal = document.getElementsByClassName('button-container-modal')[0];
    var payBtn = document.getElementsByClassName('pay-btn')[0];
    var iconUserPlus = document.getElementsByClassName('icon-user-plus')[0];
    modalContents ? window.addEventListener('click', (e) => {
        if (e.target !== modalContents &&
            e.target !== topModal &&
            e.target !== titleTopModal &&
            e.target !== modalClose &&
            e.target !== cross1 &&
            e.target !== cross2 &&
            e.target !== modalBody &&
            e.target !== titleModalBody &&
            e.target !== listContainer &&
            e.target !== listModal1 &&
            e.target !== listModal2 &&
            e.target !== listModal3 &&
            e.target !== listModal4 &&
            e.target !== listModal5 &&
            e.target !== modalRegisterForm &&
            e.target !== transfer &&
            e.target !== transferTitle &&
            e.target !== selectModal &&
            e.target !== modalOption1 &&
            e.target !== modalOption2 &&
            e.target !== modalOption3 &&
            e.target !== payment &&
            e.target !== proofOfPayment &&
            e.target !== uploadProofOfPayment &&
            e.target !== buttonContainerModal &&
            e.target !== cancelBtn &&
            e.target !== payBtn &&
            e.target.className !== 'button-register-event' &&
            e.target !== iconUserPlus) {
            modalRegisterContents.classList.remove('active');
            body.classList.remove('active-modal');
        }
    }): null;

    var tutorialListContainer = document.querySelectorAll('.tutorial-list-container');
    var selectedFilter = document.getElementsByClassName('selected-filter')[0];
    tutorialListContainer ? tutorialListContainer.forEach(t => {
        t.addEventListener('mousemove', () => {
            selectedFilter.classList.add('active');
        })
    }): null;

    tutorialListContainer ? tutorialListContainer.forEach(t => {
        t.addEventListener('mouseleave', () => {
            selectedFilter.classList.remove('active');
        })
    }): null;

    var activeTutorialList = document.getElementsByClassName('active-tutorial-list')[0];
    var tutorialList = document.getElementsByClassName('tutorial-list');
    var tutorialSelected = document.getElementsByClassName('tutorial-selected')[0];
    var firstTutorialList = document.getElementsByClassName('first-tutorial-list')[0];
    tutorialListContainer ? tutorialListContainer.forEach(t => {
        t.addEventListener('click', (e) => {
            if (e.target.className === 'tutorial-list') {
                for (const i of tutorialList) {
                    i.className = 'tutorial-list'
                }
                e.target.classList.add('active-tutorial-list')
                tutorialSelected.innerHTML = e.target.innerHTML;
    
                if (e.target === tutorialList[0]) {
                    firstTutorialList.style.marginLeft = '0%'
                } else if (e.target === tutorialList[1]) {
                    firstTutorialList.style.marginLeft = '-100%'
                } else {
                    firstTutorialList.style.marginLeft = '-200%'
                }
            }
        })
        tutorialSelected.innerHTML = activeTutorialList.innerHTML;
    }): null;

    var certificateDropdownMenu = document.querySelectorAll('.certificate-dropdown-menu');
    var selectedCertificateContainer = document.getElementsByClassName('selected-certificate-container')[0];
    certificateDropdownMenu ? certificateDropdownMenu.forEach(c => {
        c.addEventListener('mousemove', () => {
            selectedCertificateContainer.classList.add('active');
        })
    }): null;

    certificateDropdownMenu ? certificateDropdownMenu.forEach(c => {
        c.addEventListener('mouseleave', () => {
            selectedCertificateContainer.classList.remove('active');
        })
    }): null;

    var listCertificateDropdown = document.querySelectorAll('.list-certificate-dropdown-menu');
    var selectedCertificate = document.getElementsByClassName('selected-certificate')[0];
    var certificatePlaceSeminar = document.getElementsByClassName('certificate-place-seminar')[0];
    listCertificateDropdown ? listCertificateDropdown.forEach(list => {
        list.addEventListener('click', () => {
            selectedCertificate.innerHTML = list.innerHTML;
            if (list === listCertificateDropdown[0]) {
                certificatePlaceSeminar.style.marginLeft = '0%'
            } else if(list === listCertificateDropdown[1]) {
                certificatePlaceSeminar.style.marginLeft = '-100%'
            } else {
                certificatePlaceSeminar.style.marginLeft = '-200%'
            }
        })
    }): null;

    var certificatePageImage = document.querySelectorAll('.certificate-page-image');
    var enlargeCertificatePage = document.getElementsByClassName('enlarge-certificate-page')[0];
    var body = document.querySelector('body');
    certificatePageImage ? certificatePageImage.forEach(image => {
        image.addEventListener('click', () => {
            enlargeCertificatePage.classList.add('active');
            body.classList.add('active-modal');
        })
    }): null;

    var closeBigPictureCertificatePage = document.querySelectorAll('.close-big-picture-certificate-page');
    closeBigPictureCertificatePage ? closeBigPictureCertificatePage.forEach(c => {
        c.addEventListener('click', () => {
            enlargeCertificatePage.classList.remove('active');
            body.classList.remove('active-modal');
        })
    }): null;

    var certificatePageCroseCloseBigPicture1 = document.getElementsByClassName('certificate-page-crose-close-big-picture')[0];
    var certificatePageCroseCloseBigPicture2 = document.getElementsByClassName('certificate-page-crose-close-big-picture')[1];
    var bigCertificatePageImage = document.getElementsByClassName('big-certificate-page-image')[0];
    var certificatePageDownloadContainer = document.getElementsByClassName('certificate-page-download-container')[0];
    var certificatePageIconCertificateDownload = document.getElementsByClassName('certificate-page-icon-certificate-download')[0];
    certificatePageImage ? window.addEventListener('click', (e) => {
        if (e.target !== closeBigPictureCertificatePage &&
            e.target !== certificatePageCroseCloseBigPicture1 &&
            e.target !== certificatePageCroseCloseBigPicture2 &&
            e.target !== bigCertificatePageImage &&
            e.target !== certificatePageDownloadContainer &&
            e.target !== certificatePageIconCertificateDownload &&
            e.target.className !== 'certificate-page-image') {
            enlargeCertificatePage.classList.remove('active');
            body.classList.remove('active-modal');
        }
    }): null;

    var myProfileMenu = document.getElementsByClassName('my-profile-menu')[0];
    var submenu = document.querySelectorAll('.submenu');
    var eventsContents = document.getElementsByClassName('events-contents')[0];
    myProfileMenu ? myProfileMenu.addEventListener('click', (e) => {
        if (e.target.className === 'submenu') {
            for (const i of submenu) {
                i.className = 'submenu'
            }
            e.target.classList.add('active');

            if (e.target === submenu[0]) {
                eventsContents.style.marginLeft = '0%'
            } else {
                eventsContents.style.marginLeft = '-100%'
            }
        }
    }): null;

    var certificateListContainer = document.querySelectorAll('.certificate-list-container');
    var selectedFilter2 = document.getElementsByClassName('selected-filter-2')[0];
    certificateListContainer ? certificateListContainer.forEach(c => {
        c.addEventListener('mousemove', () => {
            selectedFilter2.classList.add('active');
        })
    }): null;

    certificateListContainer ? certificateListContainer.forEach(c => {
        c.addEventListener('mouseleave', () => {
            selectedFilter2.classList.remove('active');
        })
    }): null;

    var certificateList = document.querySelectorAll('.certificate-list');
    var selectedCertificateList = document.getElementsByClassName('selected-certificate-list')[0];
    var profileSeminarContainer = document.getElementsByClassName('profile-seminar-container')[0];
    certificateList ? certificateList.forEach(c => {
        c.addEventListener('click', () => {
            selectedCertificateList.innerHTML = c.innerHTML;

            if (c === certificateList[0]) {
                profileSeminarContainer.style.marginLeft = '0';
            } else if(c === certificateList[1]) {
                profileSeminarContainer.style.marginLeft = '-100%'
            } else {
                profileSeminarContainer.style.marginLeft = '-200%'
            }
        })
    }): null;
});