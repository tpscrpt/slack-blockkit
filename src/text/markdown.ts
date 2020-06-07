import { Text } from "./text";

export class MarkdownText extends Text {
  verbatim?: boolean;

  constructor(params: {
    text: string;
    /**
     * When set to false (as is default) URLs will be auto-converted into links, conversation names will be link-ified, and certain mentions will be automatically parsed.
     * Using a value of true will skip any preprocessing of this nature, although you can still include manual parsing strings.
     */
    verbatim?: boolean;
  }) {
    super({
      type: "mrkdwn",
      text: params.text,
    });

    this.verbatim = params.verbatim;
  }
}
