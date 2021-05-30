export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
        this._handleResponse = (res) => {
            if (!res.ok) {
                return Promise.reject(`Error: ${res.status}`);
            }
            return res.json();
        }
    }
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            })
            .then(this._handleResponse);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
            .then(this._handleResponse);
    }
    changeUserInfo(usernName, userAbout) {
        return fetch(`${this._baseUrl}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: usernName,
                    about: userAbout
                })
            })
            .then(this._handleResponse);
    }
    postNewCard(cardName, cardLink) {
        return fetch(`${this._baseUrl}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: cardName,
                    link: cardLink,

                })
            })
            .then(this._handleResponse);
    }
    like(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(this._handleResponse);
    }
    dislike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._handleResponse);
    }
    deleteMyCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._handleResponse);
    }
    changeAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatar
                })
            })
            .then(this._handleResponse);
    }

}