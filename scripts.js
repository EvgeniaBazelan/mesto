let form = document.querySelector('.form');
let saveBtn = form.querySelector('.form__button');
let closeBtn = form.querySelector('.form__close');

let changeName = form.querySelector('.form__item_name');
let changeProfession = form.querySelector('.form__item_profession');

changeName.setAttribute('value', 'Жак-Ив-Кусто');
changeProfession.setAttribute('value', 'Исследователь океана');

let profile = document.querySelector('.profile');
let editBtn = profile.querySelector('.profile__edit-button');
let addBtn = profile.querySelector('.profile__add-button');

let profName = profile.querySelector('.profile__name');

let profession = profile.querySelector('.profile__profession');


function formOpen() {
    form.setAttribute('style', 'display:block');
}
editBtn.addEventListener('click', formOpen);

function formClose() {
    form.removeAttribute('style', 'display:block');
}
closeBtn.addEventListener('click', formClose);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    profName.textContent = changeName.value;
    profession.textContent = changeProfession.value;
    formClose();

});
