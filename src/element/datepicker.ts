import assert from "assert";
import { ConfirmObject } from "../object/confirm";
import { ConfirmedElement } from "./element";
import { Placeholder } from "../text/placeholder";

export class DatepickerElement extends ConfirmedElement {
  public placeholder?: Placeholder;
  public initial_date?: string;

  constructor(params: {
    action_id: string;
    placeholder?: Placeholder;
    /**
     * The initial date that is selected when the element is loaded.
     * This should be in the format YYYY-MM-DD.
     */
    initial_date?: string;
    confirm?: ConfirmObject;
    /**
     * Skip validation of the provided initial_date
     */
    skipInitialDateValidation?: boolean;
  }) {
    super({ type: "datepicker", action_id: params.action_id, confirm: params.confirm });

    if (params.placeholder)
      assert(params.placeholder.text.length <= 150, "Max placeholder length is 150 characters");

    if (params.initial_date && !params.skipInitialDateValidation)
      assert(
        DatepickerElement.isValidDate(params.initial_date),
        'Initial date is not of format "YYYY-MM-DD"',
      );

    this.placeholder = params.placeholder;
    this.initial_date = params.initial_date;
  }

  static isValidDate(date: string): boolean {
    const splits = date.split("-");

    if (splits.length !== 3) return false;
    if (splits[0].length !== 4 || !Number(splits[0])) return false;
    if (splits[1].length !== 2 || !Number(splits[1])) return false;
    if (splits[2].length !== 2 || !Number(splits[2])) return false;

    return true;
  }
}
