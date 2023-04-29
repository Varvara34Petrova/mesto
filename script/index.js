const content = document.querySelector('.content');
const editButton = content.querySelector('.profile-info__edit-button');
const popupOpenButtonElement = document.querySelector('.popup_opened');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.popup__field');
const typeName = document.querySelector('.popup__info_type_name');
const typeAbout = document.querySelector('.popup__info_type_about');
const textName = document.querySelector('.profile-info__text-name');
const textAbout = document.querySelector('.profile-info__text-about');

const openPopup = function () {
  popupElement.classList.add('popup_opened');
  typeName.value = textName.textContent
  typeAbout.value = textAbout.textContent
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  textName.textContent = typeName.value;
  textAbout.textContent = typeAbout.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);