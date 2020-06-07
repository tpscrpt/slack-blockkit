import { Placeholder } from "../text/placeholder";
import { ConfirmObject } from "../object/confirm";
import { MultiSelectElement } from "./multiselect";

export class MultiUsersSelectElement extends MultiSelectElement {
  public initial_users?: string[];

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
     * An array of user IDs of any valid users to be pre-selected when the menu loads.
     */
    initial_users?: string[];
    confirm?: ConfirmObject;
  }) {
    super({
      type: "multi_users_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      max_selected_items: params.max_selected_items,
      confirm: params.confirm,
    });

    this.initial_users = params.initial_users;
  }
}
