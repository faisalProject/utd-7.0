document.addEventListener('DOMContentLoaded', () => {
    var certificateDropdownMenu = document.getElementsByClassName('certificate-dropdown-menu')[0];
    var selectedCertificateContainer = document.getElementsByClassName('selected-certificate-container')[0];
    certificateDropdownMenu.addEventListener('mousemove', () => {
        selectedCertificateContainer.classList.add('active');
    });

    certificateDropdownMenu.addEventListener('mouseleave', () => {
        selectedCertificateContainer.classList.remove('active');
    });

    var listCertificateDropdownMenu = document.getElementsByClassName('list-certificate-dropdown-menu');
    var selectedCertificate = document.getElementsByClassName('selected-certificate')[0];
    var certificatePlaceSeminar = document.getElementsByClassName('certificate-place-seminar')[0];
    for (const i of listCertificateDropdownMenu) {
        i.addEventListener('click', () => {
            selectedCertificate.innerHTML = i.innerHTML;

            if (i === listCertificateDropdownMenu[0]) {
                certificatePlaceSeminar.style.marginLeft = '0%'
            } else if(i === listCertificateDropdownMenu[1]) {
                certificatePlaceSeminar.style.marginLeft = '-100%'
            } else {
                certificatePlaceSeminar.style.marginLeft = '-200%'
            }
        });
    };

    var certificatePageImage = document.getElementsByClassName('certificate-page-image');
    var enlargeCertificatePage = document.getElementsByClassName('enlarge-certificate-page')[0];
    var body = document.querySelector('body');
    for (const j of certificatePageImage) {
        j.addEventListener('click', () => {
            enlargeCertificatePage.classList.add('active');
            body.classList.add('active-modal');
        });
    };

    var closeBigPictureCertificatePage = document.getElementsByClassName('close-big-picture-certificate-page')[0];
    closeBigPictureCertificatePage.addEventListener('click', () => {
        enlargeCertificatePage.classList.remove('active');
        body.classList.remove('active-modal');
    });

    var certificatePageCroseCloseBigPicture1 = document.getElementsByClassName('certificate-page-crose-close-big-picture')[0];
    var certificatePageCroseCloseBigPicture2 = document.getElementsByClassName('certificate-page-crose-close-big-picture')[1];
    var bigCertificatePageImage = document.getElementsByClassName('big-certificate-page-image')[0];
    var certificatePageDownloadContainer = document.getElementsByClassName('certificate-page-download-container')[0];
    var certificatePageIconCertificateDownload = document.getElementsByClassName('certificate-page-icon-certificate-download')[0];
    window.addEventListener('click', (e) => {
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
    })
})