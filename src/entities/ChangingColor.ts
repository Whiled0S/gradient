import {RGB} from "./RGB";
import config from "../config";

const {speed} = config;

export class ChangingColor {
  min_red: number;
  max_red: number;
  min_green: number;
  max_green: number;
  min_blue: number;
  max_blue: number;

  step_red: number;
  step_green: number;
  step_blue: number;

  RGBColor: RGB;
  stringColor: string;

  constructor(color_1: RGB, color_2: RGB) {
    this.min_red = Math.min(color_1.red, color_2.red);
    this.max_red = Math.max(color_1.red, color_2.red);
    this.min_green = Math.min(color_1.green, color_2.green);
    this.max_green = Math.max(color_1.green, color_2.green);
    this.min_blue = Math.min(color_1.blue, color_2.blue);
    this.max_blue = Math.max(color_1.blue, color_2.blue);

    this.step_red = (color_1.red - color_2.red) / 60 * speed;
    this.step_green = (color_1.green - color_2.green) / 60 * speed;
    this.step_blue = (color_1.blue - color_2.blue) / 60 * speed;

    console.log(this.step_red, this.step_green, this.step_blue);

    this.RGBColor = color_1;
  }

  private checkBorders() {
    if (this.RGBColor.red >= this.max_red || this.RGBColor.red <= this.min_red)
      this.step_red = -this.step_red;
    if (this.RGBColor.green >= this.max_green || this.RGBColor.green <= this.min_green)
      this.step_green = -this.step_green;
    if (this.RGBColor.blue >= this.max_blue || this.RGBColor.blue <= this.min_blue)
      this.step_blue = -this.step_blue;
  }

  private calculateColor() {
    const {RGBColor} = this;

    this.stringColor = `rgb(${RGBColor.red},${RGBColor.green},${RGBColor.blue})`;
  }

  public change() {
    this.checkBorders();

    this.RGBColor.red += this.step_red;
    this.RGBColor.green += this.step_green;
    this.RGBColor.blue += this.step_blue;

    this.calculateColor();
  }
}