document.addEventListener('DOMContentLoaded', () => {
    var buttonRegisterEvent = document.getElementsByClassName('button-register-event')[0];
    var modalRegisterContents = document.getElementsByClassName('modal-register-contents')[0];
    var body = document.querySelector('body');
    buttonRegisterEvent.addEventListener('click', () => {
        modalRegisterContents.classList.add('active');
        body.classList.add('active-modal');
    });

    var modalClose = document.getElementsByClassName('modal-close')[0];
    modalClose.addEventListener('click', () => {
        modalRegisterContents.classList.remove('active');
        body.classList.remove('active-modal');
    });

    var cancelBtn = document.getElementsByClassName('cancel-btn')[0];
    cancelBtn.addEventListener('click', () => {
        modalRegisterContents.classList.remove('active');
        body.classList.remove('active-modal');
    });

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
    window.addEventListener('click', (e) => {
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
            e.target !== buttonRegisterEvent &&
            e.target !== iconUserPlus) {
            modalRegisterContents.classList.remove('active');
            body.classList.remove('active-modal');
        }
    })
})