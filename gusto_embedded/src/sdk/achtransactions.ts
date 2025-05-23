/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { achTransactionsGetAll } from "../funcs/achTransactionsGetAll.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  GetAchTransactionsRequest,
  GetAchTransactionsResponse,
} from "../models/operations/getachtransactions.js";
import { unwrapAsync } from "../types/fp.js";

export class AchTransactions extends ClientSDK {
  /**
   * Get all ACH transactions for a company
   *
   * @remarks
   * Fetches all ACH transactions for a company.
   *
   * scope: `ach_transactions:read`
   */
  async getAll(
    request: GetAchTransactionsRequest,
    options?: RequestOptions,
  ): Promise<GetAchTransactionsResponse> {
    return unwrapAsync(achTransactionsGetAll(
      this,
      request,
      options,
    ));
  }
}
