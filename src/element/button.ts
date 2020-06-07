import assert from "assert";
import { ConfirmObject } from "../object/confirm";
import { ConfirmedElement } from "./element";
import { PlainText } from "../text/plain";

type ButtonStyle = "primary" | "danger";

export class ButtonElement extends ConfirmedElement {
  public text: PlainText;
  public action_id: string;
  public url?: string;
  public value?: string;
  public style?: ButtonStyle;

  constructor(params: {
    /**
     * A PlainText that defines the button's text.
     * Maximum length for the text in this field is 75 characters.
     */
    text: PlainText;
    action_id: string;
    /**
     * A URL to load in the user's browser when the button is clicked.
     * Maximum length for this field is 3000 characters.
     * If you're using url, you'll still receive an interaction payload and will need to send an acknowledgement response.
     */

    url?: string;
    /**
     * The value to send along with the interaction payload.
     * Maximum length for this field is 2000 characters.
     */
    value?: string;
    /**
     * One of "primary" or "danger"
     */
    style?: ButtonStyle;
    confirm?: ConfirmObject;
  }) {
    super({ type: "button", action_id: params.action_id, confirm: params.confirm });

    assert(params.text.text.length <= 75, "Max text length is 75 characters");
    if (params.url) assert(params.url.length <= 3000, "Max url length is 3000 characters");
    if (params.value) assert(params.value.length <= 2000, "Max value length is 2000 characters");

    this.text = params.text;
    this.action_id = params.action_id;
    this.url = params.url;
    this.value = params.value;
    this.style = params.style;
  }
}
