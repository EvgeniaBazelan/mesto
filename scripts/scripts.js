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

const popupView = document.querySelector('.popup_view');
const view = popupView.querySelector('.view__photo');
const text = popupView.querySelector('.view__text');




function openPopup(popup) {

    popup.classList.add('popup_open');
}

function closePopup(popup) {

    popup.classList.remove('popup_open');
}

function submitEditProfileForm(e) {
    e.preventDefault();
    profName.textContent = changeName.value;
    profession.textContent = changeProfession.value;
    closePopup(popupProfile);
}

function submitAddCardForm(e) {
    e.preventDefault();
    const initialCardElement = createCard(changeFormTitle.value, changeFormLink.value)
    photoGridList.prepend(initialCardElement)
    closePopup(popupAdd)
}


function deleteAction(e) {
    const button = e.target;
    const buttonItem = button.parentNode;
    buttonItem.parentNode.removeChild(buttonItem);
}

function likeActive(e) {
    e.target.classList.toggle('photo-grid__like_active');
}





editBtn.addEventListener('click', (e) => {
    changeName.value = profName.textContent;
    changeProfession.value = profession.textContent;
    openPopup(popupProfile)
});
addBtn.addEventListener('click', (e) => { openPopup(popupAdd) });
editcloseBtn.addEventListener('click', (e) => { closePopup(popupProfile) });
addcloseBtn.addEventListener('click', (e) => { closePopup(popupAdd) });

form.addEventListener('submit', submitEditProfileForm);
addFormElement.addEventListener('submit', submitAddCardForm);




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

const photoGridList = document.querySelector('.photo-grid');
const photoGridTemplate = document.querySelector('.photo-grid-template').content;


const viewcloseBtn = popupView.querySelector('button[name=close_view]');
viewcloseBtn.addEventListener('click', (e) => {
    closePopup(popupView)
});

function createCard(card) {
    const newCard = photoGridTemplate.cloneNode(true);
    const cardText = newCard.querySelector('.photo-grid__text');
    const cardView = newCard.querySelector('.photo-grid__view');
    cardText.textContent = card.name;
    cardView.src = card.link;
    cardView.alt = card.name;
    const deleteItem = newCard.querySelector('.photo-grid__item_delete');
    deleteItem.addEventListener('click', deleteAction);
    const like = newCard.querySelector('.photo-grid__like');
    like.addEventListener('click', likeActive);
    cardView.addEventListener('click', () => openView(card));
    return newCard;
}

function render() {
    const htmlCard = initialCards.map(createCard)
    photoGridList.append(...htmlCard);
}
/*function createCard(name, link) {
    const newCard = photoGridTemplate.cloneNode(true);
    const cardView = newCard.querySelector('.photo-grid__view');
    const cardText = newCard.querySelector('.photo-grid__text');

    cardText.textContent = name;
    cardView.src = link;
    cardView.alt = name;
    const deleteItem = newCard.querySelector('.photo-grid__item_delete');
    deleteItem.addEventListener('click', deleteAction);
    const like = newCard.querySelector('.photo-grid__like');
    like.addEventListener('click', likeActive);
    cardView.addEventListener('click', openView();



    /* function openView(e) {



         openPopup(popupView)
         view.src = link;
         view.alt = name;
         text.textContent = name;



     }
    return newCard;
}*/
/*initialCards.forEach(function(element) {
    const initialCardElement = createCard(element.name, element.link)
    photoGridList.append(initialCardElement)
});*/

function openView(card) {

    openPopup(popupView);


    view.src = card.link;
    view.alt = card.name;
    text.textContent = card.name;


    /* initialCards.forEach(function(element) {
         const initialCardElement = createCard(element.name, element.link)
         view.src = element.link;
         view.alt = element.name;
         text.textContent = element.name;
         return e.target
     });*/
    /*function(e) {
        const a = e.target
        const b = {...a }
        view.src = b.link

    }*/

}


function keyHandler(evt) {
    const popupEsc = evt.target.closest('.popup')
    if (evt.key === "Escape") {
        closePopup(popupEsc);
    }
}
document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
        closePopup(popupProfile);
        closePopup(popupAdd);
        closePopup(popupView);
    }
});

function mouseClick(evt) {
    if (evt.target === evt.currentTarget) {

        closePopup(popupProfile);
        closePopup(popupAdd);
        closePopup(popupView);
    }
}

popupProfile.addEventListener('click', mouseClick);
popupAdd.addEventListener('click', mouseClick);
popupView.addEventListener('click', mouseClick);
render()
