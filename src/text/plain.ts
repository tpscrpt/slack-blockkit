import { Text } from "./text";

export class PlainText extends Text {
  public emoji?: boolean;

  constructor(params: {
    text: string;
    /**
     * Indicates whether emojis in a text field should be escaped into the colon emoji format.
     */
    emoji?: boolean;
  }) {
    super({
      type: "plain_text",
      text: params.text,
    });

    this.emoji = params.emoji;
  }
}
