import assert from "assert";
import { ConfirmObject } from "../object/confirm";
import { ConfirmedElement } from "./element";
import { ElementType } from "./types";
import { Placeholder } from "../text/placeholder";

export abstract class SelectElement extends ConfirmedElement {
  public placeholder: Placeholder;

  constructor(params: {
    type: ElementType;
    action_id: string;
    placeholder: Placeholder;
    confirm?: ConfirmObject;
  }) {
    super({ type: params.type, action_id: params.action_id, confirm: params.confirm });

    assert(params.placeholder.text.length <= 150, "Placeholder max length is 150 characters");

    this.placeholder = params.placeholder;
  }
}
