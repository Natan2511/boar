import { Notify } from 'notiflix/build/notiflix-notify-aio';

const modalOpenButtons = document.querySelectorAll('.call--modal__open');
const modal = document.querySelector('.call--modal');
const form = document.querySelector('.call--modal__form');

modalOpenButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

function closeModal() {
  modal.style.display = 'none';
}

document.addEventListener('mousedown', event => {
  if (!modal.contains(event.target)) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

modal.addEventListener('touchstart', event => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener('click', event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();

  form.reset();
  closeModal();
  Notify.success('Спасибо, мы Вам обязательно перезвоним');
}
