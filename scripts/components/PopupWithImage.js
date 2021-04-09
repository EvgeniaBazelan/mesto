import Popup from './Popup.js'
import { view, text } from '../utils/constants.js'

export default class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector)
        this._title = data.name
        this._image = data.link
    }
    openPopup() {
        super.openPopup()
        view.src = this._image;
        view.alt = this._title;
        text.textContent = this._title;
    }
}
