export default class Popup {
    constructor(popupSelector) {
        //this._popupSelector = popupSelector
        this._popup = document.querySelector(popupSelector)
        this._closeMouseClickB = this._closeMouseClick.bind(this);
        this._handleEscCloseB = this._handleEscClose.bind(this);
        this._closeB = this._close.bind(this);

        //  this.open = this.open.bind(this);
    }
    open() {
        this._popup.classList.add('popup_open');
        //this.setEventListeners()
    }
    _close() {

        this._popup.classList.remove('popup_open');
        // this._popup.querySelector(".popup__close").removeEventListener('click', this._closeB)
        // this._popup.removeEventListener('click', this._closeMouseClickB);
        // document.removeEventListener('keydown', this._handleEscCloseB);
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            //const popup = document.querySelector('.popup_open')

            this._close()
        }
    }
    _closeMouseClick(evt) {
            /*if (evt.target.className === 'popup')*/
            if (evt.target === evt.currentTarget) {
                /*this.closePopup()*/

                this._close()

            }
        }
        /* _setInputValues(data) {
             this._inputs.forEach((input) => {
                 input.value = data[input.name];
             });
         }*/
    setEventListeners() {

        this._popup.querySelector(".popup__close").addEventListener('click', this._closeB)
        this._popup.addEventListener('click', this._closeMouseClickB);
        document.addEventListener('keydown', this._handleEscCloseB);


    }
}
