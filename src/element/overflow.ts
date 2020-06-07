import assert from "assert";
import { OverflowOptionObject } from "../object/option";
import { ConfirmObject } from "../object/confirm";
import { ConfirmedElement } from "./element";

export class OverflowElement extends ConfirmedElement {
  public options: OverflowOptionObject[];

  constructor(params: {
    action_id: string;
    options: OverflowOptionObject[];
    confirm?: ConfirmObject;
  }) {
    super({ type: "overflow", action_id: params.action_id, confirm: params.confirm });

    assert(
      params.options.length >= 2 && params.options.length <= 5,
      "Options length must be between 2 and 5 inclusively",
    );

    this.options = params.options;
  }
}
