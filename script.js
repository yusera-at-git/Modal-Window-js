'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
modal.style.backgroundColor = 'pink';

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', () => closeModal());
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  // console.log(e, e.key);
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
