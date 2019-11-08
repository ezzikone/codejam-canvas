export default class Size {

    constructor(block) {
        this.block = block;
    }

    getCurrentSize() {
        return this.block.querySelector(".sizes__item [type=radio]:checked").dataset.size;
    }

    onSizeChange(onchange) {
        this.block
            .querySelectorAll(".sizes__item [type=radio]")
            .forEach(element =>
                element.addEventListener("change", evt => onchange(evt.target.dataset.size))
            );
    }
}
