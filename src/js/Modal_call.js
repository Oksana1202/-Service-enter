// Заказать звонок

const modalContainer = document.querySelector('.container2')
function openModalCall() {
  modalContainer.classList.remove('hidden')
  modalContainer.style.display = 'flex'
}
function closeModalCall() {
  modalContainer.classList.add('hidden')
  modalContainer.style.display = 'none'
}
document
  .querySelector('.end_footer_button')
  .addEventListener('click', openModalCall)
document
  .querySelector('.end_footer_button img')
  .addEventListener('click', openModalCall)
document.querySelector('.call').addEventListener('click', openModalCall)
document.querySelector('.call img').addEventListener('click', openModalCall)
document.querySelector('.burger4').addEventListener('click', closeModalCall)
document.querySelector('.burger4 img').addEventListener('click', closeModalCall)
