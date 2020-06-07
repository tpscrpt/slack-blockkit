import { Block } from "./block";

export class DividerBlock extends Block {
  constructor(params: { block_id?: string }) {
    super({ type: "divider", block_id: params.block_id });
  }
}
