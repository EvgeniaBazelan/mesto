let form = document.querySelector('.form');
let saveBtn = form.querySelector('.form__button');
let closeBtn = form.querySelector('.form__close');
let overlay = document.querySelector('.overlay');

let formElements = document.getElementsByClassName('form');
let overlayElements = document.getElementsByClassName('overlay');

let profile = document.querySelector('.profile');
let editBtn = profile.querySelector('.profile__edit-button');
let addBtn = profile.querySelector('.profile__add-button');
let profName = profile.querySelector('.profile__name');
let profession = profile.querySelector('.profile__profession');
let likeButtons = document.getElementsByClassName('photo-grid__like');

let formInfo = document.querySelector('form[name=form]');
let changeName = formInfo.querySelector('input[name=name]');
let changeProfession = formInfo.querySelector('input[name=profession');



function formOpen() {
    Array.from(overlayElements).forEach(element => element.classList.toggle('overlay_open'));
    Array.from(formElements).forEach(element => element.classList.toggle('form_open'));
    changeName.value = profName.textContent;
    changeProfession.value = profession.textContent;
}


function formClose() {
    Array.from(overlayElements).forEach(element => element.classList.remove('overlay_open'));
    Array.from(formElements).forEach(element => element.classList.remove('form_open'));
}


function formFill(e) {
    e.preventDefault();
    profName.textContent = changeName.value;
    profession.textContent = changeProfession.value;
    formClose();

}

Array.from(likeButtons).forEach(element => element.addEventListener('click', likeActive));


function likeActive(e) {
    e.target.classList.toggle('photo-grid__like_active');
}

editBtn.addEventListener('click', formOpen);
form.addEventListener('submit', formFill);
closeBtn.addEventListener('click', formClose);
