import {RGB} from "./RGB";
import config from "../config";

const {speed} = config;

export class ChangingColor {
  min_1: number;
  max_1: number;
  min_2: number;
  max_2: number;
  min_3: number;
  max_3: number;

  step_1: number;
  step_2: number;
  step_3: number;

  RGBColor: RGB;
  stringColor: string;

  constructor(color_1: RGB, color_2: RGB) {
    this.min_1 = Math.min(color_1.val_1, color_2.val_1);
    this.max_1 = Math.max(color_1.val_1, color_2.val_1);
    this.min_2 = Math.min(color_1.val_2, color_2.val_2);
    this.max_2 = Math.max(color_1.val_2, color_2.val_2);
    this.min_3 = Math.min(color_1.val_3, color_2.val_3);
    this.max_3 = Math.max(color_1.val_3, color_2.val_3);

    this.step_1 = (color_1.val_1 - color_2.val_1) / 60 * speed;
    this.step_2 = (color_1.val_2 - color_2.val_2) / 60 * speed;
    this.step_3 = (color_1.val_3 - color_2.val_3) / 60 * speed;

    console.log(this.step_1, this.step_2, this.step_3);

    this.RGBColor = color_1;
  }

  private checkBorders() {
    if (this.RGBColor.val_1 >= this.max_1 || this.RGBColor.val_1 <= this.min_1)
      this.step_1 = -this.step_1;
    if (this.RGBColor.val_2 >= this.max_2 || this.RGBColor.val_2 <= this.min_2)
      this.step_2 = -this.step_2;
    if (this.RGBColor.val_3 >= this.max_3 || this.RGBColor.val_3 <= this.min_3)
      this.step_3 = -this.step_3;
  }

  private calculateColor() {
    const {RGBColor} = this;

    this.stringColor = `rgb(${RGBColor.val_1},${RGBColor.val_2},${RGBColor.val_3})`;
  }

  public change() {
    this.checkBorders();

    this.RGBColor.val_1 += this.step_1;
    this.RGBColor.val_2 += this.step_2;
    this.RGBColor.val_3 += this.step_3;

    this.calculateColor();
  }
}