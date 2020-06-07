import { ConfirmObject } from "../object/confirm";
import { Placeholder } from "../text/placeholder";
import { SelectElement } from "./select";

export class ChannelsSelectElement extends SelectElement {
  public initial_channel?: string;
  public url_response_enabled?: boolean;

  constructor(params: {
    action_id: string;
    /**
     * A PlainText that defines the placeholder text shown on the datepicker.
     * Maximum length for the text in this field is 150 characters.
     */
    placeholder: Placeholder;
    /**
     * The ID of any valid public channel to be pre-selected when the menu loads.
     */
    initial_channel?: string;
    /**
     * This field only works with menus in input blocks in modals.
     * When set to true, the view_submission payload from the menu's parent view will contain a response_url.
     * This response_url can be used for message responses.
     * The target channel for the message will be determined by the value of this select menu.
     */
    url_response_enabled?: boolean;
    confirm?: ConfirmObject;
  }) {
    super({
      type: "channels_select",
      action_id: params.action_id,
      placeholder: params.placeholder,
      confirm: params.confirm,
    });

    this.initial_channel = params.initial_channel;
    this.url_response_enabled = params.url_response_enabled;
  }
}
