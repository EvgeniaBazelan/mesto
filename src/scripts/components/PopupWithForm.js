import Popup from './Popup.js'



export default class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector, handleClose) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this._handleClose = handleClose
        this._form = this._popup.querySelector('.form')
        this._inputs = this._form.querySelectorAll('.form__item')
        this._submitBtn = this._form.querySelector('.form__button')
        this._submitBtnText = this._submitBtn.textContent
        this._submitFunctionForBtn = this.submitFunction.bind(this)
    }

    _getInputValues() {
        const data = {};
        this._inputs.forEach((input) => {
            data[input.name] = input.value;
        });
        return data;
    }
    renderLoading(isLoading) {
        if (isLoading) {
            this._submitBtn.textContent = "Сохранение..."
        } else {
            this._submitBtn.textContent = this._submitBtnText
        }
    }

    /*openWithFormData(data) {
        super.open()
        this._setInputValues(data)
        this._submitBtn.disabled = true;
        this._submitBtn.classList.add('form__button_disabled');


    }*/
    open(data) {
        //super.open()

        super.open()
        if (data) {
            this._setInputValues(data)
        }




        // this._submitBtn.disabled = true;
        // this._submitBtn.classList.add('form__button_disabled');


    }


    _setInputValues(data) {

        this._inputs.forEach((input) => {
            input.value = data[input.name];
        });

    }
    submitFunction(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        // this.close(false);
    }

    // submitFunctionForDelete() {
    //     evt.preventDefault();
    //     this._handleFormSubmit();
    //     this.close();
    // }
    // setEventListenersForDelete() {
    //     var x = this
    //     this._form.addEventListener('submit', x.submitFunctionForDelete.bind(x));
    // }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFunctionForBtn);

    }

    removeEventListeners() {
        super.removeEventListener()
        this._form.removeEventListener('submit', this._submitFunctionForBtn);
    }

    close(notSubmited) {
        super.close();
        //this._form.reset();
        // this._form.removeEventListener('submit', this._submitFunctionForBtn);
        this._form.reset();
        if (notSubmited && this._handleClose !== undefined) {
            this._handleClose()
        }
    }

}
