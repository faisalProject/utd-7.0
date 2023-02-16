document.addEventListener('DOMContentLoaded', () => {
    var myProfileMenu = document.getElementsByClassName('my-profile-menu')[0];
    var submenu = document.getElementsByClassName('submenu');
    var eventsContents = document.getElementsByClassName('events-contents')[0];
    myProfileMenu.addEventListener('click', (e) => {
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
    });

    var certificateListContainer = document.getElementsByClassName('certificate-list-container')[0];
    var selectedFilter2 = document.getElementsByClassName('selected-filter-2')[0];
    certificateListContainer.addEventListener('mousemove', () => {
        selectedFilter2.classList.add('active');
    });

    certificateListContainer.addEventListener('mouseleave', () => {
        selectedFilter2.classList.remove('active');
    });

    var certificateList = document.getElementsByClassName('certificate-list');
    var selectedCertificateList = document.getElementsByClassName('selected-certificate-list')[0];
    var profileSeminarContainer = document.getElementsByClassName('profile-seminar-container')[0];
    for (const j of certificateList) {
        j.addEventListener('click', () => {
            selectedCertificateList.innerHTML = j.innerHTML;
            
            if (j === certificateList[0]) {
                profileSeminarContainer.style.marginLeft = '0';
            } else if(j === certificateList[1]) {
                profileSeminarContainer.style.marginLeft = '-100%'
            } else {
                profileSeminarContainer.style.marginLeft = '-200%'
            }
        });
    };

    var certificateImage = document.getElementsByClassName('certificate-image');
    var enlargeCertificate = document.getElementsByClassName('enlarge-certificate')[0];
    var body = document.querySelector('body');
    for (const k of certificateImage) {
        k.addEventListener('click', () => {
            enlargeCertificate.classList.add('active');
            body.classList.add('active-modal');
        })
    };
    
    var closeBigPicture = document.getElementsByClassName('close-big-picture')[0];
    closeBigPicture.addEventListener('click', () => {
        enlargeCertificate.classList.remove('active');
        body.classList.remove('active-modal');
    });

    var croseCloseBigPicture1 = document.getElementsByClassName('crose-close-big-picture')[0];
    var croseCloseBigPicture2 = document.getElementsByClassName('crose-close-big-picture')[1];
    var bigCertificateImage = document.getElementsByClassName('big-certificate-image')[0];
    var downloadContainer = document.getElementsByClassName('download-container')[0];
    var iconCertificateDownload = document.getElementsByClassName('icon-certificate-download')[0];
    window.addEventListener('click', (e) => {
        if (e.target !== closeBigPicture &&
            e.target !== croseCloseBigPicture1 &&
            e.target !== croseCloseBigPicture2 &&
            e.target !== bigCertificateImage &&
            e.target !== downloadContainer &&
            e.target !== iconCertificateDownload &&
            e.target.className !== 'certificate-image') {
            enlargeCertificate.classList.remove('active');
            body.classList.remove('active-modal');
        }
    })
})