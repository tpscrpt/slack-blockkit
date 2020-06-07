import assert from "assert";
import { Block } from "./block";
import { PlainText } from "../text/plain";

export class ImageBlock extends Block {
  public image_url: string;
  public alt_text: string;
  public title?: PlainText;

  constructor(params: {
    /**
     * The URL of the image to be displayed.
     * Maximum length for this field is 3000 characters.
     */
    image_url: string;
    /**
     * A plain-text summary of the image.
     * This should not contain any markup.
     * Maximum length for this field is 2000 characters.
     */
    alt_text: string;
    /**
     * An optional title for the image in the form of a PlainText.
     * Maximum length for the text in this field is 2000 characters.
     */
    title?: PlainText;
    block_id?: string;
  }) {
    super({ type: "image", block_id: params.block_id });

    assert(params.image_url.length <= 3000, "Max image url length is 3000 characters");
    assert(params.alt_text.length <= 2000, "Max alt text length is 2000 characters");
    if (params.title)
      assert(params.title.text.length <= 2000, "Max title length is 2000 characters");

    this.image_url = params.image_url;
    this.alt_text = params.alt_text;
    this.title = params.title;
  }
}
