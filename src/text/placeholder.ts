import assert from "assert";
import { PlainText } from "./plain";

export class Placeholder extends PlainText {
  constructor(params: { text: string; emoji?: boolean }) {
    super({
      text: params.text,
      /**
       * Indicates whether emojis in a text field should be escaped into the colon emoji format.
       */
      emoji: params.emoji,
    });

    assert(params.text.length <= 150, "Max placeholder length is 150 characters");
  }
}
