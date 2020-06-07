import assert from "assert";
import { Block } from "./block/block";

export class FieldObject {
  public title?: string;
  public value?: string;
  public short?: boolean;
}

type HexColorCode = string;
export type ColorType = "good" | "warning" | "danger" | HexColorCode;

class SecondaryAttachment {
  public blocks?: Block[];
  public color?: ColorType;
  public fallback?: string;
  public text?: string;
  public author_icon?: string;
  public author_link?: string;
  public author_name?: string;
  public fields?: FieldObject[];
  public footer?: string;
  public footer_icon?: string;
  public image_url?: string;
  public mrkdwn_in?: string[];
  public pre_text?: string;
  public thumb_url?: string;
  public title?: string;
  public title_link?: string;
  public ts?: number;

  constructor(params: {
    blocks?: Block[];
    color?: ColorType;
    fallback?: string;
    text?: string;
    author_icon?: string;
    author_link?: string;
    author_name?: string;
    fields?: FieldObject[];
    footer?: string;
    footer_icon?: string;
    image_url?: string;
    mrkdwn_in?: string[];
    pre_text?: string;
    thumb_url?: string;
    title?: string;
    title_link?: string;
    ts?: number;
  }) {
    if (!params.blocks)
      assert(
        params.fallback || params.text,
        "Must provide either fallback or text if not providing blocks",
      );

    if (params.footer) assert(params.footer.length <= 300, "Max footer length is 300 characters");

    this.blocks = params.blocks;
    this.color = params.color;
    this.fallback = params.fallback;
    this.text = params.text;
    this.author_icon = params.author_icon;
    this.author_link = params.author_link;
    this.author_name = params.author_name;
    this.fields = params.fields;
    this.footer = params.footer;
    this.footer_icon = params.footer_icon;
    this.image_url = params.image_url;
    this.mrkdwn_in = params.mrkdwn_in;
    this.pre_text = params.pre_text;
    this.thumb_url = params.thumb_url;
    this.title = params.title;
    this.title_link = params.title_link;
    this.ts = params.ts;
  }
}

export class Message {
  public text?: string;
  public blocks?: Block[];
  public attachments?: SecondaryAttachment[];
  public thread_ts?: string;
  public mrkdwn?: boolean;

  constructor(params: {
    text?: string;
    blocks?: Block[];
    attachments?: SecondaryAttachment[];
    thread_ts?: string;
    mrkdwn?: boolean;
  }) {
    assert(params.text || params.blocks, "Must provide one or two of text or blocks");

    this.text = params.text;
    this.blocks = params.blocks;
    this.attachments = params.attachments;
    this.thread_ts = params.thread_ts;
    this.mrkdwn = params.mrkdwn;
  }
}

export class SendMessage extends Message {
  public channel: string;

  constructor(params: {
    channel: string;
    text?: string;
    blocks?: Block[];
    attachments?: SecondaryAttachment[];
    thread_ts?: string;
    mrkdwn?: boolean;
  }) {
    super({
      text: params.text,
      blocks: params.blocks,
      attachments: params.attachments,
      thread_ts: params.thread_ts,
      mrkdwn: params.mrkdwn,
    });

    this.channel = params.channel;
  }
}
