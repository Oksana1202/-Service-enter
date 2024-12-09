// Открытие окна отзыва
const modalContainer = document.querySelector('.container')
function openModalFeedback() {
  modalContainer.classList.remove('hidden')
  modalContainer.style.display = 'flex'
}
function closeModalFeedback() {
  modalContainer.classList.add('hidden')
  modalContainer.style.display = 'none'
}
document
  .querySelector('.end_footer_button1')
  .addEventListener('click', openModalFeedback)
document
  .querySelector('.end_footer_button1 img')
  .addEventListener('click', openModalFeedback)
document.querySelector('.sms').addEventListener('click', openModalFeedback)
document.querySelector('.sms img').addEventListener('click', openModalFeedback)

document.querySelector('.burger3').addEventListener('click', closeModalFeedback)
document
  .querySelector('.burger3 img')
  .addEventListener('click', closeModalFeedback)
