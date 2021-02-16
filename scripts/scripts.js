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




const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-place');



function openProfile(e) {
    popupProfile.style.visibility = 'visible';
    popupProfile.classList.toggle('popup_open');
    changeName.value = profName.textContent;
    changeProfession.value = profession.textContent;
}

function closeProfile(e) {
    popupProfile.style.visibility = 'hidden';
    popupProfile.classList.toggle('popup_open');
}

function openAdd(e) {
    popupAdd.style.visibility = 'visible';
    popupAdd.classList.toggle('popup_open');
}

function closeAdd(e) {
    popupAdd.style.visibility = 'hidden';
    popupAdd.classList.toggle('popup_open');
}






function closePopup(evt) {
    if (evt.target === evt.currentTarget) {
        closeProfile();
        closeAdd();

    }
}

function editformFill(e) {
    e.preventDefault();
    profName.textContent = changeName.value;
    profession.textContent = changeProfession.value;
    closeProfile();
}

function addformFill(e) {
    e.preventDefault();
    const initialCardElement = createCard(changeFormTitle.value, changeFormLink.value)
    photoGridList.prepend(initialCardElement)
    closeAdd()
}


function deleteAction(e) {
    const button = e.target;
    const buttonItem = button.parentNode;
    buttonItem.parentNode.removeChild(buttonItem);
}

function likeActive(e) {
    e.target.classList.toggle('photo-grid__like_active');
}





editBtn.addEventListener('click', openProfile);
addBtn.addEventListener('click', openAdd);
editcloseBtn.addEventListener('click', closePopup);
addcloseBtn.addEventListener('click', closePopup);

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
    const Delete = newCard.querySelector('.photo-grid__item_delete');
    Delete.addEventListener('click', deleteAction);
    const Like = newCard.querySelector('.photo-grid__like');
    Like.addEventListener('click', likeActive);
    cardView.addEventListener('click', openView);



    function openView(e) {
        const popupView = document.querySelector('.popup_view');
        const view = popupView.querySelector('.view__photo');
        const text = popupView.querySelector('.view__text');
        const viewcloseBtn = popupView.querySelector('button[name=close_view]');
        viewcloseBtn.addEventListener('click', (e) => {
            popupView.style.visibility = 'hidden';
            popupView.classList.remove('popup_open');
        });
        popupView.style.visibility = 'visible';
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
