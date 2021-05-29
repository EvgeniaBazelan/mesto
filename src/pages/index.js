import './index.css'
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import { initialCards, addBtn, editBtn, settingsObj, popupProfileForValid, popupAddForValid, saveBtn, apiOptions, changeAvatar, popupAvatarForValid } from '../scripts/utils/constants.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js'
import FormValidator from '../scripts/components/FormValidator.js'
import Api from '../scripts/components/Api.js'

const api = new Api(apiOptions)

const user = new UserInfo({
    userNameSelector: ".profile__name",
    userInfoSelector: ".profile__profession",
    userAvatarSelector: ".profile__avatar"
})


const popupProfile = new PopupWithForm((data) => {
    popupProfile.renderLoading(true)
    api.changeUserInfo(data.name, data.profession).then((res) => { user.setUserInfoForm(res.name, res.about) }).finally(() => { popupProfile.renderLoading(false) })

}, '.popup_edit-profile')
popupProfile.setEventListeners()

/*const popupProfile = new PopupWithForm((data) => {
    user.setUserInfo(data.name, data.profession)
}, '.popup_edit-profile')*/


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
        //  popupView. ()
}



/*const cardList = new Section(
    studentsCards,
    render,
    ".photo-grid");*/


function addOpenPopup() {
    popupAddFormValidator.resetValidation()
    popupAdd.open();

}

addBtn.addEventListener('click', addOpenPopup);
const popupAddFormValidator = new FormValidator(settingsObj, popupAddForValid);
popupAddFormValidator.enableValidation()

/*cardList.renderItems()*/

function createCard(item, myId) {
    const card = new Card(item, openView, myId, ".photo-grid-template", LikeDislike, HandleDeleteCard);
    return card.generateCard()
}


function LikeDislike(liked, id) {
    if (liked)
        return api.like(id).then((data) => {
            return data.likes
        })
    else
        return api.dislike(id).then((data) => {
            return data.likes
        })
}

/*let studentsCards = null*/
const cardList = new Section(
    createCard,
    ".photo-grid");

const popupAdd = new PopupWithForm(
    (data) => {
        popupAdd.renderLoading(true)
        api.getUserInfo()
            .then(userInfo => userInfo._id)
            .then(myId => api.postNewCard(data.title, data.link)
                .then(res => {
                    cardList.addAtFirstItem(createCard(res, myId))
                })).finally(() => { popupAdd.renderLoading(false) })

        /*const initialCardElement = createCard({ name: data.title, link: data.link })
        cardList.addAtFirstItem(initialCardElement);*/

    }, '.popup_add-place')
popupAdd.setEventListeners()

function HandleDeleteCard(cardId) {
    return new Promise((resolves, rejectes) => {
        const popup = new PopupWithForm(() => {
            api.deleteMyCard(cardId).then(_ => {
                popup.removeEventListeners();
                resolves({})
            })
        }, ".popup_confirm", () => {
            popup.removeEventListeners();
            rejectes({})
        })
        popup.setEventListeners()
        popup.open()
    })
}
// const popupAvatar = new PopupWithForm((data) => {
//         api.changeAvatar(data.link).then((res) => { user.setUserInfoForAvatar(res.avatar) })
//             /* api.getUserInfo()
//                  .then(userInfo => { return userInfo.avatar })
//                  .then(avatar => {
//                      return api.changeAvatar(avatar, data.link).then(avatar => new Promise(resolves => {
//                          resolves({
//                              avatar: avatar,
//                              userAvatar: data.link
//                          })
//                      }))
//                  })
//                  .then((res) => { user.setUserInfoForAvatar(res.avatar) })*/
//     },
//     ".popup_update",
//     () => {
//         popup.removeEventListeners();
//         rejectes({})
//     }
// )


const popupAvatar = new PopupWithForm((data) => { api.changeAvatar(data.link).then((res) => { user.setUserInfoForAvatar(res.avatar) }).finally(() => { popupAvatar.renderLoading(false) }) },
    ".popup_update",
    () => {
        popupAvatar.removeEventListeners();
        rejectes({})
    }
)

function openPopupFuncAvatar() {
    popupAvatarFormValidator.resetValidation()

    popupAvatar.open();

}
const popupAvatarFormValidator = new FormValidator(settingsObj, popupAvatarForValid)
popupAvatarFormValidator.enableValidation()

changeAvatar.addEventListener('click', openPopupFuncAvatar) //popupAvatar.open.bind(popupAvatar))
popupAvatar.setEventListeners()

api.getUserInfo().then((userInfo) => {
    user.setUserInfo(userInfo.name, userInfo.about, userInfo.avatar)
    return userInfo._id

}).then(myId => {
    return api.getInitialCards().then(cards => new Promise(resolves => {
        resolves({
            myId: myId,
            cards: cards
        })
    }))
}).then(cardList.renderItems.bind(cardList))
