export default class Popup {
    constructor(popupSelector) {
        //this._popupSelector = popupSelector
        this._popup = document.querySelector(popupSelector)
    }
    openPopup() {
        this._popup.classList.add('popup_open');
        this._popup.addEventListener('click', this._closeMouseClick());
        document.addEventListener('keydown', this._handleEscClose());

    }
    closePopup() {
        this._popup.classList.remove('popup_open');
        this._popup.removeEventListener('click', this._closeMouseClick());
        document.removeEventListener('keydown', this._handleEscClose());

    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            const popup = document.querySelector('.popup_open')
            this.closePopup(popup)
        }
    }
    _closeMouseClick(evt) {
        if (evt.target === evt.currentTarget) {
            this.closePopup(evt.target)

        }
    }
    setEventListeners() {
        const closeButton = this._popup.querySelector(".popup__close")
        closeButton.addEventListener('click', this.closePopup())
    }
}
