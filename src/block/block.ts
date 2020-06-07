import { BlockType } from "./types";

export class Block {
  public type: BlockType;
  public block_id?: string;

  constructor(params: { type: BlockType; block_id?: string }) {
    this.type = params.type;
    this.block_id = params.block_id;
  }
}
