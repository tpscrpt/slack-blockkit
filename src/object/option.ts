import assert from "assert";
import { PlainText } from "../text/plain";
import { MarkdownText } from "../text/markdown";

export abstract class BaseOptionObject<RestrictedText extends MarkdownText | PlainText> {
  public text: RestrictedText;
  public value: string;

  constructor(params: { text: RestrictedText; value: string }) {
    assert(params.text.text.length <= 75, "Max text length is 75 characters");
    assert(params.value.length <= 75, "Max value length is 75 characters");

    this.text = params.text;
    this.value = params.value;
  }
}

export class StandardOptionObject<
  RestrictedText extends MarkdownText | PlainText
> extends BaseOptionObject<RestrictedText> {
  constructor(params: {
    /**
     * A text object that defines the text shown in the option on the menu.
     * Maximum length for the text in this field is 75 characters.
     */
    text: RestrictedText;
    /**
     * The string value that will be passed to your app when this option is chosen.
     * Maximum length for this field is 75 characters.
     */
    value: string;
    /**
     * A PlainText that defines a line of descriptive text shown below the text field beside the radio button.
     * Maximum length for the text object within this field is 75 characters.
     */
  }) {
    super({ text: params.text, value: params.value });
  }
}

export class RadioButtonOptionObject extends StandardOptionObject<MarkdownText | PlainText> {
  public description: PlainText;

  constructor(params: {
    /**
     * A text object that defines the text shown in the option on the menu.
     * Maximum length for the text in this field is 75 characters.
     */
    text: MarkdownText | PlainText;
    /**
     * The string value that will be passed to your app when this option is chosen.
     * Maximum length for this field is 75 characters.
     */
    value: string;
    /**
     * A PlainText that defines a line of descriptive text shown below the text field beside the radio button.
     * Maximum length for the text object within this field is 75 characters.
     */
    description: PlainText;
  }) {
    super({ text: params.text, value: params.value });
    if (params.description)
      assert(params.description.type.length <= 75, "Max description length is 75 characters");

    this.description = params.description;
  }
}

export class OverflowOptionObject extends BaseOptionObject<PlainText> {
  public url?: string;

  constructor(params: {
    /**
     * A text object that defines the text shown in the option on the menu.
     * Maximum length for the text in this field is 75 characters.
     */
    text: PlainText;
    /**
     * The string value that will be passed to your app when this option is chosen.
     * Maximum length for this field is 75 characters.
     */
    value: string;
    /**
     * A URL to load in the user's browser when the option is clicked.
     * Maximum length for this field is 3000 characters.
     * If you're using url, you'll still receive an interaction payload and will need to send an acknowledgement response.
     */
    url?: string;
  }) {
    super({ text: params.text, value: params.value });

    if (params.url) assert(params.url.length <= 3000, "Max url length is 3000 characters");

    this.url = params.url;
  }
}
