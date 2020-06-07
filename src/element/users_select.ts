import { SelectElement } from "./select";
import { Placeholder } from "../text/placeholder";
import { ConfirmObject } from "../object/confirm";

export class UserSelectElement extends SelectElement {
  public initial_user?: string;

  constructor(params: {
    action_id: string;
    /**
     * A PlainText that defines the placeholder text shown on the datepicker.
     * Maximum length for the text in this field is 150 characters.
     */
    placeholder: Placeholder;
    /**
     * The user ID of any valid user to be pre-selected when the menu loads.
     */
    initial_user?: string;
    confirm?: ConfirmObject;
  }) {
    super({
      type: "users_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      confirm: params.confirm,
    });

    this.initial_user = params.initial_user;
  }
}
