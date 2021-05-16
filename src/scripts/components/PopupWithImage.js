import Popup from './Popup.js'



export default class PopupWithImage extends Popup {
    constructor( /*data,*/ popupSelector) {
        super(popupSelector)
        this._text = this._popup.querySelector(".view__text")
        this._view = this._popup.querySelector(".view__photo")

        /* this._view.src = data.link;
         this._view.alt = data.name;
         this._text.textContent = data.name;*/


    }
    open(data) {
        super.open()
        this._view.src = data.link;
        this._view.alt = data.name;
        this._text.textContent = data.name;
    }
}
