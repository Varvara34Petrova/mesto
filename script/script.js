// let content = document.querySelector('.content');
// let elementGroupHeart = content.querySelector('element__group-heart');
// let actionButton = content.querySelector('.element__group-heart_active');
// let addForm = document.querySelector ('.profile__info-edit-button');

// let popup = document.querySelector ('.popup');
// let popupOpened = document.querySelector ('.popup_opened');
// let popupContainer = document.querySelector ('.popup__container');
// let profileInfoEditButton = document.querySelector ('.profile__info-edit-button');
// let popupClose = document.querySelector ('.popup__close');
// let profileInfoText_first = document.getElementById('profile__info-text_first');

// if (profileInfoEditButton === 0) {
//   profileInfoEditButton.setAttribute ('disabled','disabled');
//   profileInfoEditButton.classList.add (`profile__info-edit-button_disabled`);
// } else {
//   profileInfoEditButton.removeAttribute ('disabled');
//   profileInfoEditButton.classList.remove ('profile__info-edit-button_disabled');
// }

// profileInfoEditButton.forEach((button) => {
//   button.addEventListener ('click', (e) => {
//     e.preventDefault();
//     popup.classList.add('active');
//     popupContainer.classList.add('active');
//   })
  
// });

// profileInfoEditButton.foreach((button) => {
//     button.addEventListener ('click', (e) => { 
//       e.preventDefault ();
//       popup.classList.add ('active');
//       popupContainer.classList.add ('active');
//     }) 
// });

// popupClose.addEventListener ('click',() => {
//   popup.classList.remove ('active');
//   popupContainer.classList.remove ('active');
// });

// document.addEventListener ('click',(e) => {
//   if (e.target === popup) {
//     popup.classList.remove ('active');
//     popup.classList.remove ('active');
//   }
// });

// function addText() {
//   profileInfoText_first.innerHTML += ``;
// }
// addText ();

// console.log(profileInfoText_first.textContent);
// profileInfoText_first.textContent = '';

// popupOpened.addEventListener('click', profileInfoEditButton);


// profileInfoEditButton.addEventListener('click', function() {
//   popup = `active` 

// })


// profileInfoEditButton.addEventListener ('click', profileInfoEditButton);

console.log ("Привет, мир!");

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


// const togglePopupVisibility = function (event) {
//   console.log('togglePopupVisibility');
//   popupElement.classList.toggle('popup_open');
// }
// togglePopupVisibility()

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