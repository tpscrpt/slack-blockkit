import assert from "assert";
import { Block } from "./block";
import { PlainText } from "../text/plain";
import { Element } from "../element/element";
import { PlainTextInputElement } from "../element/plain_text_input";
import { SelectElement } from "../element/select";
import { MultiSelectElement } from "../element/multiselect";
import { DatepickerElement } from "../element/datepicker";

export class InputBlock extends Block {
  public label: PlainText;
  public element: Element;
  public hint?: PlainText;
  public optional?: boolean;

  constructor(params: {
    /**
     * A label that appears above an input element in the form of a PlainText.
     * Maximum length for the text in this field is 2000 characters.
     */
    label: PlainText;
    /**
     * An plain-text input element, a select menu element, a multi-select menu element, or a datepicker.
     */
    element: PlainTextInputElement | SelectElement | MultiSelectElement | DatepickerElement;
    /**
     * An optional hint in the form of a PlainText that appears below an input element in a lighter grey.
     * Maximum length for the text in this field is 2000 characters.
     */
    hint?: PlainText;
    /**
     * A boolean that indicates whether the input element may be empty when a user submits the modal.
     * Defaults to false.
     */
    optional?: boolean;
    block_id?: string;
  }) {
    super({ type: "input", block_id: params.block_id });

    assert(params.label.text.length <= 2000, "Max label length is 2000 characters");
    if (params.hint) assert(params.hint.text.length <= 2000, "Max hint length is 2000 characters");

    this.label = params.label;
    this.element = params.element;
    this.hint = params.hint;
    this.optional = params.optional;
  }
}
