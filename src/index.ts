import "./styles/index.less";
import config from "./config";

import {RGB} from "./entities/RGB";
import {Gradient} from "./entities/Gradient";
import {ChangingColor} from "./entities/ChangingColor";

const {width, height} = config;

const background = <HTMLCanvasElement> document.getElementById("background");
const context = <CanvasRenderingContext2D> background.getContext("2d");

background.width = width;
background.height = height;

const color_1 = new RGB(142,68,173);
const color_2 = new RGB(41,128,185);

const gradient = new Gradient([
  new ChangingColor(color_1, color_2),
  new ChangingColor(color_2, color_1),
], width, height);

(function main() {
  gradient.draw(context);

  requestAnimationFrame(main);
}());


