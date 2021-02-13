let form = document.querySelector('.form');
let saveBtn = form.querySelector('.form__button');
let editcloseBtn = form.querySelector('.form__close');

let overlay = document.querySelector('.overlay');

let formElements = document.getElementsByClassName('form');
let addFormElements = document.querySelector('form[name=add-cards]');
let changeFormTitle = addFormElements.querySelector('input[name="title"]');
let changeFormLink = addFormElements.querySelector('input[name=link]');
let addclosebtn = addFormElements.querySelector('button[name=close]');

let editOverlayElements = document.getElementsByClassName('overlay_edit-profile');
let addOverlayElements = document.getElementsByClassName('overlay_add-place');
let viewOverlayElements = document.querySelector('.overlay_view');
let viewcloseBtn = viewOverlayElements.querySelector('.view__close');

let profile = document.querySelector('.profile');
let editBtn = profile.querySelector('.profile__edit-button');
let addBtn = profile.querySelector('.profile__add-button');
let profName = profile.querySelector('.profile__name');
let profession = profile.querySelector('.profile__profession');
//let likeButtons = new Array();

let formInfo = document.querySelector('form[name=form]');
let changeName = formInfo.querySelector('input[name=name]');
let changeProfession = formInfo.querySelector('input[name=profession');


let photoGridList = document.querySelector('.photo-grid');
const photoGridTemplate = document.querySelector('.photo-grid-template').content;
//const viewTemplate = document.querySelector('.overlay_view-template').content;

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
let view = document.querySelector('.view__photo')

function likeActive(e) {
    e.target.classList.toggle('photo-grid__like_active');
}

function deleteAction(e) {
    const button = e.target;
    const buttonItem = button.parentNode;
    buttonItem.parentNode.removeChild(buttonItem);
}

function viewFormOpen(e) {
    // var imageSource = e.target['src'];
    // var exactOverlay = viewOverlayElements[0];
    // exactOverlay.classList.toggle('overlay_open');
    // exactOverlay.getElementsByTagName('img')[0].setAttribute("src", imageSource)
    viewOverlayElements.classList.add('overlay_open');
    let imageSource = e.target['src'];

    viewOverlayElements.querySelector('.view__photo').setAttribute("src", imageSource);


}

initialCards.forEach(function(element) {
    const initialCardElement = photoGridTemplate.cloneNode(true);

    initialCardElement.querySelector('.photo-grid__text').textContent = element.name;
    initialCardElement.querySelector('.photo-grid__view').setAttribute("src", element.link)
        //likeButtons.push(initialCardElement.querySelector('.photo-grid__like'));
    initialCardElement.querySelector('.photo-grid__like').addEventListener("click", likeActive);
    initialCardElement.querySelector('.photo-grid__item_delete').addEventListener("click", deleteAction);
    initialCardElement.querySelector('.photo-grid__view').addEventListener('click', viewFormOpen)
    photoGridList.append(initialCardElement)
});





function addFormOpen(e) {
    Array.from(addOverlayElements).forEach(element => element.classList.toggle('overlay_open'));


    //Array.from(addFormElements).forEach(element => element.classList.toggle('form_open'));
    //changeFormTitle.setAttribute("value", element.title);
    //changeFormTitle.value = element.title.textContent;
    //changeFormLink.value = element.link.textContent;
}

function formOpen(e) {
    Array.from(editOverlayElements).forEach(element => element.classList.toggle('overlay_open'));
    // Array.from(formElements).forEach(element => element.classList.toggle('form_open'));
    changeName.value = profName.textContent;
    changeProfession.value = profession.textContent;
}
//function addClassOverlay() {
//   overlay.classList.add('overlay_open');
//   changeName.value = profName.textContent;
//   changeProfession.value = profession.textContent;
//}


function editformClose(e) {

    Array.from(editOverlayElements).forEach(element => element.classList.toggle('overlay_open'));

}

function addformClose(e) {

    Array.from(addOverlayElements).forEach(element => element.classList.toggle('overlay_open'));

}

function viewformClose(e) {

    viewOverlayElements.classList.remove('overlay_open');

}


function formFill(e) {
    e.preventDefault();
    profName.textContent = changeName.value;
    profession.textContent = changeProfession.value;
    editformClose();
}

function addformFill(e) {
    e.preventDefault();
    const initialCardElement = photoGridTemplate.cloneNode(true);

    initialCardElement.querySelector('.photo-grid__text').textContent = changeFormTitle.value;
    initialCardElement.querySelector('.photo-grid__view').setAttribute("src", changeFormLink.value);
    initialCardElement.querySelector('.photo-grid__item_delete').addEventListener("click", deleteAction);
    initialCardElement.querySelector('.photo-grid__like').addEventListener("click", likeActive);
    photoGridList.prepend(initialCardElement)
    addformClose();
}




//Array.from(likeButtons).forEach(element => element.addEventListener('click', likeActive));

// function likeActive() {
//   likeButtons.classList.add('photo-grid__like_active');
// }

//likeButtons.addEventListener('click', likeActive);
editBtn.addEventListener('click', formOpen);
addBtn.addEventListener('click', addFormOpen);
view.addEventListener('click', viewFormOpen);
//form.addEventListener('submit', formFill);
addFormElements.addEventListener('submit', addformFill);
formInfo.addEventListener('submit', formFill);
editcloseBtn.addEventListener('click', editformClose);
addclosebtn.addEventListener('click', addformClose);
viewcloseBtn.addEventListener('click', viewformClose);
