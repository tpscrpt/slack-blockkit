import { ConfirmObject } from "../object/confirm";
import { FilterObject } from "../object/filter";
import { MultiSelectElement } from "./multiselect";
import { Placeholder } from "../text/placeholder";

export class MultiConversationsSelectElement extends MultiSelectElement {
  public initial_conversations?: string[];
  public default_to_current_conversation?: boolean;
  public filter?: FilterObject;

  constructor(params: {
    action_id: string;
    /**
     * A PlainText that defines the placeholder text shown on the datepicker.
     * Maximum length for the text in this field is 150 characters.
     */
    placeholder: Placeholder;
    /**
     * Specifies the maximum number of items that can be selected in the menu. Minimum number is 1.
     */
    max_selected_items?: number;
    /**
     * An array of one or more IDs of any valid conversations to be pre-selected when the menu loads.
     */
    initial_conversations?: string[];
    /**
     * Pre-populates the select menu with the conversation that the user was viewing when they opened the modal, if available.
     * If initial_conversations is also supplied, it will be ignored.
     * Default is false.
     */
    default_to_current_conversation?: boolean;
    filter?: FilterObject;
    confirm?: ConfirmObject;
  }) {
    super({
      type: "multi_conversations_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      max_selected_items: params.max_selected_items,
      confirm: params.confirm,
    });

    this.initial_conversations = params.initial_conversations;
    this.default_to_current_conversation = params.default_to_current_conversation;
    this.filter = params.filter;
  }
}
