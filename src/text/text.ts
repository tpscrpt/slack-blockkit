import { TextType } from "./types";

export class Text {
  public type: TextType;
  public text: string;

  constructor(params: { type: TextType; text: string }) {
    this.type = params.type;
    this.text = params.text;
  }
}
