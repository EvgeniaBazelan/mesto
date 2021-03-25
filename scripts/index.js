const popupView = document.querySelector('.popup_view');
const view = popupView.querySelector('.view__photo');
const text = popupView.querySelector('.view__text');
const viewcloseBtn = popupView.querySelector('button[name=close_view]');
const form = document.querySelector('form[name="form"]');
const saveBtn = form.querySelector('.form__button');
const editcloseBtn = form.querySelector('.popup__close');
const changeName = form.querySelector('input[name=name]');
const changeProfession = form.querySelector('input[name=profession');

const addFormElement = document.querySelector('form[name=add-cards]');
const changeFormTitle = addFormElement.querySelector('input[name="title"]');
const changeFormLink = addFormElement.querySelector('input[name=link]');
const addcloseBtn = addFormElement.querySelector('button[name=close]');

const profile = document.querySelector('.profile');
const editBtn = profile.querySelector('.profile__edit-button');
const addBtn = profile.querySelector('.profile__add-button');
const profName = profile.querySelector('.profile__name');
const profession = profile.querySelector('.profile__profession');

const popupProfile = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-place');
const photoGridList = document.querySelector('.photo-grid');

import Card from "./Card.js";
import FormValidator from "./FormValidator.js"

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const settingsObj = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__item-error_visible'

}
const popupProfileFormValidator = new FormValidator(settingsObj, popupProfile)
popupProfileFormValidator.enableValidation()
const popupAddFormValidator = new FormValidator(settingsObj, popupAdd)
popupAddFormValidator.enableValidation()

function cleanInputErrors(formSelector, settingsObjParameter) {
    const cleanInput = formSelector.querySelector(settingsObjParameter.inputSelector);
    const cleanError = formSelector.querySelector(`.${cleanInput.id}-error`);
    cleanInput.classList.remove(settingsObjParameter.inputErrorClass);
    cleanError.classList.remove(settingsObjParameter.errorClass);
    cleanError.value = "";

}


function cleanPopup(popup) {
    cleanInputErrors(popup, settingsObj)
}



function openView(name, link) {

    openPopup(popupView);

    view.src = link;
    view.alt = name;
    text.textContent = name;

}

function openPopup(popup) {
    popup.classList.add('popup_open');
    popup.addEventListener('click', closeMouseClick);
    document.addEventListener('keydown', closeKeyDown);
}


function closeKeyDown(evt) {
    if (evt.key === "Escape") {
        const popup = document.querySelector('.popup_open')
        closePopup(popup)
    }
}

function closeMouseClick(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target)
    }
}

function closePopup(popup) {
    popup.removeEventListener('click', closeMouseClick);
    document.removeEventListener('keydown', closeKeyDown);
    popup.classList.remove('popup_open');


}

function submitEditProfileForm(e) {
    e.preventDefault();
    profName.textContent = changeName.value;
    profession.textContent = changeProfession.value;
    cleanPopup(popupProfile);
    closePopup(popupProfile);
}

function submitAddCardForm(e) {
    e.preventDefault();
    const initialCardElement = createCard({ name: changeFormTitle.value, link: changeFormLink.value })
    photoGridList.prepend(initialCardElement);
    cleanPopup(popupAdd);
    closePopup(popupAdd)
}


editBtn.addEventListener('click', (e) => {

    changeName.value = profName.textContent;
    changeProfession.value = profession.textContent;
    cleanPopup(popupProfile);
    openPopup(popupProfile)
    popupProfileFormValidator.resetValidation()
});

addBtn.addEventListener('click', (e) => {
    openPopup(popupAdd);
    cleanPopup(popupAdd);
    changeFormTitle.value = ""
    changeFormLink.value = ""
    popupAddFormValidator.resetValidation()

});

editcloseBtn.addEventListener('click', (e) => {

    closePopup(popupProfile);
});

addcloseBtn.addEventListener('click', (e) => {

    closePopup(popupAdd);
});

form.addEventListener('submit', submitEditProfileForm);
addFormElement.addEventListener('submit', submitAddCardForm);

viewcloseBtn.addEventListener('click', (e) => {
    closePopup(popupView);
});

/*function render(items, cardSelector) {
    items.forEach((item) => {
        const card = new Card(item, cardSelector, openView);
        const cardElement = card.generateCard();

        // Добавляем в DOM
        document.querySelector(".photo-grid").append(cardElement);
    });
}*/

/*function render(items, cardSelector) {
    items.forEach((item) => {
        const newcard = createCard(item, cardSelector, openView);
        document.querySelector(".photo-grid").append(newcard);;
    });
};

function createCard(item, cardSelector, openView) {
    const card = new Card(item, cardSelector, openView);
    return card.generateCard()
}


render(initialCards, ".photo-grid-template")*/
function render(items) {
    items.forEach((item) => {
        const newcard = createCard(item);
        document.querySelector(".photo-grid").append(newcard);;
    });
};

function createCard(item) {
    const card = new Card(item, ".photo-grid-template", openView);
    return card.generateCard()
}
render(initialCards)
