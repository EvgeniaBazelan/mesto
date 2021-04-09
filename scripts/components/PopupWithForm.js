import Popup from './Popup.js'
import FormValidator from './FormValidator.js'


export default class PopupWithForm extends Popup {
    constructor(submitForm, obj, popupSelector) {
        super(popupSelector)
        this._submitForm = submitForm
        this._formSelector = obj.formSelector
        this._inputSelector = obj.inputSelector
        this._submitButtonSelector = obj.submitButtonSelector

        this._form = this._popup.querySelector(this._formSelector)
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
        this._buttonElement = this._form.querySelector(this._submitButtonSelector)
    }
    _getInputValues() {
        const formData = new FormData(document.querySelector(this._formSelector))
        return formData
    }
    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', submitForm)
    }
    close() {
        const popupFormValidator = new FormValidator(Obj, this._popup)
        popupFormValidator.resetValidation()
        super.closePopup()

    }

}


/*var formElement = document.getElementById("myform_id");
var formData = new FormData(formElement);

Now you can use formData.get('foo'), for example.
this._form.querySelector(`.${inputElement.id}-error`)
const changeFormTitle = addFormElement.querySelector('input[name="title"]');
const changeFormLink = addFormElement.querySelector('input[name=link]');

this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement)
    this._toggleButtonState(this._buttonElement)
});

export const settingsObj = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__item-error_visible'

}
document.querySelector('form').addEventListener('submit', (e) => {
  const formData = new FormData(e.target);
  // Now you can use formData.get('foo'), for example.
  // Don't forget e.preventDefault() if you want to stop normal form .submission
});*/
