import Section from './scripts/components/Section.js';
import Card from './scripts/components/Card.js'
import PopupWithImage from './scripts/components/PopupWithImage.js'
import { initialCards, addBtn, editBtn, settingsObj, popupProfileForValid, popupAddForValid, saveBtn } from './scripts/utils/constants.js'
import PopupWithForm from './scripts/components/PopupWithForm.js';
import UserInfo from './scripts/components/UserInfo.js'
import FormValidator from './scripts/components/FormValidator.js'


const user = new UserInfo({
    userNameSelector: ".profile__name",
    userInfoSelector: ".profile__profession"
})


const popupProfile = new PopupWithForm((data) => {
    user.setUserInfo(data.name, data.profession)
}, '.popup_edit-profile')

function openPopupFunc() {
    popupProfileFormValidator.resetValidation()
    const userInfo = user.getUserInfo();
    popupProfile.openWithFormData(userInfo);
}
editBtn.addEventListener('click', openPopupFunc)
const popupProfileFormValidator = new FormValidator(settingsObj, popupProfileForValid)
popupProfileFormValidator.enableValidation()


function openView(item) {
    const popupView = new PopupWithImage(item, '.popup_view')
    popupView.openWithData(item)
}


function createCard(item) {
    const card = new Card(item, openView, ".photo-grid-template");
    return card.generateCard()
}

function render(item) {
    const cardElement = createCard(item);
    console.log(cardElement)
    CardList.addItem(cardElement);


};


const CardList = new Section(
    initialCards,
    render,
    ".photo-grid");

const popupAdd = new PopupWithForm((data) => {

    const initialCardElement = createCard({ name: data.title, link: data.link })
    CardList.addAtFirstItem(initialCardElement);

}, '.popup_add-place')

function AddOpenPopup() {
    popupAddFormValidator.resetValidation()
    popupAdd.open();
}

addBtn.addEventListener('click', AddOpenPopup)
const popupAddFormValidator = new FormValidator(settingsObj, popupAddForValid)
popupAddFormValidator.enableValidation()

CardList.renderItems()
