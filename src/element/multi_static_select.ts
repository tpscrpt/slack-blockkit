import assert from "assert";
import { Placeholder } from "../text/placeholder";
import { ConfirmObject } from "../object/confirm";
import { MultiSelectElement } from "./multiselect";
import { StandardOptionObject } from "../object/option";
import { OptionGroupObject } from "../object/optiongroup";
import { PlainText } from "../text/plain";

export class MultiStaticSelectElement extends MultiSelectElement {
  public options?: StandardOptionObject<PlainText>[];
  public option_groups?: OptionGroupObject<StandardOptionObject<PlainText>>[];
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
    options?: StandardOptionObject<PlainText>[];
    option_groups?: OptionGroupObject<StandardOptionObject<PlainText>>[];
    initial_options?: StandardOptionObject<PlainText>[];
    confirm?: ConfirmObject;
  }) {
    super({
      type: "multi_static_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      max_selected_items: params.max_selected_items,
      confirm: params.confirm,
    });

    assert(params.options || params.option_groups, "Must specify one of options or option groups");
    assert(
      !(params.options && params.option_groups),
      "Can't specify both options and option groups",
    );
    if (params.options) assert(params.options.length <= 100, "Max options length is 100");
    else if (params.option_groups)
      assert(params.option_groups.length <= 100, "Max option groups length is 100");

    this.options = params.options;
    this.option_groups = params.option_groups;
    this.initial_options = params.initial_options;
  }
}
