export const initialCards = [{
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

export const CardSettings = {
    cardTempalteSelector: ".photo-grid-template",
    cardTitleSelector: ".photo-grid__text",
    cardImageSelector: ".photo-grid__view",
    cardGridSelector: ".photo-grid",
    cardTempalteItemSelector: ".photo-grid__item"
}
class Card {
    constructor(obj, cardSelector) {

        this._title = obj.name
        this._image = obj.link
        this._alt = obj.name
        this._cardSelector = cardSelector

    }

    _getTemplate() {

        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".photo-grid__item")
            .cloneNode(true);
        return cardElement
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector(".photo-grid__text").textContent = this._title
        this._element.querySelector(".photo-grid__view").alt = this._alt
        this._element.querySelector(".photo-grid__view").src = this._image
        return this._element
    }

}

function render(items, cardSelector) {
    items.forEach((item) => {
        const card = new Card(item, cardSelector);
        const cardElement = card.generateCard();

        // Добавляем в DOM
        document.querySelector(".photo-grid").append(cardElement);
    });
}

render(initialCards, ".photo-grid-template")


/*export function CreateCards(cardLinksAndNames, settings) {
    const gridNode = document
        .querySelector(settings.cardGridSelector);
    cardLinksAndNames.forEach(linkAndName => {
        const card = new Card(linkAndName.link, linkAndName.name, settings);
        card.AddToNode(gridNode);
    });
}

CreateCards(initialCards, CardSettings);
/*export const initialCards = [{
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

export const CardSettings = {
    cardTempalteSelector: ".photo-grid-template",
    cardTitleSelector: ".photo-grid__text",
    cardImageSelector: ".photo-grid__view",
    cardGridSelector: ".photo-grid"
}

export class Card2 {
    constructor(imageUrl, title, settings) {
        this._element = this._getTemplate(settings);
        this._setTitle(this._element, title, settings);
        this._setImage(this._element, imageUrl, title, settings);
    }

    AddToNode(node) {
        node.append(this._element);
    }

    _getTemplate(settings) {
        return document
            .querySelector(settings.cardTempalteSelector)
            .content
            .cloneNode(true);
    }

    _setTitle(cardElement, title, settings) {
        const titleNode = cardElement.querySelector(settings.cardTitleSelector);
        titleNode.textContent = title;
    }

    _setImage(cardElement, imageUrl, title, settings) {
        const imageNode = cardElement.querySelector(settings.cardImageSelector);
        imageNode.src = imageUrl;
        imageNode.alt = title;
    }

}

export function CreateCards(cardLinksAndNames, settings) {
    const gridNode = document
        .querySelector(settings.cardGridSelector);
    cardLinksAndNames.forEach(linkAndName => {
        const card = new Card2(linkAndName.link, linkAndName.name, settings);
        card.AddToNode(gridNode);
    });
}

CreateCards(initialCards, CardSettings);*/

// export class Card {
//     constructor(item, elementSelector) {
//         this._name = item.name;
//         this._link = item.link;
//         this._alt = item.name;
//         this._elementSelector = elementSelector;

//         this._element = this.getTemplate();
//         const cardElement = card.createCard()
//     }


//     getTemplate() {
//         const cardElement = document
//             .querySelector(this._elementSelector)
//             .content
//             .cloneNode(true)
//         return cardElement

//     }
//     _like() {
//         this._element.classList.toggle('photo-grid__like_active');
//     }
//     _deleteAction(e) {
//             const button = this._element.querySelector('.photo-grid__item_delete');
//             const buttonItem = button.parentNode;
//             buttonItem.parentNode.removeChild(buttonItem);
//         }
//         /*_openViewPopup() {

//             openPopup(popupView);

//             view.src = this._link;
//             view.alt = this._alt;
//             text.textContent = this._name;

//         }*/
//     createCard() {
//         this._element = this._getTemplate();
//         this._setEventListners;
//         this._element.src = this._link;
//         this._element.alt = this._name;
//         this._element.textContent = this._name

//     }
//     _setEventListners() {
//         const deleteItem = cardElement.querySelector('.photo-grid__item_delete');
//         deleteItem.addEventListener('click', () => { this._deleteAction(); });
//         const like = cardElement.querySelector('.photo-grid__like');
//         like.addEventListener('click', () => { this._like(); });
//         const cardView = cardElement.querySelector('.photo-grid__view');
//         cardView.addEventListener('click', () => { this._openViewPopup() });
//     }
// }


// /* function createCard(Card) {
//       const cardText = newCard.querySelector('.photo-grid__text');
//       const cardView = newCard.querySelector('.photo-grid__view');
//       cardText.textContent = card.name;
//       cardView.src = card.link;
//       cardView.alt = card.name;
//       const deleteItem = newCard.querySelector('.photo-grid__item_delete');
//       deleteItem.addEventListener('click', deleteAction);
//       const like = newCard.querySelector('.photo-grid__like');
//       like.addEventListener('click', likeActive);
//       cardView.addEventListener('click', () => openView(card));
//       return newCard;
//   }
// }*/

// /* _renderInitialCards() {
//         const htmlCard = item.map(createCard())
//         const photoGridList = document.querySelector('.photo-grid');
//         photoGridList.append(...htmlCard);
//     };
// }*/
// /* const photoGridList = document.querySelector('.photo-grid__item');*/

// function renderInitialCards(Card) {

//     initialCards.forEach((item) => {
//         const card = new Card(item, ".photo-grid__item");
//         photoGridList.append(card);
//     });


// }

// /*export default function renderInitialCards(Card) {
//     const htmlCard = initialCards.map(Card)
//     photoGridList.append(...htmlCard);
// }*/
// renderInitialCards(Card);
