import Canvas from "./js/Canvas.js";
import Sizes from "./js/Size.js";
import './scss/main.scss';

const sizes = new Sizes(document.querySelector(".sizes"));
const canvas = new Canvas(document.querySelector(".canvas"), sizes.getCurrentSize());
sizes.onSizeChange(size => canvas.setSize(size));
