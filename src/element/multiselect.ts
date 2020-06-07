import assert from "assert";
import { ConfirmObject } from "../object/confirm";
import { ConfirmedElement } from "./element";
import { ElementType } from "./types";
import { Placeholder } from "../text/placeholder";

export abstract class MultiSelectElement extends ConfirmedElement {
  public placeholder: Placeholder;
  public max_selected_items?: number;

  constructor(params: {
    type: ElementType;
    action_id: string;
    placeholder: Placeholder;
    max_selected_items?: number;
    confirm?: ConfirmObject;
  }) {
    super({ type: params.type, action_id: params.action_id, confirm: params.confirm });

    assert(params.placeholder.text.length <= 150, "Placeholder max length is 150 characters");

    if (params.max_selected_items !== undefined)
      assert(params.max_selected_items >= 1, "If providing max selected items, must be at least 1");

    this.placeholder = params.placeholder;
    this.max_selected_items = params.max_selected_items;
  }
}
