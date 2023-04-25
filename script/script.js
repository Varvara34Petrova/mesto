const content = document.querySelector('.content');
const editButton = content.querySelector('.profile-info__edit-button');
const popupOpenButtonElement = document.querySelector('.popup_open');
const popupElement = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.popup__field');
const fieldName = document.querySelector('.popup__field_name');
const fieldAbout = document.querySelector('.popup__field_about');
const textName = document.querySelector('.profile-info__text-name');
const textAbout = document.querySelector('.profile-info__text-about');
const buttonSubmit = document.querySelector('.submit-button');

const openPopup = function () {
  console.log('openPopup');
  popupElement.classList.add('popup_open')
  fieldName.value = textName.textContent
  fieldAbout.value = textAbout.textContent
}

const closePopup = function () {
  console.log('closePopup');
  popupElement.classList.remove('popup_open')
}

const closePopupByClickOnOverlay = function (event) {
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  textName.textContent = fieldName.value;
  textAbout.textContent = fieldAbout.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
formElement.addEventListener('submit', handleFormSubmit);
buttonSubmit.addEventListener('submit', handleFormSubmit);