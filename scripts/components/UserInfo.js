export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector }) {
        this._nameElement = document.querySelector(userNameSelector);
        this._infoElement = document.querySelector(userInfoSelector);
    };
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            profession: this._infoElement.textContent
        };
    }
    setUserInfo(name, profession) {
        {
            this._nameElement.textContent = name;
            this._infoElement.textContent = profession
        }
    }
}
