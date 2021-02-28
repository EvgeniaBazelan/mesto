const settingsObj = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__item-error_visible'

}

const showInputError = (formSelector, inputSelector, errorMessage, settingsObj) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(settingsObj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settingsObj.errorClass);
};

const hideInputError = (formSelector, inputSelector, settingsObj) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(settingsObj.inputErrorClass);
    errorElement.classList.remove(settingsObj.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formSelector, inputSelector, settingsObj) => {
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector, inputSelector.validationMessage, settingsObj);
    } else {
        hideInputError(formSelector, inputSelector, settingsObj);
    }
};

const setEventListeners = (formSelector, settingsObj) => {
    const inputList = Array.from(formSelector.querySelectorAll(settingsObj.inputSelector));
    const buttonElement = formSelector.querySelector(settingsObj.submitButtonSelector);

    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement, settingsObj);

    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function() {
            checkInputValidity(formSelector, inputSelector, settingsObj);
            // чтобы проверять его при изменении любого из полей
            toggleButtonState(inputList, buttonElement, settingsObj);
        });
    });
};

const enableValidation = (settingsObj) => {
    const formList = Array.from(document.querySelectorAll(settingsObj.formSelector));
    formList.forEach((formSelector) => {
        //cлушатель для формы
        formSelector.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });


        setEventListeners(formSelector, settingsObj);

    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement, settingsObj) {
    if (hasInvalidInput(inputList, settingsObj)) {
        buttonElement.classList.add(settingsObj.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(settingsObj.inactiveButtonClass);
        buttonElement.disabled = false;
    }

}
enableValidation(settingsObj);


function cleanInputErrors(formSelector, settingsObjParameter) {
    const cleanInput = formSelector.querySelector(settingsObjParameter.inputSelector);
    const cleanError = formSelector.querySelector(`.${cleanInput.id}-error`);
    cleanInput.classList.remove(settingsObjParameter.inputErrorClass);
    cleanError.classList.remove(settingsObjParameter.errorClass);
    cleanError.value = "";

}


function cleanPopup(popup) {
    cleanInputErrors(popup, settingsObj)
}
