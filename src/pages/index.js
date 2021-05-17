import './index.css'
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import { initialCards, addBtn, editBtn, settingsObj, popupProfileForValid, popupAddForValid, saveBtn } from '../scripts/utils/constants.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js'
import FormValidator from '../scripts/components/FormValidator.js'


const user = new UserInfo({
    userNameSelector: ".profile__name",
    userInfoSelector: ".profile__profession"
})


const popupProfile = new PopupWithForm((data) => {
    user.setUserInfo(data.name, data.profession)
}, '.popup_edit-profile')
popupProfile.setEventListeners()

function openPopupFunc() {
    popupProfileFormValidator.resetValidation()
    const userInfo = user.getUserInfo();
    popupProfile.open(userInfo);

}
editBtn.addEventListener('click', openPopupFunc)
const popupProfileFormValidator = new FormValidator(settingsObj, popupProfileForValid)
popupProfileFormValidator.enableValidation()

const popupView = new PopupWithImage('.popup_view')
popupView.setEventListeners()

function openView(item) {
    //  const popupView = new PopupWithImage( /*item,*/ '.popup_view')
    popupView.open(item)
        //  popupView.setEventListeners()
}


function createCard(item) {
    const card = new Card(item, openView, ".photo-grid-template");
    return card.generateCard()
}

function render(item) {
    const cardElement = createCard(item);
    console.log(cardElement)
    cardList.addItem(cardElement);


};


const cardList = new Section(
    initialCards,
    render,
    ".photo-grid");

const popupAdd = new PopupWithForm((data) => {

    const initialCardElement = createCard({ name: data.title, link: data.link })
    cardList.addAtFirstItem(initialCardElement);

}, '.popup_add-place')
popupAdd.setEventListeners()

function addOpenPopup() {
    popupAddFormValidator.resetValidation()
    popupAdd.open();

}

addBtn.addEventListener('click', addOpenPopup)
const popupAddFormValidator = new FormValidator(settingsObj, popupAddForValid)
popupAddFormValidator.enableValidation()

cardList.renderItems()
