import assert from "assert";
import { PlainText } from "../text/plain";
import { BaseOptionObject } from "./option";
import { MarkdownText } from "../text/markdown";

export class OptionGroupObject<OptionObject extends BaseOptionObject<MarkdownText | PlainText>> {
  public label: PlainText;
  public options: OptionObject[];

  constructor(params: {
    /**
     * A PlainText that defines the label shown above this group of options.
     * Maximum length for the text in this field is 75 characters.
     */
    label: PlainText;
    options: OptionObject[];
  }) {
    assert(params.label.text.length <= 75, "Max label length is 75 characters");
    assert(params.options.length < 100, "Max options length is 100");

    this.label = params.label;
    this.options = params.options;
  }
}
