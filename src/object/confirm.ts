import assert from "assert";
import { PlainText } from "../text/plain";
import { MarkdownText } from "../text/markdown";

export type Style = "primary" | "danger";

export class ConfirmObject {
  public title: PlainText;
  public text: MarkdownText | PlainText;
  public confirm: PlainText;
  public deny: PlainText;
  public style?: Style;

  constructor(params: {
    /**
     * A PlainText that defines the dialog's title.
     * Maximum length for this field is 100 characters.
     */
    title: PlainText;
    /**
     * A Text that defines the explanatory text that appears in the confirm dialog.
     * Maximum length for the text in this field is 300 characters.
     */
    text: MarkdownText | PlainText;
    /**
     * A PlainText to define the text of the button that confirms the action.
     * Maximum length for the text in this field is 30 characters.
     */
    confirm: PlainText;
    /**
     * A PlainText to define the text of the button that cancels the action.
     * Maximum length for the text in this field is 30 characters.
     */
    deny: PlainText;
    /**
     * Defines the color scheme applied to the confirm button.
     * A value of "danger" will display the button with a red background on desktop, or red text on mobile.
     * A value of "primary" will display the button with a green background on desktop, or blue text on mobile.
     * If this field is not provided, the default value will be primary.
     */
    style?: Style;
  }) {
    assert(params.title.text.length <= 100, "Title max length is 100 characters");
    assert(params.text.text.length <= 300, "Text max length is 300 characters");
    assert(params.confirm.text.length <= 30, "Confirm max length is 30 characters");
    assert(params.deny.text.length <= 30, "Deny max length is 30 characters");

    this.title = params.title;
    this.text = params.text;
    this.confirm = params.confirm;
    this.deny = params.deny;
    this.style = params.style;
  }
}
