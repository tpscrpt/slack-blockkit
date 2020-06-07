import { Block } from "./block";

export class FileBlock extends Block {
  public external_id: string;
  public source: string;

  constructor(params: {
    /**
     * The external unique ID for this file.
     */
    external_id: string;
    /**
     * At the moment, source will always be remote for a remote file.
     */
    source: string;
    block_id?: string;
  }) {
    super({ type: "file", block_id: params.block_id });

    this.external_id = params.external_id;
    this.source = params.source;
  }
}
