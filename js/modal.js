(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const 
    menuBtnRef = document.querySelector("[data-menu-button]");
    mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');

    mobileMenuRef.classList.toggle('is-open');
  });
  })();