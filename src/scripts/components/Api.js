export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
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
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })

    }
    postNewCard(cardName, cardLink) {
        return fetch(`${this._baseUrl}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: cardName,
                    link: cardLink
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })

    }
    like(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }
    dislike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }
    deleteMyCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }
    changeAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatar
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    // если ошибка, отклоняем промис
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

}
