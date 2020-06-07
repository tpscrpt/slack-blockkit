import assert from "assert";
import { Block } from "./block";
import { Element } from "../element/element";

export class ActionsBlock extends Block {
  public elements: Element[];

  constructor(params: {
    /**
     * An array of interactive element objects - buttons, select menus, overflow menus, or date pickers.
     * There is a maximum of 5 elements in each action block.
     */
    elements: Element[];
    block_id?: string;
  }) {
    super({ type: "actions", block_id: params.block_id });

    assert(params.elements.length <= 5, "Max elements length is 5");

    this.elements = params.elements;
  }
}
