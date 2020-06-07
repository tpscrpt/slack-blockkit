import assert from "assert";
import { Block } from "./block";
import { Element } from "../element/element";
import { MarkdownText } from "../text/markdown";
import { PlainText } from "../text/plain";

export class SectionBlock extends Block {
  public text?: MarkdownText | PlainText;
  public fields?: (MarkdownText | PlainText)[];
  public accessory?: Element;

  constructor(params: {
    /**
     * The text for the block, in the form of a Text.
     * Maximum length for the text in this field is 3000 characters.
     * This field is not required if a valid array of fields objects is provided instead.
     */
    text?: MarkdownText | PlainText;
    /**
     * An array of Text.
     * Any Text's included with fields will be rendered in a compact format that allows for 2 columns of side-by-side text.
     * Maximum number of items is 10.
     * Maximum length for the text in each item is 2000 characters.
     * [Click here for an example](https://api.slack.com/tools/block-kit-builder?blocks=%5B%0A%09%7B%0A%09%09%22type%22%3A%20%22section%22%2C%0A%09%09%22text%22%3A%20%7B%0A%09%09%09%22text%22%3A%20%22A%20message%20*with%20some%20bold%20text*%20and%20_some%20italicized%20text_.%22%2C%0A%09%09%09%22type%22%3A%20%22mrkdwn%22%0A%09%09%7D%2C%0A%09%09%22fields%22%3A%20%5B%0A%09%09%09%7B%0A%09%09%09%09%22type%22%3A%20%22mrkdwn%22%2C%0A%09%09%09%09%22text%22%3A%20%22*Priority*%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22type%22%3A%20%22mrkdwn%22%2C%0A%09%09%09%09%22text%22%3A%20%22*Type*%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22type%22%3A%20%22plain_text%22%2C%0A%09%09%09%09%22text%22%3A%20%22High%22%0A%09%09%09%7D%2C%0A%09%09%09%7B%0A%09%09%09%09%22type%22%3A%20%22plain_text%22%2C%0A%09%09%09%09%22text%22%3A%20%22String%22%0A%09%09%09%7D%0A%09%09%5D%0A%09%7D%0A%5D).
     */
    fields?: (MarkdownText | PlainText)[];
    /**
     * One of the available element objects.
     */
    accessory?: Element;
    block_id?: string;
  }) {
    super({
      type: "section",
      block_id: params.block_id,
    });

    if (params.text) assert(params.text.text.length <= 3000, "Max text length is 3000 characters");
    if (params.fields) {
      assert(params.fields.length <= 10, "Max fields length is 10");
      params.fields.forEach((field) =>
        assert(field.text.length <= 2000, "Max field length is 2000 characters"),
      );
    }

    assert(params.text || params.fields?.length, "Must provide at least text or fields");

    this.text = params.text;
    this.fields = params.fields;
    this.accessory = params.accessory;
  }
}
