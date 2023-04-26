const content = document.querySelector('.content');
const editButton = content.querySelector('.profile-info__edit-button');
const popupOpenButtonElement = document.querySelector('.profile-info__edit-button_popup-open');
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
  popupElement.classList.add('profile-info__edit-button_popup-open');
  fieldName.value = textName.textContent
  fieldAbout.value = textAbout.textContent
}

const closePopup = function () {
  console.log('closePopup');
  popupElement.classList.remove('profile-info__edit-button_popup-open');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  textName.textContent = fieldName.value;
  textAbout.textContent = fieldAbout.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
buttonSubmit.addEventListener('submit', handleFormSubmit);