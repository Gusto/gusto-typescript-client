/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorPaymentMethodsGetBankAccounts } from "../funcs/contractorPaymentMethodsGetBankAccounts.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ContractorPaymentMethods extends ClientSDK {
  /**
   * Get all contractor bank accounts
   *
   * @remarks
   * Returns all contractor bank accounts.
   *
   * scope: `contractor_payment_methods:read`
   */
  async getBankAccounts(
    request: operations.GetV1ContractorsContractorUuidBankAccountsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.ContractorBankAccount>> {
    return unwrapAsync(contractorPaymentMethodsGetBankAccounts(
      this,
      request,
      options,
    ));
  }
}
