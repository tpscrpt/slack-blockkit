import { ConfirmObject } from "../object/confirm";
import { ConfirmedElement } from "./element";
import { RadioButtonOptionObject } from "../object/option";

export class RadioButtonsElement extends ConfirmedElement {
  public options: RadioButtonOptionObject[];
  public initial_options?: RadioButtonOptionObject[];

  constructor(params: {
    action_id: string;
    options: RadioButtonOptionObject[];
    initial_options?: RadioButtonOptionObject[];
    confirm?: ConfirmObject;
  }) {
    super({ type: "radio_buttons", action_id: params.action_id, confirm: params.confirm });

    this.options = params.options;
    this.initial_options = params.initial_options;
  }
}
