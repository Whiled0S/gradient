import {ChangingColor} from "./ChangingColor";

export class Gradient {
  colors: ChangingColor[];

  width: number;
  height: number;

  constructor(colors: ChangingColor[], width: number, height: number) {
    this.colors = colors;

    this.width = width;
    this.height = height;
  }

  public draw(context: CanvasRenderingContext2D) {
    const gradient = context.createLinearGradient(0, 0, this.width, this.height);

    this.colors.map((color, index) => {
      color.change();
      gradient.addColorStop(index / (this.colors.length - 1), color.stringColor);
    });

    context.fillStyle = gradient;
    context.fillRect(0, 0, this.width, this.height);
  }
}