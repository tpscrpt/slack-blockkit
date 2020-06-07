import assert from "assert";
import { Block } from "./block";
import { ImageElement } from "../element/image";
import { MarkdownText } from "../text/markdown";
import { PlainText } from "../text/plain";

export class ContextBlock extends Block {
  public elements: (ImageElement | MarkdownText | PlainText)[];

  constructor(params: {
    /**
     * An array of image elements and text objects.
     * Maximum number of items is 10.
     */
    elements: (ImageElement | MarkdownText | PlainText)[];
    block_id?: string;
  }) {
    super({ type: "context", block_id: params.block_id });

    assert(params.elements.length <= 10, "Max elements length is 10");

    this.elements = params.elements;
  }
}
