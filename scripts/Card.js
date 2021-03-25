export default class Card {
    constructor(obj, cardSelector, openView) {

        this._title = obj.name
        this._image = obj.link
        this._alt = obj.name
        this._cardSelector = cardSelector
        this._openView = openView

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
        this._element.querySelector(".photo-grid__view").addEventListener('click', () => {
            this._openView(this._title, this._image); // откройте попап
        });
        this._element.querySelector('.photo-grid__item_delete').addEventListener('click', () => {
            this._handleDeleteCard()
        });
        this._element.querySelector('.photo-grid__like').addEventListener('click', () => {
            this._handleLikeIcon()
        });
    }
}
