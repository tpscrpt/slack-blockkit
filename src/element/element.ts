import { ConfirmObject } from "../object/confirm";
import assert from "assert";
import { ElementType } from "./types";

export abstract class Element {
  public type: ElementType;
  public action_id: string;

  constructor(params: { type: ElementType; action_id: string }) {
    assert(params.action_id.length <= 255, "Max length of action_id is 255 characters");

    this.type = params.type;
    this.action_id = params.action_id;
  }
}

export abstract class ConfirmedElement extends Element {
  public confirm?: ConfirmObject;

  constructor(params: { type: ElementType; action_id: string; confirm?: ConfirmObject }) {
    super({ type: params.type, action_id: params.action_id });

    this.confirm = params.confirm;
  }
}
