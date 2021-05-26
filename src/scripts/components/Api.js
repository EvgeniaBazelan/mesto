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
}
