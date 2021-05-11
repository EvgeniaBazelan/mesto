export default class Section {
    constructor(items, renderer, containerSelector) {
        this._renderedItems = items;
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

    renderItems() {
        this.clear();
        const x = this;
        this._renderedItems.forEach((item) => {
            x._renderer(item);
        })

    }
}
