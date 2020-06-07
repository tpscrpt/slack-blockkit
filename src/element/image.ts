import { Element } from "./element";

export class ImageElement extends Element {
  public image_url: string;
  public alt_text: string;

  constructor(params: {
    action_id: string;
    /**
     * The URL of the image to be displayed.
     */
    image_url: string;
    /**
     * A plain-text summary of the image.
     * This should not contain any markup.
     */
    alt_text: string;
  }) {
    super({ type: "image", action_id: params.action_id });

    this.image_url = params.image_url;
    this.alt_text = params.alt_text;
  }
}
