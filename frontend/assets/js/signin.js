document.addEventListener('DOMContentLoaded', () => {
    var showPass4 = document.getElementsByClassName('show-password-4')[0];
    var inputPass4 = document.getElementsByClassName('input-type4')[0];
    
    showPass4.addEventListener('click', () => {
        showPass4.classList.toggle('active');
        inputPass4.type === 'password' ? inputPass4.type = 'text' : inputPass4.type = 'password';
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
