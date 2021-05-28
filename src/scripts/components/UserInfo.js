export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
        this._nameElement = document.querySelector(userNameSelector);
        this._infoElement = document.querySelector(userInfoSelector);
        this._avatarElement = document.querySelector(userAvatarSelector);

    };
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            profession: this._infoElement.textContent,
            avatar: this._avatarElement.style.backgroundImage
        };
    }
    setUserInfo(name, about, avatar) {
        {

            this._nameElement.textContent = name;
            this._infoElement.textContent = about;
            this._avatarElement.style.backgroundImage = `url(${avatar})`;
        }
    }
    setUserInfoForm(name, about) {
        this._nameElement.textContent = name;
        this._infoElement.textContent = about;
    }
    setUserInfoForAvatar(avatar) {
        this._avatarElement.style.backgroundImage = `url(${avatar})`
    }
}
