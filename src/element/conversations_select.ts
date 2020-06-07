import { ConfirmObject } from "../object/confirm";
import { FilterObject } from "../object/filter";
import { SelectElement } from "./select";
import { Placeholder } from "../text/placeholder";

export class ConversationsSelectElement extends SelectElement {
  public initial_conversation?: string;
  public default_to_current_conversation?: boolean;
  public response_url_enabled?: boolean;
  public filter?: FilterObject;

  constructor(params: {
    action_id: string;
    /**
     * A PlainText that defines the placeholder text shown on the datepicker.
     * Maximum length for the text in this field is 150 characters.
     */
    placeholder: Placeholder;
    /**
     * The ID of any valid conversation to be pre-selected when the menu loads.
     */
    initial_conversation?: string;
    /**
     * Pre-populates the select menu with the conversation that the user was viewing when they opened the modal, if available.
     * If initial_conversation is also supplied, it will be ignored.
     * Default is false.
     */
    default_to_current_conversation?: boolean;
    /**
     * This field only works with menus in input blocks in modals.
     * When set to true, the view_submission payload from the menu's parent view will contain a response_url.
     * This response_url can be used for message responses.
     * The target conversation for the message will be determined by the value of this select menu.
     */
    response_url_enabled?: boolean;
    filter?: FilterObject;
    confirm?: ConfirmObject;
  }) {
    super({
      type: "conversations_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      confirm: params.confirm,
    });

    this.initial_conversation = params.initial_conversation;
    this.default_to_current_conversation = params.default_to_current_conversation;
    this.response_url_enabled = params.response_url_enabled;
    this.filter = params.filter;
  }
}
