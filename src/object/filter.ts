import assert from "assert";

export class FilterObject {
  include?: string[];
  exclude_external_shared_channels?: boolean;
  exclude_bot_users?: boolean;

  constructor(params: {
    /**
     * Indicates which type of conversations should be included in the list.
     * When this field is provided, any conversations that do not match will be excluded.
     * You should provide an array of strings from the following options: im, mpim, private, and public.
     * The array cannot be empty.
     */
    include?: string[];
    /**
     * Indicates whether to exclude external shared channels from conversation lists.
     * Defaults to false.
     */
    exclude_external_shared_channels?: boolean;
    /**
     * Indicates whether to exclude bot users from conversation lists.
     * Defaults to false.
     */
    exclude_bot_users?: boolean;
  }) {
    if (params.include) assert(params.include.length, "Min include length is 1");

    this.include = params.include;
    this.exclude_external_shared_channels = params.exclude_external_shared_channels;
    this.exclude_bot_users = params.exclude_bot_users;
  }
}
