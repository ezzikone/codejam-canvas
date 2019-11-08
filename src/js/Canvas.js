import size4 from "./data/4x4.json";
import size32 from "./data/32x32.json";
import size256 from "./data/256x256.png";

export default class Canvas {
    constructor(block, gridSize) {
        this.block = block;
        this.gridSize = gridSize;
        this.previewConfig = {
            "4": {
                type: "json",
                data: size4
            },
            "32": {
                type: "json",
                data: size32
            },
            "256": {
                type: "image",
                data: size256
            }
        };
        this.init();
    }

    init() {
        this.pixelSize = this.block.width / this.gridSize;
        this.scale();
    }

    scale() {
        const { type, data } = this.previewConfig[this.gridSize];
        type === "json" ? this.renderArray(data) : this.renderImage(0, 0, data);
    }

    renderArray(pixels) {
        for (let i = 0; i < pixels.length; i++)
            for (let j = 0; j < pixels[i].length; j++)
                this.renderPixel(i, j, this.parseColor(pixels[i][j]));
    }

    renderPixel(x, y, color) {
        const ctx = this.block.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
    }

    renderImage(x, y, src) {
        const ctx = this.block.getContext("2d");
        const image = new Image(this.gridSize, this.gridSize);
        image.src = 'dist\/' + src;
        image.onload = () => ctx.drawImage(image, x, y, this.block.width, this.block.height);
    }

    setSize(gridSize) {
        this.gridSize = gridSize;
        this.pixelSize = this.block.width / this.gridSize;
        this.scale();
    }

    parseColor(color) {
        return Array.isArray(color)
            ? `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`
            : `#${color}`;
    }
}
