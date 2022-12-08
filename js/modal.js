(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

function OpenMenu() {
  document.querySelector('.navigation__hamburger').classList.toggle('change');
  document.querySelector('.navigation__hamburger').classList.toggle('hamburger-up');
  document.querySelector('.contact-links').classList.toggle('hide');
  document.querySelector('.social-navigation-res').classList.toggle('is-hidden');
  document.querySelector('.navigation__links').classList.toggle('hide');
}