import { ConfirmObject } from "../object/confirm";
import { MultiSelectElement } from "./multiselect";
import { Placeholder } from "../text/placeholder";

export class MultiChannelsSelectElement extends MultiSelectElement {
  public initial_channels?: string[];

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
     * An array of one or more IDs of any valid public channel to be pre-selected when the menu loads.
     */
    initial_channels?: string[];
    confirm?: ConfirmObject;
  }) {
    super({
      type: "multi_channels_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      max_selected_items: params.max_selected_items,
      confirm: params.confirm,
    });

    this.initial_channels = params.initial_channels;
  }
}
