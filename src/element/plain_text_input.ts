import assert from "assert";
import { Element } from "./element";
import { Placeholder } from "../text/placeholder";

export class PlainTextInputElement extends Element {
  public placeholder?: Placeholder;
  public initial_value?: string;
  public multiline?: boolean;
  public min_length?: number;
  public max_length?: number;

  constructor(params: {
    action_id: string;
    placeholder?: Placeholder;
    /**
     * The initial value in the plain-text input when it is loaded.
     */
    initial_value?: string;
    /**
     * Indicates whether the input will be a single line (false) or a larger textarea (true).
     * Defaults to false.
     */
    multiline?: boolean;
    /**
     * The minimum length of input that the user must provide.
     * If the user provides less, they will receive an error.
     * Maximum value is 3000.
     */
    min_length?: number;
    /**
     * The maximum length of input that the user can provide.
     * If the user provides more, they will receive an error.
     */
    max_length?: number;
  }) {
    super({ type: "plain_text_input", action_id: params.action_id });

    assert(
      !params.placeholder || params.placeholder.text.length <= 150,
      "Max placeholder length is 150 characters",
    );

    assert(!params.min_length || params.min_length <= 3000, "Min length max value is 3000");

    this.placeholder = params.placeholder;
    this.initial_value = params.initial_value;
    this.multiline = params.multiline;
    this.min_length = params.min_length;
    this.max_length = params.max_length;
  }
}
