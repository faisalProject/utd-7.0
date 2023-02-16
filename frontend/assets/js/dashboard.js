document.addEventListener('DOMContentLoaded', () => {
    var picture = document.getElementsByClassName('picture')[0];
    var dropdownProfile = document.getElementsByClassName('dropdown-profile')[0];
    picture.addEventListener('mousemove', () => {
        dropdownProfile.classList.add('active');
        picture.classList.add('active');
    });
    
    picture.addEventListener('mouseleave', () => {
        dropdownProfile.classList.remove('active');
        picture.classList.remove('active');
    });

    picture.addEventListener('click', () => {
        if (!dropdownProfile.classList.contains('active')) {
            dropdownProfile.classList.add('active');
        } 
    });
    
    dropdownProfile.addEventListener('mousemove', () => {
        picture.classList.add('active');
    });

    dropdownProfile.addEventListener('mouseleave', () => {
        picture.classList.remove('active');
    });

    var toTop = document.getElementsByClassName('btn-to-top')[0];
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 150) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active');
        }
    });

    var mainHamburgerContainer = document.getElementsByClassName('main-hamburger-container')[0];
    var mainMobileNavbar = document.getElementsByClassName('main-mobile-navbar')[0];
    var nav = document.querySelector('nav');
    mainHamburgerContainer.addEventListener('click', () => {
        mainMobileNavbar.classList.toggle('active');
        nav.classList.toggle('active');
        picture.classList.toggle('nonactive');
    });

    let mainPageScroll = document.getElementsByClassName('main-page-scroll');
    for (let i of mainPageScroll) {
        i.addEventListener('click', (e) => {
            let hrefElement = i.getAttribute('href');
            let destinationElements = document.querySelector(hrefElement);
    
            let offset = destinationElements.offsetTop - 50;
            document.querySelector('html, body').scrollTop = offset;
            e.preventDefault();
        });
    };

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

    var mainNavbar = document.getElementsByClassName('main-navbar')[0];
    var mainNavbarMenu = document.getElementsByClassName('main-navbar-menu');
    mainNavbar.addEventListener('click', (e) => {
        if (e.target.className === 'main-navbar-menu') {
            for (const a of mainNavbarMenu) {
                a.className = 'main-navbar-menu'
            };

            for (const b of mainNavbarList) {
                b.className = 'main-navbar-list';
            };

            e.target.classList.add('active');
            // e.preventDefault();
        }
    });

    var mainNavbarList = document.getElementsByClassName('main-navbar-list');
    dropdownProfile.addEventListener('click', (e) => {
        if(e.target.className === 'main-navbar-list') {
            for (const b of mainNavbarList) {
                b.className = 'main-navbar-list';
            };

            for (const a of mainNavbarMenu) {
                a.className = 'main-navbar-menu'
            };

            e.target.classList.add('active');
            // e.preventDefault();
        }
    });

    var detailBtn = document.getElementsByClassName('detail-btn');
    for (const c of detailBtn) {
        c.addEventListener('click', (e) => {
            for (const a of mainNavbarMenu) {
                a.className = 'main-navbar-menu'
            };

            for (const b of mainNavbarList) {
                b.className = 'main-navbar-list';
            };
            // e.preventDefault();
        })
    };

    var mainMoreBtn = document.getElementsByClassName('main-more-btn');
    for (const d of mainMoreBtn) {
        d.addEventListener('click', (e) => {
            for (const a of mainNavbarMenu) {
                a.className = 'main-navbar-menu'
            };

            for (const b of mainNavbarList) {
                b.className = 'main-navbar-list';
            };
            // e.preventDefault();
        })
    };

    var body = document.querySelector('body');
    var themeContainer = document.getElementsByClassName('theme-container')[0];
    themeContainer.addEventListener('click', () => {
        themeContainer.classList.toggle('dark');
        var theme
        if(themeContainer.classList.contains('dark')) {
            theme = 'dark'
        } else {
            theme = 'light'
        }
        body.classList.toggle('dark');
        
        localStorage.setItem('pageItem', JSON.stringify(theme));
    });
    
    var getItem = JSON.parse(localStorage.getItem('pageItem'));
    if(getItem === 'dark') {
        themeContainer.classList.toggle('dark');
        body.classList.toggle('dark');
    }
})