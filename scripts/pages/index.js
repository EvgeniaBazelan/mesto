import Section from '../components/Section.js';
import Card from '../components/Card.js'
import { cardListSelector, initialCards, popupView, view, text } from '../utils/constants.js'

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

const CardList = new Section({
    data: initialCards,
    renderer: (initialCard) => {
        const card = new Card(initialCard, ".photo-grid-template", openView);
        const cardElement = card.generateCard();
        CardList.setItem(cardElement);
    }
}, cardListSelector);

CardList.renderItems()