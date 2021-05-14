export default class Popup {
    constructor(popupSelector) {
        //this._popupSelector = popupSelector
        this._popup = document.querySelector(popupSelector)

        //this._openInternal.bind(this);
        // this.close = this.close.bind(this);
        //  this.open = this.open.bind(this);
    }
    open() {
        this._popup.classList.add('popup_open');
        this.setEventListeners()
    }
    close() {

        this._popup.classList.remove('popup_open');
        this._popup.removeEventListener('click', this._closeMouseClick.bind(this));
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            const popup = document.querySelector('.popup_open')

            this.close(popup)
        }
    }
    _closeMouseClick(evt) {
        /*if (evt.target.className === 'popup')*/
        if (evt.target === evt.currentTarget) {
            /*this.closePopup()*/

            this.close(evt.target)

        }
    }
    _setInputValues(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name];
        });
    }
    setEventListeners() {

        this._popup.querySelector(".popup__close").addEventListener('click', this.close.bind(this))
        this._popup.addEventListener('click', this._closeMouseClick.bind(this));
        document.addEventListener('keydown', this._handleEscClose.bind(this));


    }
}
