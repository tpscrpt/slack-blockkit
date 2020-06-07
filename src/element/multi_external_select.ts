import assert from "assert";
import { StandardOptionObject } from "../object/option";
import { ConfirmObject } from "../object/confirm";
import { Placeholder } from "../text/placeholder";
import { MultiSelectElement } from "./multiselect";
import { OptionGroupObject } from "../object/optiongroup";
import { PlainText } from "../text/plain";

export class MultiExternalSelectElement extends MultiSelectElement {
  public min_query_length?: number;
  public initial_options?: StandardOptionObject<PlainText>[];

  constructor(params: {
    action_id: string;
    /**
     * A PlainText that defines the placeholder text shown on the datepicker.
     * Maximum length for the text in this field is 150 characters.
     */
    placeholder: Placeholder;
    /**
     * Specifies the maximum number of items that can be selected in the menu.
     * Minimum number is 1.
     */
    max_selected_items?: number;
    /**
     * When the typeahead field is used, a request will be sent on every character change.
     * If you prefer fewer requests or more fully ideated queries, use the min_query_length attribute to tell Slack the fewest number of typed characters required before dispatch.
     * The default value is 3.
     */
    min_query_length?: number;
    initial_options?: StandardOptionObject<PlainText>[];
    confirm?: ConfirmObject;
  }) {
    super({
      type: "multi_external_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      max_selected_items: params.max_selected_items,
      confirm: params.confirm,
    });

    this.min_query_length = params.min_query_length;
    this.initial_options = params.initial_options;
  }
}

export class MultiExternalSelectElementResponse {
  constructor(params: {
    options?: StandardOptionObject<PlainText>[];
    option_groups?: OptionGroupObject<StandardOptionObject<PlainText>>[];
  }) {
    assert(params.options || params.option_groups);
    assert(
      !(params.options && params.option_groups),
      "Can't specify both options and option groups",
    );
    if (params.options) assert(params.options.length <= 100, "Options max length is 100");
    else if (params.option_groups)
      assert(params.option_groups.length <= 100, "Option groups max length is 100");
  }
}
