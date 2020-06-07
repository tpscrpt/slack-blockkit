import assert from "assert";
import { Block } from "./block/block";
import { PlainText } from "./text/plain";
import {
  ActionsBlock,
  ContextBlock,
  DividerBlock,
  ImageBlock,
  InputBlock,
  SectionBlock,
} from "./block";

export type ViewType = "modal" | "home";

export class View {
  public type: ViewType;
  public blocks: Block[];
  public private_metadata?: string;
  public callback_id?: string;
  public external_id?: string;

  constructor(params: {
    type: ViewType;
    blocks: Block[];
    private_metadata?: string;
    callback_id?: string;
    external_id?: string;
  }) {
    assert(params.blocks.length <= 100, "Max blocks length is 100");
    if (params.private_metadata)
      assert(
        params.private_metadata.length <= 3000,
        "Max private metadata length is 3000 characters",
      );
    if (params.callback_id)
      assert(params.callback_id.length <= 255, "Max callback id length is 255 characters");

    this.type = params.type;
    this.blocks = params.blocks;
    this.private_metadata = params.private_metadata;
    this.callback_id = params.callback_id;
    this.external_id = params.external_id;
  }
}

export class ModalView extends View {
  public title: PlainText;
  public close?: PlainText;
  public submit?: PlainText;
  public clear_on_close?: boolean;
  public notify_on_close?: boolean;

  constructor(params: {
    blocks: (ActionsBlock | ContextBlock | DividerBlock | ImageBlock | InputBlock | SectionBlock)[];
    title: PlainText;
    close?: PlainText;
    submit?: PlainText;
    clear_on_close?: boolean;
    notify_on_close?: boolean;
    private_methadata?: string;
    callback_id?: string;
    external_id?: string;
  }) {
    super({
      type: "modal",
      blocks: params.blocks,
      private_metadata: params.private_methadata,
      callback_id: params.callback_id,
      external_id: params.external_id,
    });

    assert(params.title.text.length <= 25, "Max title length is 25 characters");
    if (params.close) assert(params.close.text.length <= 24, "Max close length is 24 characters");
    if (params.submit) assert(params.submit.text.length <= 24, "Max close length is 24 characters");

    this.title = params.title;
    this.close = params.close;
    this.submit = params.submit;
    this.clear_on_close = params.clear_on_close;
    this.notify_on_close = params.notify_on_close;
  }
}

export class HomeView extends View {
  constructor(params: {
    blocks: (ActionsBlock | ContextBlock | DividerBlock | ImageBlock | SectionBlock)[];
    private_metadata?: string;
    callback_id?: string;
    external_id?: string;
  }) {
    super({ type: "home", ...params });
  }
}
