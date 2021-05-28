export default class Section {
    constructor( /*items,*/ renderer, containerSelector) {
        //  this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem(element) {
        this._container.append(element);
    }
    addAtFirstItem(element) {
        this._container.prepend(element);
    }

    clear() {
        //   this._container.innerHTML = '';
    }

    renderItems({ cards, myId }) {
        this.clear();
        const x = this;
        cards.forEach((item) => {
            x.addItem(x._renderer(item, myId, x));
        })

    }

}
