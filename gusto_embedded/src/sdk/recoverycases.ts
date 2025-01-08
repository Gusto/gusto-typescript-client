/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { recoveryCasesGetAll } from "../funcs/recoveryCasesGetAll.js";
import { recoveryCasesInitiateRedeit } from "../funcs/recoveryCasesInitiateRedeit.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class RecoveryCases extends ClientSDK {
  /**
   * Get all recovery cases for a company
   *
   * @remarks
   * Fetch all recovery cases for a company.
   *
   * scope: `recovery_cases:read`
   */
  async getAll(
    request: operations.GetRecoveryCasesRequest,
    options?: RequestOptions,
  ): Promise<Array<components.RecoveryCase>> {
    return unwrapAsync(recoveryCasesGetAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate a redebit for a recovery case
   *
   * @remarks
   * After resolving the underlying bank error, initiate a redebit for an open recovery case. This submission is asynchronous and a successful request responds with a 202 HTTP status.
   *
   * It may take up to four business days for the ACH debit to process; in the meantime, the status of the recovery case will be in the `initiated_redebit` state. When funds are successfully redebited, the recovery case is transitioned to the `recovered` state.
   *
   * If the company has exceeded maximum redebit attempts, or if the recovery case is not in a redebitable state, the response will be 422 Unprocessable Entity.
   *
   * scope: `recovery_cases:write`
   */
  async initiateRedeit(
    request: operations.RedebitRecoveryCaseRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(recoveryCasesInitiateRedeit(
      this,
      request,
      options,
    ));
  }
}
