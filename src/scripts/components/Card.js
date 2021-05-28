export default class Card {
    constructor(data, handleCardClick, myid, cardSelector, likedCallback, deleteCallbak) {
        this._data = data;
        this._title = data.name
        this._image = data.link
        this._id = data._id
        this._alt = data.name
        this._likesCount = data.likes.length;
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
        this._likedCallback = likedCallback
        this._myId = myid
        this._likedByMe = this._chekLikedByMe(data.likes, myid)
        this._createdByMe = this._createdByMy(data, myid);
        this._handleDeleteCard = deleteCallbak
            //this._cardsItems = data
    }
    _createdByMy(data, myId) {
        if (data.owner._id == myId) {
            return true
        }
        return false
    }

    _chekLikedByMe(_likes, myId) {
        for (let x in _likes) {
            if (_likes[x]._id == myId)
                return true
        }
        return false
    }

    _getTemplate() {

        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector(".photo-grid__item")
            .cloneNode(true);
        return cardElement
    }


    _updateLikes(likes) {
        this._likesCount = likes.length;
        this._likedByMe = this._chekLikedByMe(likes, this._myId)
        this._element.querySelector('.photo-grid__counter').textContent = this._likesCount
        if (this._likedByMe) {
            this._element.querySelector('.photo-grid__like').classList.add('photo-grid__like_active');
        } else {
            this._element.querySelector('.photo-grid__like').classList.remove('photo-grid__like_active');
        }

    }

    _handleLikeIcon() {
        var x = this
            // this._element.querySelector('.photo-grid__like').classList.toggle('photo-grid__like_active')
        if (!this._likedByMe) {
            this._likedCallback(true, this._id).then(x._updateLikes.bind(x))
        } else {
            this._likedCallback(false, this._id).then(x._updateLikes.bind(x))
                // this._element.querySelector('.photo-grid__like').classList.add('photo-grid__like_active');
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".photo-grid__text").textContent = this._title
        this._element.querySelector(".photo-grid__view").alt = this._alt
        this._element.querySelector(".photo-grid__view").src = this._image
        this._element.querySelector('.photo-grid__counter').textContent = this._likesCount
        if (this._likedByMe) {
            this._element.querySelector('.photo-grid__like').classList.toggle('photo-grid__like_active')
        }
        if (this._createdByMe) {
            this._element.querySelector('.photo-grid__item_delete').style.visibility = "visible";
        } else {
            this._element.querySelector('.photo-grid__item_delete').style.visibility = "hidden"
        }
        return this._element
    }
    _setEventListeners() {
        var x = this;
        var viewHandler = this.handleClickCard.bind(this);
        this._element.querySelector(".photo-grid__view").addEventListener('click', () => {
            viewHandler();
        });
        this._element.querySelector('.photo-grid__item_delete').addEventListener('click', () => {
            if (x._createdByMe) {
                x._handleDeleteCard(x._id).then(_ => {
                    x._element.remove()
                }).catch(() => {
                    //confirmation dialog closed
                })
            }
        });
        this._element.querySelector('.photo-grid__like').addEventListener('click', () => {
            x._handleLikeIcon();

        })
    }
    handleClickCard() {
        this._handleCardClick(this._data)
    }

}
