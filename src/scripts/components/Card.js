export default class Card {
    constructor(data, handleCardClick, cardSelector) {
        this._data = data;
        this._title = data.name
        this._image = data.link
        this._alt = data.name
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
            //this._cardsItems = data


    }

    _getTemplate() {

        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".photo-grid__item")
            .cloneNode(true);
        return cardElement
    }
    _handleDeleteCard() {
        this._element.remove();
    }

    _handleLikeIcon() {
        this._element.querySelector('.photo-grid__like').classList.toggle('photo-grid__like_active')
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".photo-grid__text").textContent = this._title
        this._element.querySelector(".photo-grid__view").alt = this._alt
        this._element.querySelector(".photo-grid__view").src = this._image


        return this._element
    }
    _setEventListeners() {
        var viewHandler = this.handleClickCard.bind(this);
        this._element.querySelector(".photo-grid__view").addEventListener('click', () => {
            viewHandler();
        });
        this._element.querySelector('.photo-grid__item_delete').addEventListener('click', () => {
            this._handleDeleteCard()
        });
        this._element.querySelector('.photo-grid__like').addEventListener('click', () => {
            this._handleLikeIcon()
        });
    }
    handleClickCard() {
        this._handleCardClick(this._data)
    }

}
