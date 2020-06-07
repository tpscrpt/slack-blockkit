import { ConfirmObject } from "../object/confirm";
import { ConfirmedElement } from "./element";
import { StandardOptionObject } from "../object/option";
import { PlainText } from "../text/plain";
import { MarkdownText } from "../text/markdown";

export class CheckboxesElement extends ConfirmedElement {
  public options: StandardOptionObject<MarkdownText | PlainText>[];
  public initial_options?: StandardOptionObject<MarkdownText | PlainText>[];

  constructor(params: {
    action_id: string;
    options: StandardOptionObject<MarkdownText | PlainText>[];
    initial_options?: StandardOptionObject<MarkdownText | PlainText>[];
    confirm?: ConfirmObject;
  }) {
    super({ type: "checkboxes", action_id: params.action_id, confirm: params.confirm });

    this.options = params.options;
  }
}
