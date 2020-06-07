import { ConfirmObject } from "../object/confirm";
import { Placeholder } from "../text/placeholder";
import { SelectElement } from "./select";
import { StandardOptionObject } from "../object/option";
import { PlainText } from "../text/plain";

export class ExternalSelectElement extends SelectElement {
  public initial_option?: StandardOptionObject<PlainText>;
  public min_query_length?: number;

  constructor(params: {
    action_id: string;
    /**
     * A PlainText that defines the placeholder text shown on the datepicker.
     * Maximum length for the text in this field is 150 characters.
     */
    placeholder: Placeholder;
    initial_option?: StandardOptionObject<PlainText>;
    /**
     * When the typeahead field is used, a request will be sent on every character change.
     * If you prefer fewer requests or more fully ideated queries, use the min_query_length attribute to tell Slack the fewest number of typed characters required before dispatch.
     * The default value is 3.
     */
    min_query_length?: number;
    confirm?: ConfirmObject;
  }) {
    super({
      type: "external_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      confirm: params.confirm,
    });

    this.initial_option = params.initial_option;
    this.min_query_length = params.min_query_length;
  }
}
