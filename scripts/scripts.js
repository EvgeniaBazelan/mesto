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




//const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-place');

const popupView = document.querySelector('.popup_view');
const view = popupView.querySelector('.view__photo');
const text = popupView.querySelector('.view__text');



/*function openProfile() {

    popupProfile.classList.toggle('popup_open');
    changeName.value = profName.textContent;
    changeProfession.value = profession.textContent;
}

function closeProfile() {

    popupProfile.classList.toggle('popup_open');
}

function openAdd() {

    popupAdd.classList.toggle('popup_open');
}

function closeAdd() {

    popupAdd.classList.toggle('popup_open');
}*/

function openPopup(popup) {

    popup.classList.add('popup_open');
}

function closePopup(item) {

    item.classList.remove('popup_open');
}

function editformFill(e) {
    e.preventDefault();
    profName.textContent = changeName.value;
    profession.textContent = changeProfession.value;
    closePopup(popupProfile);
}

function addformFill(e) {
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

form.addEventListener('submit', editformFill);
addFormElement.addEventListener('submit', addformFill);



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




function createCard(name, link) {
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
    cardView.addEventListener('click', openView);

    const viewcloseBtn = popupView.querySelector('button[name=close_view]');
    viewcloseBtn.addEventListener('click', (e) => {

        popupView.classList.remove('popup_open');
    });

    function openView(e) {



        popupView.classList.toggle('popup_open');
        view.src = link;
        view.alt = name;
        text.textContent = name;



    }
    return newCard;
}
initialCards.forEach(function(element) {
    const initialCardElement = createCard(element.name, element.link)
    photoGridList.append(initialCardElement)
});